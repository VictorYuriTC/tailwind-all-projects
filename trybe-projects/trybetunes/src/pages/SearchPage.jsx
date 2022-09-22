import React, { useContext, useEffect, useState } from 'react'
import AlbumCard from '../components/cards/AlbumCard';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import SongsContext from '../context/SongsContext';
import { getAlbumsFromAPI } from '../services/iTunesAPI';

function SearchPage(props) {
  const contextValue = useContext(SongsContext);
  const { searched: { searchedArtist }} = contextValue;
  const [renderAlbums, setRenderAlbums] = useState([]);
  
  useEffect(() => {
    const getAlbums = async () => {
      if (searchedArtist.length < 1 || searchedArtist === '') {
        const possibleFirstArtists = ['frank', 'sam', 'steve', 'john', 'maria', 'carlos', 'pedro', 'gabriela', 'paolo', 'taylor', 'taylor', 'young', 'old', 'new', 'five']
        const randomPossibleArtistIndex = Math.floor(Math.random() * possibleFirstArtists.length) === 2 ? 1 : Math.floor(Math.random() * possibleFirstArtists.length);
        const selectedFirstAlbum = possibleFirstArtists[randomPossibleArtistIndex]
        console.log(selectedFirstAlbum)
        const foundFirstAlbum = await getAlbumsFromAPI(selectedFirstAlbum)
        setRenderAlbums(foundFirstAlbum)
        return
      }

      const foundAlbums = await getAlbumsFromAPI(searchedArtist);
      const maxFoundAlbums = foundAlbums
        .splice(0, 20);
      setRenderAlbums(maxFoundAlbums);
    }
    getAlbums();
  }, [searchedArtist])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div>
        <Header />
      </div>

      <div className="w-fit flex flex-col md:flex-row bg-black pt-6 gap-4 md:gap-0 md:pt-12">
        <div className="">
          <SearchAsideBar />
        </div>
      
        <div className="bg-black grid grid-cols-1 px-5 w-full">
          {
            renderAlbums.length > 0
            &&  renderAlbums.map(album => <AlbumCard key={ album.collectionId } album={ album }/>) 
          }
        </div>
      </div>
    </div>
  );
}
export default SearchPage;