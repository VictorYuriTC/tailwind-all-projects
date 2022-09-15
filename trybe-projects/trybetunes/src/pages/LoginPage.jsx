import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/menus/Header';
import UserSVG from '../components/svgs/UserSVG'

function LoginPage(props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#efefef]">
      <div className="absolute top-0 w-full mb-20">
        <Header className=""/>
      </div>

      <div className="relative flex flex-col items-center justify-center
        rounded-2xl py-6 mt-12 bg-white shadow-lg shadow-gray-600">
        <div className="mb-3">
          <span className="text-3xl text-black">
            Login
          </span>
        </div>
        <div>
          <p class="text-black max-w-sm font-sans font-light mb-7">Login to your account to listen the newest songs in the Trybe industry.
          </p>
        </div>
        <div className="flex flex-col mb-4 md:mb-10 space-y-2">
          <label htmlFor="" className="flex flex-row">
            <input type="text" placeholder="Username" className="w-fit p-3 border rounded-lg placeholder:text-black placeholder:font-thin"/>
          </label>
          <label htmlFor="" className="flex flex-row">
            <input type="password" placeholder="Password" className="w-fit p-3 border rounded-lg placeholder:text-black placeholder:font-thin"/>
          </label>
        </div>

        <div class="flex flex-col items-center justify-between space-x-0 space-y-6 
          md:flex-row md:space-y-0 md:space-x-12 mb-6 md:mb-12"
        >
          <button className="font-thin text-black border-b py-2">Forgot password</button>

          <button class="text-white w-full md:w-auto flex justify-center items-center space-x-1 font-sans font-semibold rounded-md shadow-lg px-3 py-2 hover:bg-opacity-90 hover:shadow-lg border transition duration-200 hover:-translate-y-[1px] bg-his-purple"
          >
            <span>
              Next
            </span>
          </button>
        </div>

        
        <div>
          <div class="border-b border-gray-300"></div>

          <p class="py-6 text-sm font-thin text-center text-gray-400">or login with</p>

          <div className="flex flex-col space-x-0 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            <button class="flex items-center justify-center py-2 px-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-[1px] transition duration-200 md:w-1/2">
              <UserSVG className=""/>
              <span class="font-thin">
                Facebook
              </span>
            </button>
            <button class="flex items-center justify-center py-2 px-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-[1px] transition duration-200 md:w-1/2">
              <UserSVG className=""/>
              <span class="font-thin">
                Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;