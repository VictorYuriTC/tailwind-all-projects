import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import SongsContext from '../context/SongsContext';

function EditProfile(props) {
  const contextValue = useContext(SongsContext);
  const { user: {
      setUserName,
      setUserEmail,
      setUserDescription,
      setUserImage,
  }} = contextValue;

  const navigate = useNavigate();

  const [usernameInput, setUsernameInput] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userDescriptionInput, setUserDescriptionInput] = useState('');
  const [userImageInput, setUserImageInput] = useState('');

  const changeContextUserInfo = () => {
    setUserName(usernameInput)
    setUserEmail(userEmailInput)
    setUserDescription(userDescriptionInput)
    setUserImage(userImageInput)
  }

  const handleEditButtonClick = () => {
    changeContextUserInfo()
    navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div>
        <Header />
      </div>

      <div className="w-fit flex flex-col md:flex-row bg-black pt-6 gap-4 md:gap-0 md:pt-12">
        <div className="">
          <SearchAsideBar />
        </div>
      
        <div className="bg-black grid grid-cols-1 px-5 w-full">
          <label htmlFor="">
            <span className="text-white">
              New username: 
            </span>
            <input
              value={ usernameInput }
              onChange={ ({ target: { value }}) => setUsernameInput(value) }
              type="text"
            />
          </label>
          <label htmlFor="">
            <span className="text-white">
              New email:
            </span>
            <input
              value={ userEmailInput }
              onChange={ ({ target: { value }}) => setUserEmailInput(value) }
              type="text"
            />
          </label>
          <label htmlFor="">
            <span className="text-white">
              New description:
            </span>
            <input
              value={ userDescriptionInput }
              onChange={ ({ target: { value }}) => setUserDescriptionInput(value)} 
              type="text"
            />
          </label>
          <label htmlFor="">
            <span className="text-white">
              New profile image:
            </span>
            <input
              value={ userImageInput }
              onChange={ ({ target: { value }}) => setUserImageInput(value) }
              type="text"
            />
          </label>
          <button
            onClick={ handleEditButtonClick }
          >
            <span className="text-white">
              Save 
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;