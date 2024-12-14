// /src/components/SongList.tsx

import React from 'react';

type Track = {
  title: string;
  artist: string;
  avatarUrl: string;
  audioUrl: string;
};

type SongListProps = {
  tracks: Track[];
  togglePlay: (trackUrl: string) => void;
  isPlaying: boolean;
  currentTrack: string | null;
};

const SongList: React.FC<SongListProps> = ({
  tracks,
  togglePlay,
  isPlaying,
  currentTrack,
}) => {
  return (
    <div className="py-4 px-6">
      <ul className="space-y-4">
        {tracks.map((track) => (
          <li
            key={track.audioUrl}
            className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={track.avatarUrl}
                alt={track.title}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl">{track.title}</h3>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
            <button
              onClick={() => togglePlay(track.audioUrl)}
              className={`p-2 rounded-full ${
                currentTrack === track.audioUrl && isPlaying
                  ? 'bg-green-500'
                  : 'bg-gray-600'
              }`}
            >
              {currentTrack === track.audioUrl && isPlaying ? 'Pause' : 'Play'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
