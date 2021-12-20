

import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight, FaComment, FaComments} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark, GiPaperClip} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsClipboard, BsThreeDots } from 'react-icons/bs'
import Image from 'next/image'

export default function VisualizationSelector({selectGameImage, gameSelectorImage}) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
 return (
  
    <div 
    onClick={selectGameImage}
    className="w-1/6 m-2 rounded-2xl cursor-pointer hover:border-purple-200 border-purple-600 relative border-2"
    style={{
        height:'10em',
        width:'10em'    
    }}
    >
   <Image 
      className="m-2 rounded-2xl z-0"
      
      src={gameSelectorImage}
      alt="Visualization image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      
    />
  </div>

    
)
}
