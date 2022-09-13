import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCollectionDataFromAPI } from '../../services/iTunesAPI';
import Header from '../menus/Header';
import SongOptionsBar from '../menus/SongOptionsBar';
import SongCard from './SongCard';

function AlbumDetailsCard() {
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
    <div className="min-h-screen bg-gradient-to-b bg-black">
      <Header />

     {
     <>
        <div className="flex-col items-center 
          gap-10 bg-black flex">
          <div className="relative pb-[20%] pr-[20%] shrink-0">
            { album.length > 0
              && <img src={ album[0].artworkUrl100 } alt={ album.collectionName } className="object-cover absolute 
              w-full h-full" key={ album.collectionId }/>
            }
          </div>
          <span key={ `name-${ album.collectionId }` } >
            { album.length > 0
            && album.artistName
            }
          </span>

        </div>

        <div className="bg-black text-white flex flex-col items-center justify-center px-10 mb-20">
          { album.length > 0
          && album.map((song, index) => index === 0
            ? <></>
            : <SongCard key={ song.trackId } song={ song } index={ index }/>)
          }
        </div>
     </>
     }

     <SongOptionsBar />
    </div>
  );
}
export default AlbumDetailsCard;