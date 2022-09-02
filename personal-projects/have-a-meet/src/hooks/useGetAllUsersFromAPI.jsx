import { useEffect, useState } from "react";


function useGetAllUsersFromAPI(props) {
  const [fetchedUsers, setFetchedUsers] = useState([]);

  useEffect(() => {
    const getAllUsersFromAPI = async () => {
      const URL = 'https://randomuser.me/api/?results=5000';
      const response = await fetch(URL);
      const data = await response.json();
      setFetchedUsers(data);
    }
    getAllUsersFromAPI();
  }, [])
  return fetchedUsers
}
export default useGetAllUsersFromAPI;