

import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight, FaComment, FaComments} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark, GiPaperClip} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsClipboard, BsThreeDots } from 'react-icons/bs'
import Image from 'next/image'

export default function CreatedVisualizationComponent({gameImage}) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
 return (
  
                                   

<div 
className="m-5 w-full flex relative h-7/8"
style={{
  height:'30em',
  width:'40em'
}}
>
 <Image 
   className="m-2 rounded-2xl z-0"
   
   src={gameImage}
   alt="Visualization image"
   layout="fill"
   objectFit="cover"
   objectPosition="center"
   
 />
 <div className="z-50 w-full h-full rounded-2xl flex flex-row flex-wrap">
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
     <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-none border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-none border-white border-2">
      <p></p>
    </div>
    <div className="w-1/3 h-1/3 bg-white border-white border-2">
      <p></p>
    </div>
 </div>

</div>

    
)
}
