import React, { useState } from 'react'
import SongsContext from './SongsContext';

function SongsContextProvider({ children }) {
  const [currentSong, setCurrentSong] = useState('');
  const [recentlySearchedSongs, setRecentlySearchedSongs] = useState([]);
  const [recentlyListenedSongs, setRecentlyListenedSongs] = useState([]);

  const contextValue = {
    playingSong: {
      currentSong,
      setCurrentSong,
    },
    listened: {
      recentlyListenedSongs,
      setRecentlyListenedSongs
    },
    searched: {
      recentlySearchedSongs,
      setRecentlySearchedSongs
    }
  }

  return (
    <SongsContext.Provider value={ contextValue }>
      { children }
    </SongsContext.Provider>
  );
}
export default SongsContextProvider;