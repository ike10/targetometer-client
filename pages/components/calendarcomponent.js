import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight, FaChevronLeft, FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
export default function CalendarComponent() {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    
         <div className="h-60 w-60 m-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col"> 
           <div className="h-1/5 w-full content-center items-center flex-row flex">
                <div className="w-1/2 flex content-center justify-center">
                    <p>June 2021</p>
                </div>
                <div className="w-1/2 flex-row flex justify-center content-center">
                    <FaChevronCircleLeft className="fill-current h-6 w-6 m-1 text-blue-600" />
                    <FaChevronCircleRight className="fill-current h-6 w-6 m-1 text-blue-600"  />
                </div>
           </div>
           <div className="h-4/5 w-full">

           </div>
           </div>                                           
     
  )
}
