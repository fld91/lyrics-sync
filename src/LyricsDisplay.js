import React, { useEffect, useState, useRef } from 'react';

const LyricsDisplay = ({ lyrics, currentTime }) => {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const lyricsRef = useRef(null);

  useEffect(() => {
    const index = lyrics.findIndex((lyric) => lyric.time > currentTime) - 1;
    setCurrentLyricIndex(index >= 0 ? index : 0);
  }, [currentTime, lyrics]);

  useEffect(() => {
    if (lyricsRef.current) {
      const currentLyricElement = lyricsRef.current.children[currentLyricIndex];
      if (currentLyricElement) {
        currentLyricElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [currentLyricIndex]);

  return (
    <div
      ref={lyricsRef}
      style={{
        maxHeight: '300px', // Adjust height as needed
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}
    >
      {lyrics.map((lyric, index) => (
        <p
          key={index}
          style={{
            color: index === currentLyricIndex ? '#333' : '#999',
            fontWeight: index === currentLyricIndex ? 'bold' : 'normal',
            fontSize: index === currentLyricIndex ? '1.5em' : '1em',
            margin: '10px 0'
          }}
        >
          {lyric.text}
        </p>
      ))}
    </div>
  );
};

export default LyricsDisplay;
