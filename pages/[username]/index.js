import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa'
import Link from 'next/link'
import ProjectComponent from '../components/homecomponent'
import CalendarComponent from '../components/calendarcomponent'
import { IoIosAlarm, IoMdNotifications } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'
import { GiAlarmClock } from 'react-icons/gi'
import HomeComponent from '../components/homecomponent'
import NotificationModal from '../components/notificationmodal'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Image from 'next/image'
import VisualizationComponent from '../components/visualizationcomponent'
import VisualizationSelector from '../components/visualizationselector'


export default function Dashboard() {
  const {user, setIsLoading, setServerMessage} = useAuth()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [modalstate, setmodalstate] = useState(false)
  const renderModal = () =>{
    if (modalstate){
      return <NotificationModal/>
    }else{
      return null
    }

  }
  const [gameImage, setgameImage] = useState('/game/modernart.jpg')
  const [userinfo, setuserinfo] = useState('')
 useEffect(()=>{
  setServerMessage('')
  setIsLoading(false)
  const firstname = localStorage.getItem('firstname')
  const lastname = localStorage.getItem('lastname')
  const userinfo = JSON.parse(localStorage.getItem('userinfo'))
  setFirstname(firstname)
  setuserinfo(userinfo)
  setLastname(lastname)
  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userID')
  console.log(token)
  console.log(userID)
 }, [])

  return (
    <div className="w-screen" style={{fontFamily:'inter'}}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
      </Head>
     
      <main className=" h-screen flex w-screen flex-col">
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
              className="w-1/3 h-full border-b-4 border-purple-400 m-2 flex content-center items-center justify-center cursor-pointer" 
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
                className="w-1/3 h-full m-2 flex content-center items-center justify-center cursor-pointer"
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
         <div className="flex flex-col pl-20 pr-10 mt-10 w-3/4">
          
         <p className="m-5 text-lg h-1/8 text-gray-600 font-bold">
         Welcome, here's your progress for the week 🚀
         </p>

         {/* visualization component */}
       <VisualizationComponent gameImage={gameImage}/>
        
       {/* End of visualization component */}

       {/* Visualization selector */}
       <p className="m-5 text-lg h-1/8 text-gray-600 font-bold">
         Select Puzzle 🧩
         </p> 
            <div className="w-full flex flex-row ">
                 
                  <VisualizationSelector 
                    gameSelectorImage={'/game/modernart.jpg'}
                   selectGameImage={()=>{
                      setgameImage('/game/modernart.jpg')
                    }}
                    />
                  <VisualizationSelector 
                    gameSelectorImage={'/game/colorart.jpg'} 
                    selectGameImage={()=>{
                      setgameImage('/game/colorart.jpg')
                    }} 
                    />
                
                  <VisualizationSelector 
                    gameSelectorImage={'/game/europeanart.jpg'}
                    selectGameImage={()=>{
                      setgameImage('/game/europeanart.jpg')
                    }}  
                    />
                  <VisualizationSelector 
                    gameSelectorImage={'/game/rennaisanceart.jpg'} 
                    
                    selectGameImage={()=>{
                      setgameImage('/game/rennaisanceart.jpg')
                   }}  
                    />
                    <VisualizationSelector 
                    gameSelectorImage={'/game/europeanart.jpg'}
                    selectGameImage={()=>{
                      setgameImage('/game/europeanart.jpg')
                    }}  
                    />
                  <VisualizationSelector 
                    gameSelectorImage={'/game/rennaisanceart.jpg'} 
                    
                    selectGameImage={()=>{
                      setgameImage('/game/rennaisanceart.jpg')
                    }}  
                    />
            </div>
{/* s token */}
       {/* end of visualization selector */}
         <div>

         </div>
         </div>
         {/* dashboard section */}
         <div className="flex flex-col w-1/4 mt-10">
        
            <p className="h-10 w-full text-blue-900 text-lg font-bold">Contributors</p>
            <div className=" w-full rounded border border-gray-200">
              <div className="w-4/5 m-2 p-4 h-18 flex flex-row rounded-2xl content-center items-center">
                  <div className="w-2/8 h-full flex justify-center content-center items-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full">

                    </div>
                  </div>
                  <div className="flex-col flex w-6/8 ml-5 h-full">
                      <div className="w-full h-2/4 flex">
                        <LinearProgress className="w-40" variant="determinate" value={28} />
                      </div>
                      <p className="font-bold text-xs m-1">{userinfo.firstname} {userinfo.lastname}</p>
                     <p className="text-xs ml-1 font-bold" >{userinfo.occupation} </p>
                  </div>
              </div>
            </div>
            <p className="h-10 mt-10 w-full text-blue-900 text-lg font-bold" >Upcoming tasks</p>
            <div className="w-full flex flex-col">
                  <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
                    <div className="h-2/3 p-5 flex content-center flex-col">
                      <p className="text-sm text-purple-700">03 Sept 2021</p>
                      <p className="text-md text-purple-700 font-bold" >Call Customers</p>
                    </div>
                    <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
                    <p className="text-xs text-gray-500">Assigned to:</p>
                      <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
                    </div>
                 </div>
                 <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
                    <div className="h-2/3 p-5 flex content-center flex-col">
                      <p className="text-sm text-purple-700">03 Sept 2021</p>
                      <p className="text-md text-purple-700 font-bold" >Call Customers</p>
                    </div>
                    <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
                    <p className="text-xs text-gray-500">Assigned to:</p>
                      <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
                    </div>
                  </div>
            </div>
         </div>
       </div>
      </main>
    </div>
  )
}
