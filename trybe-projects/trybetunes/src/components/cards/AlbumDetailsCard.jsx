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

  const {
    artistName,
    artworkUrl100,
    collectionCensonredName,
    collectionName,
    collectionPrice,
    collectionType,
    contentAdvisoryRating,
    copyright,
    country,
    currency,
    primaryGenreName,
    releaseDate,
    trackCount
  } = album;

  return (
    <div className="">
      <Header />
      <div className="bg-his-purple text-white">
        { album.length > 0 && album.map((song, index) => index === 0
          ? <></>
          : <SongCard key={ song.trackId } song={ song } index={ index }/>)
        }
      </div>
    </div>
  );
}
export default AlbumDetailsCard;