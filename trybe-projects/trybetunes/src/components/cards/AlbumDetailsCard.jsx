import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCollectionDataFromAPI } from '../../services/iTunesAPI';
import Header from '../menus/Header';
import SongCard from './SongCard';

function AlbumDetailsCard({}) {
  const [album, setAlbum] = useState({});
  const { collectionId } = useParams();
  useEffect(() => {
    const getAlbumData = async () => {
      console.log(collectionId)
      const foundAlbum = await getCollectionDataFromAPI(collectionId);
      setAlbum(foundAlbum)
      console.log(foundAlbum);
    }
    getAlbumData();
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

     { album.length > 0
     &&
     <>
        <div className="bg-gradient-to-b from-his-purple to-black flex flex-col items-center">
          <div className="relative pb-[25%] pr-[25%] shrink-0">
            <img src={ album[0].artworkUrl100 } alt={ album.collectionName } className="absolute 
              w-full h-full"/>
          </div>
          <span>{ album.artistName }</span>

        </div>

        <div className="flex flex-col items-center justify-center bg-black text-white">
          { album.map((song, index) => index === 0
            ? <></>
            : <SongCard key={ song.trackId } song={ song } index={ index }/>)
          }
        </div>
     </>}
    </div>
  );
}
export default AlbumDetailsCard;