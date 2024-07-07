import React, { useRef } from 'react';

const MusicPlayer = ({ file }) => {
  const audioRef = useRef(null);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={URL.createObjectURL(file)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;