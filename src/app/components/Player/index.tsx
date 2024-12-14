// src/app/components/Player/index.tsx
"use client";

import React from "react";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

interface PlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTrack: string | null;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Player: React.FC<PlayerProps> = ({
  isPlaying,
  togglePlay,
  currentTrack,
  audioRef,
}) => {
  const currentTime = audioRef.current?.currentTime || 0;
  const duration = audioRef.current?.duration || 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between rounded-t-lg">
      <div className="flex items-center space-x-4">
        {/* Имя исполнителя */}
        <div className="text-white">
          {currentTrack ? "Сейчас играет" : "Ничего не играет"}
        </div>
      </div>

      {/* Прогресс */}
      <div className="flex-1 mx-4">
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{
              width: `${(currentTime / duration) * 100 || 0}%`,
            }}
          />
        </div>
        <div className="text-white text-sm flex justify-between mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Управление */}
      <div className="flex items-center space-x-4">
        <button onClick={() => togglePlay()}>
          {isPlaying ? (
            <FaPause className="text-white text-2xl" />
          ) : (
            <FaPlay className="text-white text-2xl" />
          )}
        </button>
        <FaHeart className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Player;
