import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAlbumsFromAPI, getCollectionDataFromAPI } from '../../services/iTunesAPI';

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
      <h1>{ }</h1>
    </div>
  );
}
export default AlbumDetailsCard;