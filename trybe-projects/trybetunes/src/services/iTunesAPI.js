export const getAlbumsFromAPI = async (artistName) => {
  const artistNameURL = encodeURI(artistName).replaceAll('%20', '+');
  const URL = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;
  const response = await fetch(URL);
  const data = await response.json();
  const { results } = data;
  return results;
}