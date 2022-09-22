import React, { useState } from 'react'
import { INITIAL_USER_IMAGE } from '../constants/strings';
import SongsContext from './SongsContext';

function SongsContextProvider({ children }) {
  const [recentlySearchedArtists, setRecentlySearchedArtists] = useState([]);
  const [recentlyListenedSongs, setRecentlyListenedSongs] = useState([]);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState({});
  const [userName, setUserName] = useState('Username');
  const [userEmail, setUserEmail] = useState('User email')
  const [userDescription, setUserDescription] = useState('User description')
  const [userImage, setUserImage] = useState(INITIAL_USER_IMAGE)

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
    },
    user: {
      userName,
      setUserName,
      userEmail,
      setUserEmail,
      userDescription,
      setUserDescription,
      userImage,
      setUserImage,
    }
  }

  return (
    <SongsContext.Provider value={ contextValue }>
      { children }
    </SongsContext.Provider>
  );
}
export default SongsContextProvider;