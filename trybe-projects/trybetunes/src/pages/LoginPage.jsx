import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/menus/Header';

function LoginPage(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-his-purple min-h-screen">
      <Header />
      <div className="relative flex flex-col gap-2 justify-center items-center ">

        <section className="flex flex-col justify-center place-self-center items-center gap-6">
         <div className="flex flex-col gap-2">
         <label
            htmlFor=""
            className="flex items-center"
          >
            <span className="text-white text-xl font-[500] w-full">
              E-mail
            </span>
            <input
              type="em-ail"
              className="rounded-lg w-full"
            />
          </label>

          <label
            htmlFor=""
            className="flex items-center"
          >
            <span className="text-white text-xl font-[500] w-full">
              Password
            </span>
            <input
              type="password"
              className="rounded-lg w-full"
            />
          </label>
         </div>
          <button
            type="password"
            className="bg-his-purple text-white font-[500] border-2 p-3 rounded-full
              hover:translate-y-[-2px] hover:opacity-50 transition duration-500"
            onClick={ () => { navigate('/search')} }
          >
            Login
          </button>
        </section>
      </div>
    </div>
  );
}
export default LoginPage;