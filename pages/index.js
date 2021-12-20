import Head from 'next/head'
import {IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'

import {BsDash} from 'react-icons/bs'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaAndroid } from 'react-icons/fa'
import { css } from "@emotion/react";
import { useRouter } from 'next/router'
import Navbar from './components/navbar'
import { useAuth } from '../context/AuthContext'
import { RotateLoader } from 'react-spinners'
// import Link from 'next/link'
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;
export default function Home() {
  const{ user, sign_up, sign_in, serverMessage,setServerMessage, isLoading, setIsLoading} = useAuth()
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const router = useRouter()
  const handleLogin = (e) =>{
    e.preventDefault()
    sign_in(email, password)
    
  }
  useEffect(()=>{
    setIsLoading(false)
    // setServerMessage('Please Login')
  }, [])
  return (
    
    <div className="w-full overflow-x-hidden h-screen" style={{fontFamily:'inter',
                                                     
                                                    }}>
      <Head>
        <title>Home | Targetometer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>

     <div className="h-full w-full flex flex-col"> 
     <nav className="h-60 w-full flex flex-row"> 
            <div className="w-1/3">
              <img />
            </div>
            <div className="w-40 h-30 flex">
              <img className="w-full h-full" src="/vercel.svg"/>
            </div>
            <div className="w-1/3 flex justify-center content-center items-center">
              <Link href="/createaccount">
              <a className="flex  justify-center items-center content-center rounded-2xl px-4 py-3 bg-gray-500" href="">
                  <p className="flex text-white text-lg">Create Account</p>
              </a>
              </Link>
              
            </div>
           </nav>      
         {/* <div className="h-1/2 w-full flex items-center content-center justify-center">
                <form  className="p-10 w-2/5 border-black border-2 self-center justify-center flex flex-col rounded-2xl">
               <p className="my-2 w-full text-3xl text-blue-800 font-extrabold">Welcome Back</p>  
                <p className="my-2 w-full text-blue-800 text-xl">We are so excited to see you</p>
                <input className="border border-green-200 my-3 h-12 bg-transparent pl-5 rounded-2xl w-full" type="text" placeholder="Email" />
                <input className="my-3 border border-green-200 h-12 pl-5 w-full bg-transparent rounded-2xl" type="password" placeholder="Password" />
                <p className="my-2 text-white w-full">Forgot password</p>
                <Link href="/username/">
                <a className="w-full py-3 my-5 flex justify-center text-center cursor-pointer bg-blue-800 rounded-2xl">
                  <p className="text-xl text-white font-bold">Login</p>
                </a>
                </Link>
               
                </form>                                
          </div>                       */}
          
          <div class="w-full justify-center content-center flex">
          
  <form class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 w-1/3">
  <p className="my-2 w-full text-3xl text-purple-700 mb-10 font-extrabold">Welcome Back</p>  
                {/* <p className="my-2 w-full text-gray-800 text-md">We are so excited to see you</p> */}
                <RotateLoader loading={isLoading} css={override} size={15}/>
               <p className="m-2 text-lg text-purple-600 bg-purple-200 border-1 border-purple-600 text-center" >{serverMessage}</p>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input 
      className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="email" 
      type="text" 
      placeholder="email"
      value={email}
      onChange={e=>{
        e.preventDefault()
        setEmail(e.target.value)
      }}
      />
    </div>
    <div className="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input 
        className="shadow appearance-none border  rounded-2xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="password" 
        type="password" 
        placeholder="******************"
        value={password}
        onChange={e => {
          e.preventDefault()
          setPassword(e.target.value)
          
        }}
        
        />
      <p className="text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
     </button> */}
      
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold w-full py-2  rounded-2xl focus:outline-none focus:shadow-outline"
                  onClick={handleLogin}
                  >
                  <p className="text-lg text-white font-bold">Login</p>
                </button>
              
      {/* <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
    </div>
  </form>
  
</div>
     </div>
              
    </div>
  )
}
