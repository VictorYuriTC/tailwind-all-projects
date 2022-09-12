export const getAlbumsFromAPI = async (artistName) => {
  try {
    const artistNameURL = encodeURI(artistName).replaceAll('%20', '+');
    const URL = `https://itunes.apple.com/search?entity=album&term=${ artistNameURL }&attribute=allArtistTerm`;
    const response = await fetch(URL);
    const data = await response.json();
    const { results } = data;
    return results;
  } catch (error){
    return error;
  }
}

export const getCollectionDataFromAPI = async (collectionId) => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${collectionId}&entity=song`)
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}