import React, { useContext, useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { getAllUsersFromAPI } from '../services/usersAPI';
import Header from '../components/Header'
import SearchedUsersContext from '../context/SearchedUsersContext';
import LoadingSpinner from '../components/Loading';

function MainPage() {
  const [renderUsers, setRenderUsers] = useState([]);
  const contextValue = useContext(SearchedUsersContext);
  const { users: {
    allRegisteredUsers,
    setAllRegisteredUsers
  }} = contextValue;

  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await getAllUsersFromAPI();
      console.log(fetchedUsers)
      setAllRegisteredUsers(fetchedUsers)
    }
    getUsers();
  }, [])

  useEffect(() => {
    if (allRegisteredUsers.length === 0) return;

    const selectedUsers = allRegisteredUsers.slice(0, 20)
    const renderSelectedUsers = selectedUsers.map((user) => (
      <UserCard user={ user } />
    ))
    setRenderUsers(renderSelectedUsers)
  }, [allRegisteredUsers])

  return (
    <>
      <Header />
      <main>
        <section className="xsm:flex xsm:flex-col items-center justify-center
          sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          { renderUsers.length > 0
            ? renderUsers
            : <LoadingSpinner
            h="h-24"
            w="w-24"
            fillColor="fill-blue-600"
            otherClasses="absolute top-1/3 left-2/5"
          />
          }
        </section>
      </main>
      
    </>
  );
}
export default MainPage;