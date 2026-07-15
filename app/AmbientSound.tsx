"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<Array<AudioNode>>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const stop = () => {
    nodesRef.current.forEach((node) => {
      if ("stop" in node && typeof node.stop === "function") {
        try {
          node.stop();
        } catch {
          // Node may already be stopped.
        }
      }
      node.disconnect();
    });
    nodesRef.current = [];
    audioContextRef.current?.close();
    audioContextRef.current = null;
    setIsPlaying(false);
  };

  const start = async () => {
    if (isPlaying) {
      stop();
      return;
    }

    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;

    const ctx = new AudioCtor();
    const master = ctx.createGain();
    master.gain.value = 0.045;
    master.connect(ctx.destination);

    const pad = ctx.createOscillator();
    const padGain = ctx.createGain();
    pad.type = "sine";
    pad.frequency.value = 82.41;
    padGain.gain.value = 0.38;
    pad.connect(padGain);
    padGain.connect(master);

    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmer.type = "triangle";
    shimmer.frequency.value = 329.63;
    shimmerGain.gain.value = 0.045;
    shimmer.connect(shimmerGain);
    shimmerGain.connect(master);

    const pulse = ctx.createOscillator();
    const pulseGain = ctx.createGain();
    pulse.type = "sine";
    pulse.frequency.value = 0.08;
    pulse.connect(pulseGain.gain);
    pulseGain.gain.value = 0.025;
    pulseGain.connect(master);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 720;
    master.disconnect();
    master.connect(filter);
    filter.connect(ctx.destination);

    pad.start();
    shimmer.start();
    pulse.start();

    audioContextRef.current = ctx;
    nodesRef.current = [pad, shimmer, pulse, padGain, shimmerGain, pulseGain, master, filter];
    await ctx.resume();
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      start().catch(() => {
        setIsPlaying(false);
      });
    }, 300);

    return () => {
      window.clearTimeout(timer);
      stop();
    };
    // Browser autoplay rules may block this first attempt; the button remains as fallback.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button className="sound-toggle" type="button" onClick={start} aria-pressed={isPlaying}>
      <span className={isPlaying ? "sound-dot active" : "sound-dot"} />
      {isPlaying ? "科技聲景播放中" : "啟動科技聲景"}
    </button>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
