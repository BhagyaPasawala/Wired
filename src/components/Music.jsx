import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import musicc from '../assets/musicc.mp3'; // Ensure this path is correct

const MusicPlayer = () => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      
      if (!wavesurferRef.current) {
        const wavesurfer = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: '#D9D9D9',
          progressColor: '#ff6200',
          height: 100,
          barWidth: 2,
          barRadius: 3,
          cursorColor: '#D9D9D9',
          cursorWidth: 1,
          normalize: true,
        });

        wavesurferRef.current = wavesurfer;

        wavesurfer.load(musicc);

        wavesurfer.on('finish', () => setIsPlaying(false));

        return () => {
          if (wavesurferRef.current) {
            wavesurferRef.current.destroy();
            wavesurferRef.current = null;
          }
        };
      }
    }
  }, []);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      setIsPlaying(prev => {
        if (prev) {
          wavesurferRef.current.pause();
        } else {
          wavesurferRef.current.play();
        }
        return !prev;
      });
    }
  };

  return (
    <div className="music-player">
      <div id="waveform" ref={waveformRef}>
       
      </div>
      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
