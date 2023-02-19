import React, { useState, createContext } from 'react';

export const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  // const [audioUrl, setAudioUrl] = useState('https://p.scdn.co/mp3-preview/3fed7b4b84345ee247215fcdc52eeb32c3977f29?cid=423cd656ff7d45fc98996a8e82da9d37');
const [audioUrl, setAudioUrl] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3');


  return (
    <AudioPlayerContext.Provider value={{ audioUrl, setAudioUrl }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
