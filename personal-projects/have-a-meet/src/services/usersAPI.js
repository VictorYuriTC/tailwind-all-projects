export const getAllUsersFromAPI = async () => {
  const URL = 'https://randomuser.me/api/?results=5000';
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data.results;
}