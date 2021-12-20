import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    
         <nav className="h-60 w-full flex flex-row"> 
            <div className="w-1/3">
              <img />
            </div>
            <div className="w-1/3">
              <p>Login</p>
            </div>
            <div className="w-1/3 flex justify-center content-center items-center">
              <a className="flex  justify-center items-center content-center rounded-2xl px-4 py-3 bg-gray-500" href="">
                  <p className="flex text-white text-lg">Create Account</p>
              </a>
            </div>
           </nav>                                           
     
  )
}
