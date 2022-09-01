import { useEffect } from 'react';
import { useState } from 'react';

function useGetUserFromAPI() {
  const [fetchedUser, setFetchedUser] = useState({});

  useEffect(() => {
    const getUserFromAPI = async () => {
      const URL = 'https://randomuser.me/api/'
      const response = await fetch(URL)
      const data = await response.json();
      const foundUser = await data.results[0]
      console.log(foundUser);
      setFetchedUser(foundUser)
    }
    getUserFromAPI();
  }, [])
  return fetchedUser;
}
export default useGetUserFromAPI;