"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.42;
    audio.loop = true;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/tuoxiang-bgm.mp3" preload="auto" />
      <button className="sound-toggle" type="button" onClick={toggleSound} aria-pressed={isPlaying}>
        <span className={isPlaying ? "sound-dot active" : "sound-dot"} />
        {isPlaying ? "拓饗音樂播放中" : "啟動拓饗音樂"}
      </button>
    </>
  );
}
