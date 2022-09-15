import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCollectionDataFromAPI } from '../services/iTunesAPI';
import Header from '../components/menus/Header';
import SongOptionsBar from '../components/menus/SongOptionsBar';
import SongCard from '../components/cards/SongCard'

function AlbumDetailsPage() {
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b bg-black">
      <div className="bg-black">
        <Header />
      </div>
     {
     <>
        <div className="flex-col items-center 
          gap-10 bg-black flex pt-20">
          <div className="relative pb-[15%] pr-[15%] shrink-0">
            { album.length > 0
              && <img src={ album[0].artworkUrl100 } alt={ album.collectionName } className="object-cover absolute 
              w-full h-full shrink-0" key={ album.collectionId }/>
            }
          </div>
          <span key={ `name-${ album.collectionId }` } >
            { album.length > 0
            && album.artistName
            }
          </span>

        </div>

        <div className="bg-black text-white flex flex-col items-center justify-center px-10 mb-20 gap-3">
          { album.length > 0
          && album.map((song, index) => index === 0
            ? <></>
            : <SongCard key={ song.trackId } song={ song } index={ index }/>)
          }
        </div>
     </>
     }

     <div className="bg-black">
      <SongOptionsBar />
     </div>
    </div>
  );
}
export default AlbumDetailsPage;