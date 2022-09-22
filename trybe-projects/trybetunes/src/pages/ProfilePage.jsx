import React, { useContext } from 'react'
import SongsContext from '../context/SongsContext';
import { Link } from 'react-router-dom';
import UserSVG from '../components/svgs/UserSVG';
import Header from '../components/menus/Header';
import SearchAsideBar from '../components/menus/SearchAsideBar';

function ProfilePage() {
  const contextValue = useContext(SongsContext);
  const { user: { userName, userEmail, userDescription, userImage, }} = contextValue

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div>
        <Header />
      </div>

      <div className="w-full flex flex-col md:flex-row bg-black pt-6 gap-4 md:gap-0 md:pt-12">

        <div className="">
          <SearchAsideBar />
        </div>

        <div className='flex flex-col items-center w-full pt-5'>
          <div className="bg-white flex flex-col w-1/4 items-center justify-center">
            <div className="relative pb-[125%] pr-[100%] w-full">
              <img
                src={ userImage }
                alt={`${ userName } profile image`}
                className="w-full h-full object-cover absolute pt-12 pb-6 pl-6 pr-6"
              />
            </div>

            <div className="flex flex-col items-center justify-center pb-5">
              <h1 className="font-medium">{ userName }</h1>
              <h3 className="font-light">{ userEmail }</h3>
            </div>

            <div className="pb-5">
              <p className="font-light">{ userDescription }</p>
            </div>

            <div>
              <Link
                to="/profile/edit"
                className="flex font-medium pb-5 hover:opacity-50 transition duration-500"
                >
                <UserSVG className="stroke-1"/>
                <span>
                  Edit profile
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default ProfilePage;