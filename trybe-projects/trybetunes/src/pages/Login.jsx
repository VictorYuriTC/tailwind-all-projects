import React from 'react'

function LoginPage(props) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen bg-[#400090]">
      <label
        htmlFor=""
        className="flex gap-2 "
      >
        <span className="text-white text-xl font-medium">
          Login:
        </span>
        <input
          type="text"
          className="rounded-lg"
        />
      </label>

      <label
        htmlFor="" className="flex gap-2 ">
        <span className="text-white text-xl font-medium">
          Password:
        </span>
        <input
          type="password"
          className="rounded-lg"
        />
      </label>
      <button type="password">

      </button>
    </div>
  );
}
export default LoginPage;