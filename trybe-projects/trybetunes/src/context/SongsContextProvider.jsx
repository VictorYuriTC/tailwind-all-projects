import React, { useState } from 'react'
import SongsContext from './SongsContext';

function SongsContextProvider({ children }) {
  const [currentSong, setCurrentSong] = useState('');
  const contextValue = {
    playingSong: {
      currentSong,
      setCurrentSong,
    }
  }

  return (
    <SongsContext.Provider value={ contextValue }>
      { children }
    </SongsContext.Provider>
  );
}
export default SongsContextProvider;