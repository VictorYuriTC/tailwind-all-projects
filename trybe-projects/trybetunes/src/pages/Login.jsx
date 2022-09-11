import React from 'react'
import Header from '../components/Header';

function LoginPage(props) {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen bg-[#400090]">

        <section className="flex flex-col justify-center place-self-center items-center gap-2">
          <label
            htmlFor=""
            className="flex gap-2 "
          >
            <span className="text-white text-xl font-[500]">
              Login
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
          <button type="password">

          </button>
        </section>
      </div>
    </>
  );
}
export default LoginPage;