import { useEffect, useRef, useState } from 'react';
import { sound } from '../utils/audio';

export function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const updateVoices = () => {
      const list = window.speechSynthesis.getVoices();
      if (list.length > 0) {
        setVoices(list);
        // Find best English voice
        const preferred = [
          'Google US English',
          'Microsoft Jenny Online (Natural) - English (United States)',
          'Microsoft Zira',
          'Samantha',
          'Alex',
          'en-US',
          'en-GB'
        ];
        let found: SpeechSynthesisVoice | null = null;
        for (const pref of preferred) {
          found = list.find(v => v.name.includes(pref) || v.lang === pref) || null;
          if (found) break;
        }
        if (!found) {
          found = list.find(v => v.lang.startsWith('en')) || list[0] || null;
        }
        setSelectedVoice(prev => prev || found);
      }
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  function speak(text: string, rate = 1.0, onEnd?: () => void, playAlertChime = true) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onEnd?.();
      return;
    }

    window.speechSynthesis.cancel();

    if (playAlertChime) {
      sound.playChime();
    }

    // Small delay after chime before speech begins
    setTimeout(() => {
      const utter = new SpeechSynthesisUtterance(text);
      if (selectedVoice) {
        utter.voice = selectedVoice;
      }
      utter.rate = rate;
      utter.pitch = 1.0;
      utter.volume = 1.0;
      utter.lang = selectedVoice?.lang || 'en-US';

      setSpeaking(true);
      utter.onend = () => {
        setSpeaking(false);
        onEnd?.();
      };
      utter.onerror = () => {
        setSpeaking(false);
        onEnd?.();
      };

      utterRef.current = utter;
      window.speechSynthesis.speak(utter);
    }, playAlertChime ? 250 : 50);
  }

  function stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }

  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  return {
    speak,
    stop,
    speaking,
    supported,
    voices: voices.filter(v => v.lang.startsWith('en')),
    selectedVoice,
    setSelectedVoice
  };
}
