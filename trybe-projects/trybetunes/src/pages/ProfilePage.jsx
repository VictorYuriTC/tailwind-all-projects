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

      <div className="w-full flex flex-col md:flex-row bg-black pt-6 gap-4 md:gap-0
        md:mt-12">

        <div className="">
          <SearchAsideBar />
        </div>

        <div className='flex flex-col items-center w-full'>
          <div className="bg-white flex flex-col w-60 items-center justify-center rounded-lg p-6">
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