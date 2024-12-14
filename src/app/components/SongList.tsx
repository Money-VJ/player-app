import React from "react";

interface Track {
  title: string;
  artist: string;
  avatarUrl: string;
  audioUrl: string;
}

interface SongListProps {
  tracks: Track[];
  togglePlay: (trackUrl: string) => void;
  isPlaying: boolean;
  currentTrack: string | null;
}

const SongList: React.FC<SongListProps> = ({
  tracks,
  togglePlay,
  isPlaying,
  currentTrack,
}) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {tracks.map((track, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
        >
          {/* Круглая иконка с изображением */}
          <div className="flex items-center space-x-4">
            <img
              src={track.avatarUrl}
              alt={track.artist}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{track.title}</h3>
              <p className="text-sm text-gray-400">{track.artist}</p>
            </div>
          </div>

          {/* Кнопка для воспроизведения */}
          <button
            onClick={() => togglePlay(track.audioUrl)}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            {currentTrack === track.audioUrl && isPlaying ? (
              <span>Pause</span>
            ) : (
              <span>Play</span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;
