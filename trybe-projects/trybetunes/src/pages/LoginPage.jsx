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

  
  const [usernameAmountOfCharNeeded, setUsernameAmountOfCharNeeded] = useState(3);
  const [passwordAmoutOfChardNeeded, setPasswordAmoutOfChardNeeded] = useState(6);
  const [loginButtonStyle, setLoginButtonStyle] = useState(
    { 
      boxShadow: '',
      opacity: 1,
      translate: '0',
    })
    
    const MIN_USERNAME_CHARACTERS = 3;
    const MIN_PASSWORD_CHARACTERS = 6;
    const USERNAME_LENGTH = usernameInput.length;
    const PASSWORD_LENGTH = passwordInput.length;

    const navigate = useNavigate();
    
  useEffect(() => {
    setUsernameAmountOfCharNeeded(MIN_USERNAME_CHARACTERS - USERNAME_LENGTH)
    setPasswordAmoutOfChardNeeded(MIN_PASSWORD_CHARACTERS - PASSWORD_LENGTH)
  }, [usernameInput, passwordInput])

  useEffect(() => {
    const enableLoginButton = () => {

      const hasUsernameMinChar = USERNAME_LENGTH >= MIN_USERNAME_CHARACTERS ? true : false
      const hasPasswordMinChar = PASSWORD_LENGTH >= MIN_PASSWORD_CHARACTERS ? true : false

      if (hasUsernameMinChar && hasPasswordMinChar) { 
        setIsLoginButtonDisabled(false)
        return;
      }

      setIsLoginButtonDisabled(true)
    }

    enableLoginButton()
  }, [usernameInput, passwordInput])

  const onEnterKeyDownNavigateToSearchPage = ({ key }) => {
    if (key !== ENTER) return;

    if (isLoginButtonDisabled) {
      alert('Only usernames with 3 or more characters and passwords with 6 or more characters are valid.')
    }

    if (!isLoginButtonDisabled) navigate('/search') 
  }

  const handleUsernameInputChange = ({ target: { value }}) => setUsernameInput(value)

  const handlePasswordInputChange = ({ target: { value }}) => setPasswordInput(value)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-white">
      <div className="absolute top-0 w-full mb-12">
        <Header className=""/>
      </div>

      <div className="relative flex flex-col items-center justify-center
        rounded-2xl py-4 mt-20 bg-white shadow-lg shadow-gray-600">
        <div className="mb-3">
          <span className="text-3xl text-black font-medium">
            Login
          </span>
        </div>
        <div>
          <p className="text-black max-w-sm font-sans font-light mb-7">Login to your account to listen the newest songs in the Trybe industry.
          </p>
        </div>
        <div className="flex flex-col mb-3 md:mb-5 space-y-2">
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
              type="text"
              style={{ WebkitTextSecurity: 'disc' }}
              placeholder="Password"
              className="w-fit p-3 border rounded-lg placeholder:text-black placeholder:font-thin focus:outline-her-green"/>
          </label>
        </div>

        <div className="flex flex-col mb-2 md:mb-5">
          { usernameAmountOfCharNeeded > 0 &&
            <span className="text-xs md:text-sm">
              Username requires at least { usernameAmountOfCharNeeded } more random { usernameAmountOfCharNeeded === 1 ? 'character' : 'characters' }
            </span>
          }
          {
            passwordAmoutOfChardNeeded > 0 &&
            <span className="text-xs md:text-sm">
              Password requires at least { passwordAmoutOfChardNeeded } more random {
                passwordAmoutOfChardNeeded === 1 ? 'character' : 'characters'
              }
            </span>
          }
        </div>

        <div className="flex items-center justify-between space-x-12 
           md:space-y-0 md:space-x-12 mb-6 md:mb-6"
        >
          <button className="font-extralight text-black border-b py-2">
            <span>
              Forgot password
            </span>
          </button>

          <button
            onClick={ () => navigate('/search') }
            disabled={ isLoginButtonDisabled }
            className="text-white md:w-auto flex justify-center items-center space-x-2 font-sans font-semibold rounded-md shadow-lg px-3 py-2 border transition duration-200 bg-his-purple"
            style={ loginButtonStyle }
          >
            <span>
              Login
            </span>
            <ArrowSVG className="w-7"/>
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