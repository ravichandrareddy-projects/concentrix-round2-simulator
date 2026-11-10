import { useCallback, useEffect, useRef, useState } from 'react';

type RecognitionState = 'idle' | 'listening' | 'done' | 'error';

export function useSpeechRecognition() {
  const [state, setState] = useState<RecognitionState>('idle');
  const [transcript, setTranscript] = useState('');
  const [supported, setSupported] = useState(false);
  const [permissionError, setPermissionError] = useState('');
  const recRef = useRef<any>(null);

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
    setTranscript('');
    setPermissionError('');
    setState('listening');

    try {
      const rec = new SR();
      recRef.current = rec;
      rec.lang = 'en-US';
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      rec.continuous = false;

      rec.onresult = (e: any) => {
        let final = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) {
            final += e.results[i][0].transcript;
          }
        }
        if (final) {
          setTranscript(final);
        } else if (e.results?.[0]?.[0]?.transcript) {
          // Fallback to interim transcript if final not ready yet
          setTranscript(e.results[0][0].transcript);
        }
      };

      rec.onend = () => setState('done');
      rec.onerror = (e: any) => {
        setState('error');
        const err = e.error || '';
        if (err === 'not-allowed' || err === 'permission-denied') {
          setPermissionError('Microphone permission denied. Please allow microphone access in your browser settings.');
        } else if (err === 'no-speech') {
          setPermissionError('No speech detected. Please speak clearly into your microphone.');
          setState('done');
        } else {
          setPermissionError(`Recognition notice: ${err}`);
        }
      };

      rec.start();
    } catch (err: any) {
      setState('error');
      setPermissionError(err?.message || 'Could not initiate microphone.');
    }
  }, []);

  const stopListening = useCallback(() => {
    try {
      recRef.current?.stop();
    } catch (e) {
      // ignore
    }
    setState('done');
  }, []);

  const reset = useCallback(() => {
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
