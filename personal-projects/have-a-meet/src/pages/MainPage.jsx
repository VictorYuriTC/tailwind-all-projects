import React, { useContext, useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { getAllUsersFromAPI } from '../services/usersAPI';
import Header from '../components/Header'
import SearchedUsersContext from '../context/SearchedUsersContext';

function MainPage(props) {
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

  const selectedUsers = allRegisteredUsers.slice(0, 20)
  const renderUsers = selectedUsers.map((user) => (
    <UserCard user={ user } />
  ))


  return (
    <>
      <Header />
      <main>
        { renderUsers }
      </main>
    </>
  );
}
export default MainPage;