import React, { useState, useEffect } from 'react';
import LyricsDisplay from './LyricsDisplay';




const sampleLyrics = [
  { time: 0, text: "O khuda jaane ke main fida hoon" },
  { time: 6, text: "O khuda jaane ke main mit gaya" },
  { time: 12, text: "O khuda jaane yeh kyun hua hai" },
  { time: 18, text: "Ke ban gaye ho tum mere khuda" },
  { time: 24, text: "O khuda jaane ke main fida hoon" },
  { time: 30, text: "O khuda jaane ke main mit gaya" },
  { time: 36, text: "O khuda jaane yeh kyun hua hai" },
  { time: 42, text: "Ke ban gaye ho tum mere khuda" },
  { time: 48, text: "Ho khuda jaane ke main fida hoon" },
  { time: 54, text: "Ho khuda jaane ke main mit gaya" },
  { time: 60, text: "Khuda jaane yeh kyun hua hai" },
  { time: 66, text: "Ke ban gaye ho tum mere khuda" },
  { time: 72, text: "Ho khuda jaane ke main fida hoon" },
  { time: 78, text: "Ho khuda jaane ke main mit gaya" },
  { time: 84, text: "Khuda jaane yeh kyun hua hai" },
  { time: 90, text: "Ke ban gaye ho tum mere khuda" },
  { time: 96, text: "Khuda jaane ke main fida hoon" },
  { time: 102, text: "Khuda jaane ke main mit gaya" },
  { time: 108, text: "Khuda jaane yeh kyun hua hai" },
  { time: 114, text: "Ke ban gaye ho tum mere khuda" },
  { time: 120, text: "Ho khuda jaane ke main fida hoon" },
  { time: 126, text: "Ho khuda jaane ke main mit gaya" },
  { time: 132, text: "Khuda jaane yeh kyun hua hai" },
  { time: 138, text: "Ke ban gaye ho tum mere khuda" },
  { time: 144, text: "O khuda jaane ke main fida hoon" },
  { time: 150, text: "O khuda jaane ke main mit gaya" },
  { time: 156, text: "O khuda jaane yeh kyun hua hai" },
  { time: 162, text: "Ke ban gaye ho tum mere khuda" }
];

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lyrics Sync App</h1>
      <LyricsDisplay lyrics={sampleLyrics} currentTime={currentTime} />
    </div>
  );
};

export default App;
