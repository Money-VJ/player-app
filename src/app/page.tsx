"use client";

import React, { useState, useRef } from "react";
import Player from "./components/Player";
import SongList from "./components/SongList";

const Page: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    {
      title: "Track 1",
      artist: "Artist 1",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track1.mp3",
    },
    {
      title: "Track 2",
      artist: "Artist 2",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 3",
      artist: "Artist 3",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 4",
      artist: "Artist 4",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 5",
      artist: "Artist 5",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 6",
      artist: "Artist 6",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 7",
      artist: "Artist 7",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 8",
      artist: "Artist 8",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
    {
      title: "Track 9",
      artist: "Artist 9",
      avatarUrl: "https://via.placeholder.com/48",
      audioUrl: "/audio/track2.mp3",
    },
  ];

  const togglePlay = (trackUrl: string) => {
    if (!audioRef.current) return;

    if (currentTrack !== trackUrl) {
      audioRef.current.src = trackUrl;
      setCurrentTrack(trackUrl);
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <audio ref={audioRef} />
      <SongList
        tracks={tracks}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        currentTrack={currentTrack}
      />
    </div>
  );
};
