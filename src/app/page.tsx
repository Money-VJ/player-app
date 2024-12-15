"use client";

import React, { useState, useRef } from "react";
import SongList from "./components/SongList";

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

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
      audioUrl: "/audio/track3.mp3",
    },
  ];

  const togglePlay = (trackUrl) => {
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

export default Page;
