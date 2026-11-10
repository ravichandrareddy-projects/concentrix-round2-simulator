import { useCallback, useEffect, useRef, useState } from 'react';

type RecognitionState = 'idle' | 'listening' | 'done' | 'error';

export function useSpeechRecognition() {
  const [state, setState] = useState<RecognitionState>('idle');
  const [transcript, setTranscript] = useState('');
  const [supported, setSupported] = useState(false);
  const [permissionError, setPermissionError] = useState('');
  const recRef = useRef<any>(null);
  const isListeningRef = useRef<boolean>(false);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setSupported(!!SR);
  }, []);

  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setState('error');
      setPermissionError('Speech recognition is not supported in this browser. Please use Google Chrome.');
      return;
    }

    // Abort any existing instance
    if (recRef.current) {
      try {
        recRef.current.abort();
      } catch (e) {
        // ignore
      }
    }

    setTranscript('');
    setPermissionError('');
    isListeningRef.current = true;
    setState('listening');

    try {
      const rec = new SR();
      recRef.current = rec;
      rec.lang = 'en-US';
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      // continuous = true so the browser keeps recording across natural pauses
      rec.continuous = true;

      rec.onresult = (e: any) => {
        let finalStr = '';
        let interimStr = '';
        for (let i = 0; i < e.results.length; i++) {
          const res = e.results[i];
          if (res.isFinal) {
            finalStr += res[0].transcript + ' ';
          } else {
            interimStr += res[0].transcript;
          }
        }
        const combined = (finalStr + interimStr).trim();
        if (combined) {
          setTranscript(combined);
        }
      };

      // If the browser prematurely fires onend while isListeningRef is still active, restart it!
      rec.onend = () => {
        if (isListeningRef.current) {
          try {
            rec.start();
          } catch (e) {
            // If already restarting or active, ignore
          }
        } else {
          setState('done');
        }
      };

      rec.onerror = (e: any) => {
        const err = e.error || '';
        if (err === 'not-allowed' || err === 'permission-denied') {
          isListeningRef.current = false;
          setState('error');
          setPermissionError('Microphone permission denied. Please allow microphone access in your browser settings.');
        } else if (err === 'no-speech') {
          // Do NOT cut off or stop recording on temporary silence!
          // User is just pausing between words or thinking.
          if (isListeningRef.current) {
            try {
              rec.start();
            } catch (e) {
              // ignore
            }
          }
        } else if (err === 'aborted') {
          // Expected when aborted intentionally
        } else {
          // Other network or recognition notice
          if (!isListeningRef.current) {
            setState('error');
            setPermissionError(`Recognition notice: ${err}`);
          }
        }
      };

      rec.start();
    } catch (err: any) {
      isListeningRef.current = false;
      setState('error');
      setPermissionError(err?.message || 'Could not initiate microphone.');
    }
  }, []);

  const stopListening = useCallback(() => {
    isListeningRef.current = false;
    try {
      recRef.current?.stop();
    } catch (e) {
      // ignore
    }
    setState('done');
  }, []);

  const reset = useCallback(() => {
    isListeningRef.current = false;
    try {
      recRef.current?.abort();
    } catch (e) {
      // ignore
    }
    setState('idle');
    setTranscript('');
    setPermissionError('');
  }, []);

  return { state, transcript, supported, permissionError, startListening, stopListening, reset };
}
