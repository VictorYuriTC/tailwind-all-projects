import React, { useState } from 'react'
import SongsContext from './SongsContext';

function SongsContextProvider({ children }) {
  const [currentSong, setCurrentSong] = useState('');
  const [recentlySearchedArtists, setRecentlySearchedArtists] = useState([]);
  const [recentlyListenedSongs, setRecentlyListenedSongs] = useState([]);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  const contextValue = {
    playingSong: {
      currentSong,
      setCurrentSong,
    },
    listened: {
      recentlyListenedSongs,
      setRecentlyListenedSongs,
    },
    searched: {
      searchedArtist,
      setSearchedArtist,
      recentlySearchedArtists,
      setRecentlySearchedArtists,
    },
    favorites: {
      favoriteSongs,
      setFavoriteSongs,
    }
  }

  return (
    <SongsContext.Provider value={ contextValue }>
      { children }
    </SongsContext.Provider>
  );
}
export default SongsContextProvider;