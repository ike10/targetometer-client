import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsThreeDots } from 'react-icons/bs'
export default function HomeComponent() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
 return (
   
         <div className="h-52 p-5 w-52 m-4 rounded-2xl shadow-md border border-gray-100 flex flex-col"> 
           <div className="h-1/4 flex w-full flex-row">
            <div className="w-1/2 flex content-center items-center">  
                <div className="bg-gray-400 rounded-full h-6 w-6 flex justify-center items-center"> 
                  <p className="text-sm">🔥 </p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center content-center items-center">
              
              <BsThreeDots className="fill-current text-gray-600 w-6 h-6"/>
            </div>
           </div>
           <div className="h-2/4 w-full">
              <p className="text-md font-bold text-black">Create notification logo with figma application</p>
           </div>
          <div className="h-1/4 w-full flex flex-row">
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-full h-2/3 mr-4 items-center justify-center flex content-center rounded-md text-center bg-blue-400"> 
                  <p className="text-white text-sm">Jun 20</p>
                </div>
              </div>  
              <div className="w-1/2 flex content-center items-center justify-center"> 
              <div className="bg-gray-400 rounded-full h-6 w-6 flex justify-center items-center"> 
                  
                </div>
                <div className="bg-gray-400 rounded-full h-6 w-6 flex justify-center items-center"> 
                  
                </div>
                
              </div>
          </div>
           </div>                                           
     
  )
}
