import React, { useContext } from 'react'
import SongsContext from '../context/SongsContext';
import { Link, useNavigate } from 'react-router-dom';
import UserSVG from '../components/svgs/UserSVG';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';
import PurpleMainButton from '../components/buttons/PurpleMainButton';

function ProfilePage() {
  const contextValue = useContext(SongsContext);
  const { user: { userName, userEmail, userDescription, userImage, }} = contextValue
  
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className=''>
        <Header />
      </div>

      <div className="flex flex-col md:justify-center md:flex-row bg-black gap-4 md:gap-0 pt-6 md:pt-12">

        <div className="">
          <SearchAsideBar />
        </div>

        <div className="flex justify-center w-full pt-12
          md:-translate-x-4 md:pt-0 md:translate-y-10
          lg:-translate-x-15
          lg:translate-y-20 xl:translate-y-20">
          <div div className="bg-white flex flex-col
            items-center justify-center rounded-lg p-6">
            <div className="relative pb-60 pr-60 w-full shrink-0">
              <img
                src={ userImage }
                alt={`${ userName } profile thumbnail`}
                className="w-full h-full object-cover absolute p-8 rounded-full shrink-0"
              />
            </div>

            <div className="flex flex-col items-center justify-center pb-6">
              <h1 className="font-medium">{ userName }</h1>
              <h3 className="font-light">{ userEmail }</h3>
            </div>

            <div className="pb-6">
              <p className="font-light">{ userDescription }</p>
            </div>

            <div>
              <PurpleMainButton
                onClick={ () => navigate('/profile/edit') }
                spanText={"Edit profile"}
              />
            </div>
          </div>
        </div>

  

      </div>
    </div>
  );
}
export default ProfilePage;