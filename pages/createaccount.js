import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa'
import {IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { css } from "@emotion/react";
import Navbar from './components/navbar'
import { useAuth} from '../context/AuthContext'
import { ClipLoader, RotateLoader } from 'react-spinners'
import Loader from 'react-loader-spinner'
import { LinearProgress } from '@material-ui/core'
import SwitchBase from '@material-ui/core/internal/SwitchBase'

export default function CreateAccount() {
  const {user, sign_in, sign_up, isLoading} = useAuth()
 
  const [firstname, setFirstname] = useState('')
  const color = '#000000'
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [serverMessage, setServerMessage] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  // const [signUp, isLoggedIn] = useContext(AuthContext)
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

 const reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
  

  const handleSignup =  (e) =>{
    e.preventDefault()
    const test = reg.test(password)
   if (password.length < 8){
     setServerMessage('password is too short')
   }else if (password !== confirmpassword) {
      setServerMessage('password and confirm password do not match')
   } else{
    sign_up(email, password, firstname, lastname, confirmpassword)
   }
      
   
    
   
  }
  return (
    <div className="w-full" style={{fontFamily:'inter'}}>
      <Head>
        <title>Create Account</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>
    
      <main className=" h-screen flex w-screen bg-purple-700 flex-col">
       <nav className="h-60 w-full flex flex-row"> 
            <div className="w-1/3">
              <img />
            </div>
            <div className="w-1/3">
              <p>Login</p>
            </div>
            <div className="w-1/3 flex justify-center content-center items-center">
              <Link href="/">
              <a className="flex  justify-center items-center content-center rounded-2xl px-4 py-3 bg-gray-500" href="">
                  <p className="flex text-white text-lg">Log in</p>
              </a>
              </Link>
             
            </div>
           </nav> 
       <div className="h-1/2 w-full flex items-center content-center justify-center">
                <form  className="p-10 w-2/5 self-center justify-center flex flex-col">
               {/* <ClipLoader color={color} loading={isLoading} css={override} size={150} /> */}
                <RotateLoader color={color} loading={isLoading} css={override} size={15}/>
                <p className="my-2 w-full text-3xl text-white font-bold">Create Account</p>  
                <div className="flex my-3  flex-row">
                <input className="ml-0 h-12 shadow-2xl bg-transparent text-white border-green-200 m-2 border pl-5 rounded-2xl w-1/2" 
                  type="text" 
                  placeholder="First Name" 
                  value={firstname}
                  onChange={e=>{
                    e.preventDefault()
                    setFirstname(e.target.value)
                  }}
                  />
                <input 
                  className="mr-0 h-12 shadow2xl pl-5 w-1/2 bg-transparent text-white border m-2 border-green-200 rounded-2xl" 
                  type="text" 
                  placeholder="Last Name" 
                  value={lastname}
                  onChange={e =>{
                    e.preventDefault()
                    setLastname(e.target.value)
                  }}
                  />
                </div>
                <input 
                  className="my-3 shadow-2xl text-white border-green-200 h-12 border bg-transparent pl-5 rounded-2xl w-full" 
                  type="email" 
                  required
                  placeholder="Email" 
                  value={email}
                  onChange={(e)=>{
                    e.preventDefault()
                    setEmail(e.target.value)
                  }}
                 />
             
                <input 
                  className="my-3 shadow-2xl h-12 pl-5 text-white border-green-200 border w-full bg-transparent rounded-2xl" 
                  type="password" 
                  required
                  placeholder="Password"
                  minLength={8} 
                  value={password}
                  onChange={e=>{
                    e.preventDefault()
                    setPassword(e.target.value)
                  }}
                  />
                <input 
                  className="my-3 shadow-2xl h-12 pl-5 text-white border-green-200 border w-full bg-transparent rounded-2xl" 
                  type="password" 
                  required
                  placeholder="Confirm Password" 
                  value={confirmpassword}
                  onChange={e=>{
                    e.preventDefault()
                    setConfirmpassword(e.target.value)
                  }}
                  />
                <button 
                className="w-full py-3 my-5 bg-purple-200 rounded-2xl"
                onClick={handleSignup} >
                 
                  <p className="text-purple-800 text-2xl font-bold">Create Account</p>
                </button>

                <p className="text-lg text-purple-600 bg-purple-200 border-1 border-purple-600">{serverMessage}</p>
                <p className="text-center text-sm text-white" >Please make sure your password is at least 8 character long</p>
                </form> 
                
                                             
         </div>   
      </main>
    </div>
  )
}
