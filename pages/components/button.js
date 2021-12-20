import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
export default function ButtonComponent() {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div className="flex flex-row mb-5 h-32 sm:h-48 bg-white rounded-2xl w-full sm:w-1/2 shadow-md ">
                <div className="w-1/5">
                  <p></p>
                </div>
                <div className=" w-2/5 sm:w-3/5 flex flex-row justify-center items-center">
                  <div className="flex flex-col w-1/3">
                    <p className="font-bold text-black text-md sm:text-xl">Lagos</p>
                    <p className="text-green-700 text-sm sm:text-md">6:30 am</p>
                  </div>
                  <div  className="flex flex-col w-1/3 justify-center items-center">
                    <FaLongArrowAltRight className="h-4 w-8 sm:h-12 sm:w-32" />
                  </div>
                  <div  className="flex flex-col w-1/3">
                  <p className="font-bold text-black text-md sm:text-xl">Abuja</p>
                    <p className="text-green-700 text-sm sm:text-md">13:30 am</p>
                  </div>
                </div>
                <div className="w-2/5 sm:w-1/5 flex flex-col justify-center items-center content-center">
                    <p className="font-bold text-black text-md sm:text-xl mt-5 sm:mt-0 mb-4">NGN 9500</p>
                    <button className="bg-green-600 text-white text-md sm:text-md hover:bg-green-500 rounded-lg px-2 py-2 sm:px-4 sm:py-3 mt-0 sm:mt-4"><p>Select -></p></button>
                </div>
                
              </div>
  )
}
