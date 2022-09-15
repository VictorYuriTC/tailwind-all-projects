import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/menus/Header';
import ArrowSVG from '../components/svgs/ArrowSVG';
import UserSVG from '../components/svgs/UserSVG'
import GOOGLE_PNG from '../assets/images/google.png'
import FACEBOOK_PNG from '../assets/images/facebook.png'
import { ENTER } from '../constants/strings';

function LoginPage(props) {
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginButtonStyle, setLoginButtonStyle] = useState(
    { 
      boxShadow: '',
      opacity: 1,
      translate: '0',
    })

  const navigate = useNavigate();

  useEffect(() => {
    const usernameLength = usernameInput.length;
    const passwordLength = passwordInput.length;

    const hasUsernameMinChar = usernameLength >= 3 ? true : false
    const hasPasswordMinChar = passwordLength >= 6 ? true : false

    if (hasUsernameMinChar && hasPasswordMinChar) { 
      setIsLoginButtonDisabled(false)
      return;
    }

    setIsLoginButtonDisabled(true)
  }, [usernameInput, passwordInput])

  const onEnterKeyDownNavigateToSearchPage = ({ key }) => {
    if (key !== ENTER) return;

    if (!isLoginButtonDisabled) navigate('/search')
    

    if (isLoginButtonDisabled) {
      alert('Only usernames with 3 or more characters and passwords with 6 or more characters are valid.')
    }
  }

  const handleUsernameInputChange = ({ target: { value }}) => {
    setUsernameInput(value)
  }

  const handlePasswordInputChange = ({ key, target: { value }}) => {
    setPasswordInput(value)
  }
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
          <p className="text-black max-w-sm font-sans font-light mb-7">Login to your account to listen the newest songs in the Trybe industry.
          </p>
        </div>
        <div className="flex flex-col mb-4 md:mb-10 space-y-2">
          <label htmlFor="" className="flex flex-row">
            <input
              value={ usernameInput }
              onChange={ handleUsernameInputChange }
              onKeyDown={ onEnterKeyDownNavigateToSearchPage }
              type="text"
              placeholder="Username"
              className="w-fit p-3 border rounded-lg placeholder:text-black placeholder:font-thin focus:outline-her-green"/>
          </label>
          <label htmlFor="" className="flex flex-row">
            <input
              value={ passwordInput }
              onChange={ handlePasswordInputChange }
              onKeyDown={ onEnterKeyDownNavigateToSearchPage }
              type="password"
              placeholder="Password"
              className="w-fit p-3 border rounded-lg placeholder:text-black placeholder:font-thin focus:outline-her-green"/>
          </label>
        </div>

        <div className="flex flex-col items-center justify-between space-x-0 space-y-6 
          md:flex-row md:space-y-0 md:space-x-12 mb-6 md:mb-12"
        >
          <button className="font-extralight text-black border-b py-2">Forgot password</button>

          <button
            onClick={ () => navigate('/search') }
            disabled={ isLoginButtonDisabled }
            className="text-white w-full md:w-auto flex justify-center items-center space-x-1 font-sans font-semibold rounded-md shadow-lg px-3 py-2 border transition duration-200 bg-his-purple"
            style={ loginButtonStyle }
          >
            <span>
              Login
            </span>
            <ArrowSVG />
          </button>
        </div>

        
        <div>
          <div className="border-b border-gray-300"></div>

          <p className="py-6 text-sm font-extralight text-center text-gray-900">or login with</p>

          <div className="flex flex-col space-x-0 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center py-2 px-5 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-[1px] transition duration-200 md:w-1/2">
              <img
                src={ FACEBOOK_PNG }
                alt="Logo"
                className="w-8" />
              <span className="font-thin">
                Facebook
              </span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center py-2 px-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-[1px] transition duration-200 md:w-1/2">
              <img
                src={ GOOGLE_PNG }
                alt="Logo"
                className="w-8" />
              <span className="font-thin">
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