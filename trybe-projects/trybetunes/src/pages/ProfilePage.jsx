import React, { useContext } from 'react'
import SongsContext from '../context/SongsContext';
import { Link } from 'react-router-dom';
import UserSVG from '../components/svgs/UserSVG';

function ProfilePage() {
  const contextValue = useContext(SongsContext);
  const { user: { userName, userEmail, userDescription, userImage, }} = contextValue

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-500">
      <div className='bg-white flex flex-col items-center justify-center border border-black
        w-full sm:w-1/3 md:w-1/5'>
        <div className="relative pb-[150%] pr-[100%]">
          <img
            src={ userImage }
            alt={`${ userName } profile image`}
            className="w-full h-full object-cover absolute pt-12 pl-12 pr-12 pb-6"
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
  );
}
export default ProfilePage;