import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa'
import Link from 'next/link'
import ProjectComponent from '../components/homecomponent'
import CalendarComponent from '../components/calendarcomponent'
import { IoIosAlarm, IoMdNotifications } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'
import { GiAlarmClock } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import NotificationModal from '../components/notificationmodal'
import router from 'next/router'
import { useAuth } from '../../context/AuthContext'

export default function ProjectScreen() {


  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const {user} = useAuth()
  const [modalstate, setmodalstate] = useState(false)
  const renderModal = () =>{
    if (modalstate){
      return <NotificationModal/>
    }else{
      return null
    }
  }

  useEffect(()=>{

    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')
    setFirstname(firstname)
    setLastname(lastname)
  }, [])

  return (
    <div className="w-screen" style={{fontFamily:'inter'}}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>
     
      <main className=" h-full flex w-screen flex-col">
        {/* navigation bar */}
        <nav className="w-full h-24 flex flex-row border-gray-200 border-b">
        <div className="w-1/3 justify-center flex items-center content-center flex-row">
          
          <div className="w-1/3 h-30 flex p-4">
              <img className="w-full h-full" src="/vercel.svg"/>
            </div>
               {/* <h1 className="w-1/3 justify-center text-center cursor-pointer focus:bg-blue-700 focus:text-white">Targetometer</h1> */}
                   
             <input className="flex w-2/3 focus:outline-none focus:ring focus:border-blue-300  justify-center items-center content-center rounded-2xl px-4 py-3 bg-gray-200" placeholder="search" />
          </div>
          <div className="w-1/3 h-full flex flex-row items-center content-center justify-center">
              
              <a 
                className="w-1/3 h-full m-2 flex content-center items-center justify-center cursor-pointer" 
                onClick={()=>router.push(`/${firstname}_${lastname}`)}
                >
              <p className="" >Home</p>
             </a>
              
              
              <a 
                className="w-1/3 h-full  m-2 flex content-center items-center justify-center cursor-pointer"
                onClick={()=>router.push(`/${firstname}_${lastname}/projects`)}
                >
              <p >Projects</p>
             </a>
              
         
             <a 
              className="w-1/3 h-full m-2 border-b-4 border-purple-400 flex content-center items-center justify-center cursor-pointer"
              onClick={()=>router.push(`/${firstname}_${lastname}/settings`)}
              >
              <p >Settings</p>
              </a>
           
              
              
          </div>
          <div className="w-1/3 flex flex-row items-center content-center justify-center">
          <div className="w-2/3 flex flex-row">
          <div className="w-1/4 m-2">
                
          <IoMdNotifications onClick={()=>{
                       
                       setmodalstate(!modalstate)
                    
                    }} 
                    className={`w-10 cursor-pointer h-10 fill-current ${modalstate? 'text-blue-400': 'text-gray-400' }`}
                    
                    />
              {renderModal()}
            </div>
            <div className="w-1/4 m-2">
            <div className="w-10 h-10 rounded-full bg-gray-500">
                  
                  </div>
               
            </div>
            <div 
                 className="w-2/4 cursor-pointer focus:border-b-1 focus:border-blue-600 justify-center content-center items-center flex m-2"
               onClick={()=>router.push(`/${firstname}_${lastname}/profile`)}
                 >
             <p className="p-0">{firstname} {lastname}</p>
            </div>
          </div>
          
         <div className="w-1/3">

         </div>
              
          </div>
       </nav>
       {/* main dashboard */}
       <div className="flex flex-row h-screen w-full">
         {/* project section */}
         <div className="flex flex-row flex-wrap pl-20 pr-10 mt-10 w-3/4">
          <div className="h-screen w-full pl-20 pr-20 flex flex-col">
              <div className="h-40 flex justify-center w-full flex-col content-center">
                <div className="h-20 w-20 rounded-full bg-gray-500">
                  <img src="/"/>
                </div>
             </div>
             <div className="w-full px-10 flex flex-col p-5">
                <input placeholder="Full Name" className="w-full border-gray-200 p-2 rounded-md border h-12 pl-5 m-4" />
                <input placeholder="Email" className="w-full border border-gray-200 p-2 rounded-md h-12 pl-5 m-4" />
                <input placeholder="Contact Number" className="w-full border-gray-200 p-2 rounded-md border  h-12 pl-5 m-4" />
                <input placeholder="Team" className="w-full border-gray-200 border p-2 rounded-md h-12 pl-5 m-4" />
                <input placeholder="Address" className="w-full border border-gray-200 p-2 rounded-md m-4 h-12 pl-5" />
                
                <button className="w-full py-4 bg-blue-600 rounded-md mt-10 m-4">
                  <p className="text-md">Save</p>
                </button>
                </div>
          </div>
         </div>
         {/* dashboard section */}
         <div className="flex w-1/4 mt-10 justify-center content-center">
            
         </div>
       </div>
      </main>
    </div>
  )
}
