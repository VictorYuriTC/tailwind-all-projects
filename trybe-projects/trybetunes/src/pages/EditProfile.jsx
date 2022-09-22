import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PurpleMainButton from '../components/buttons/PurpleMainButton';
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
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(true);
  const [editButtonOpacity, setEditButtonOpacity] = useState('0.5')

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

  useEffect(() => {
    const isUsernameInputFilled = usernameInput.length > 0
    const isUserEmailInputFilled = userEmailInput.length > 0
    const isUserDescriptionInputFilled = userDescriptionInput.length > 0
    const isUserImageInputFilled = userImageInput.length > 0

    const enableEditButton = () => {
      setIsEditButtonDisabled(true)

      if (!isUsernameInputFilled) return
      if (!isUserEmailInputFilled) return
      if (!isUserDescriptionInputFilled) return
      if (!isUserImageInputFilled) return

      setIsEditButtonDisabled(false)
    }

    enableEditButton()
  }, [usernameInput, userEmailInput, userDescriptionInput, userImageInput])

  useEffect(() => {
    const changeEditButtonOpacity = () => {
      if (isEditButtonDisabled) setEditButtonOpacity('0.5')
      if (!isEditButtonDisabled) setEditButtonOpacity('1')
    }

    changeEditButtonOpacity()
  }, [isEditButtonDisabled])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div>
        <Header />
      </div>

      <div className="w-full flex flex-col md:flex-row bg-black gap-4 pt-6 md:pt-12 md:gap-0">
        <div className="">
          <SearchAsideBar />
        </div>


        <div className="flex items-center justify-center w-full">
          <div className="relative flex flex-col justify-center items-center
            space-y-4 bg-white p-12 rounded-lg
            translate-y-[2rem]
            md:translate-y-[5rem]"
          >      
            <h1 className="">
              Edit your profile
            </h1>
            <label htmlFor="" className="">
              <input
                value={ usernameInput }
                onChange={ ({ target: { value }}) => setUsernameInput(value) }
                type="text"
                className="border border-gray-300 rounded p-3"
                placeholder="New username"
              />
            </label>
            <label htmlFor="" className="">
              <input
                value={ userEmailInput }
                onChange={ ({ target: { value }}) => setUserEmailInput(value) }
                type="text"
                className="border border-gray-300 rounded p-3"
                placeholder="New email"
              />
            </label>
            <label htmlFor="" className="">
              <input
                value={ userDescriptionInput }
                onChange={ ({ target: { value }}) => setUserDescriptionInput(value)} 
                type="text"
                className="border border-gray-300 rounded p-3"
                placeholder="New profile description"
              />
            </label>
            <label htmlFor="" className="">
              <input
                value={ userImageInput }
                onChange={ ({ target: { value }}) => setUserImageInput(value) }
                type="text"
                className="border border-gray-300 rounded p-3"
                placeholder="New profile image url"
              />
            </label>
            <PurpleMainButton
              onClick={ handleEditButtonClick }
              style={{ opacity: editButtonOpacity }}
              spanText={"Save changes"}
              disabled={ isEditButtonDisabled }
            />
          </div>
        </div>


      </div>
      
    </div>
  );
}
export default EditProfile;