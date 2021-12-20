import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ReactModal from 'react-modal'
import NotificationComponent from './notificationcomponent'
export default function NotificationModal() {
    
  return (
    
         
             <div className="h-1/2 w-1/4 top-20 rounded-lg flex flex-col right-28 fixed bg-white border " >
                <NotificationComponent/>
                <NotificationComponent/>
                <NotificationComponent/>
                <NotificationComponent/>
             </div>
                                          
     
  )
}
