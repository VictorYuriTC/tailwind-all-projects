import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/menus/Header';

function LoginPage(props) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen bg-[#400090]">

        <section className="flex flex-col justify-center place-self-center items-center gap-6">
         <div className="flex flex-col gap-2">
         <label
            htmlFor=""
            className="flex gap-2 "
          >
            <span className="text-white text-xl font-[500]">
              E-mail
            </span>
            <input
              type="text"
              className="rounded-lg"
            />
          </label>

          <label
            htmlFor="" className="flex gap-2">
            <span className="text-white text-xl font-[500]">
              Password
            </span>
            <input
              type="password"
              className="rounded-lg"
            />
          </label>
         </div>
          <button
            type="password"
            className="text-white font-[500] border-2 p-3 rounded-full
              hover:scale-105 transition duration-500"
            onClick={ () => { navigate('/search')} }
          >
            Login
          </button>
        </section>
      </div>
    </>
  );
}
export default LoginPage;