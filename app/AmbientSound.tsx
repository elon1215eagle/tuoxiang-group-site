"use client";

import { useEffect, useRef, useState } from "react";

type BrowserAudioContext = typeof AudioContext;

declare global {
  interface Window {
    webkitAudioContext?: BrowserAudioContext;
  }
}

export function AmbientSound() {
  const contextRef = useRef<AudioContext | null>(null);
  const sourceNodesRef = useRef<AudioScheduledSourceNode[]>([]);
  const gainNodesRef = useRef<AudioNode[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopSound = async () => {
    sourceNodesRef.current.forEach((node) => {
      try {
        node.stop();
      } catch {
        // The source may already be stopped.
      }
      node.disconnect();
    });

    gainNodesRef.current.forEach((node) => node.disconnect());
    sourceNodesRef.current = [];
    gainNodesRef.current = [];

    if (contextRef.current) {
      await contextRef.current.close();
      contextRef.current = null;
    }

    setIsPlaying(false);
  };

  const startSound = async () => {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;

    await stopSound();

    const ctx = new AudioCtor();
    await ctx.resume();

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.12, ctx.currentTime);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.Q.setValueAtTime(0.55, ctx.currentTime);

    master.connect(filter);
    filter.connect(ctx.destination);

    const bass = ctx.createOscillator();
    bass.type = "sine";
    bass.frequency.setValueAtTime(65.41, ctx.currentTime);
    const bassGain = ctx.createGain();
    bassGain.gain.setValueAtTime(0.55, ctx.currentTime);
    bass.connect(bassGain);
    bassGain.connect(master);

    const pad = ctx.createOscillator();
    pad.type = "triangle";
    pad.frequency.setValueAtTime(130.81, ctx.currentTime);
    const padGain = ctx.createGain();
    padGain.gain.setValueAtTime(0.22, ctx.currentTime);
    pad.connect(padGain);
    padGain.connect(master);

    const shimmer = ctx.createOscillator();
    shimmer.type = "sine";
    shimmer.frequency.setValueAtTime(523.25, ctx.currentTime);
    const shimmerGain = ctx.createGain();
    shimmerGain.gain.setValueAtTime(0.055, ctx.currentTime);
    shimmer.connect(shimmerGain);
    shimmerGain.connect(master);

    const pulse = ctx.createOscillator();
    pulse.type = "square";
    pulse.frequency.setValueAtTime(196, ctx.currentTime);
    const pulseGain = ctx.createGain();
    pulseGain.gain.setValueAtTime(0.035, ctx.currentTime);
    pulse.connect(pulseGain);
    pulseGain.connect(master);

    [bass, pad, shimmer, pulse].forEach((node) => node.start());

    contextRef.current = ctx;
    sourceNodesRef.current = [bass, pad, shimmer, pulse];
    gainNodesRef.current = [bassGain, padGain, shimmerGain, pulseGain, master, filter];
    setIsPlaying(true);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
      return;
    }

    startSound();
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  return (
    <button className="sound-toggle" type="button" onClick={toggleSound} aria-pressed={isPlaying}>
      <span className={isPlaying ? "sound-dot active" : "sound-dot"} />
      {isPlaying ? "科技聲景播放中" : "啟動科技聲景"}
    </button>
  );
}
