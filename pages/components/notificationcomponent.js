import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ReactModal from 'react-modal'
export default function NotificationComponent() {
    
  return (
    
         
             <div className="h-16 flex flex-row w-full top-20 mt-2 justify-center content-center items-center bg-white border-b border-gray-200 " >
                <div className="w-1/8 m-2 flex" >
                    <div className="w-8 h-8 rounded-full bg-gray-500">

                    </div>
                </div>
                <p className="w-7/8 m-2 text-gray-700 text-xs flex flex-wrap">Capstone project deadline to clear application is in 3 hours</p>
             </div>
                                          
     
  )
}
