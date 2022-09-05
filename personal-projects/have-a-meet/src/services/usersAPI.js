export const getAllUsersFromAPI = async () => {
  const URL = 'https://randomuser.me/api/?results=100';
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data.results;
}