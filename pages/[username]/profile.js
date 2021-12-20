import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa'
import Link from 'next/link'
import ProjectComponent from '../components/homecomponent'
import CalendarComponent from '../components/calendarcomponent'
import { IoIosAlarm, IoMdCloudUpload, IoMdLogOut, IoMdNotifications, IoMdRemoveCircle } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'
import { GiAlarmClock } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import NotificationModal from '../components/notificationmodal'
import router, { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext'
import { useProject } from '../../context/ProjectContext'
import {useTask} from '../../context/TaskContext'
export default function ProfileScreen() {
 

  const {projects, get_all_projects} = useProject()
 
  const {tasks} = useTask()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [profileimage, setprofileimage] = useState()
  const [password, setpassword] = useState('')
  const [contact, setcontact] = useState('')
  const [occupation, setoccupation] = useState('')
  const [email, setemail] = useState('')
  const [address, setaddress] = useState('')
  const [userinfo, setuserinfo] = useState('')
  const {user, setServerMessage, serverMessage, get_user, setUser, update_user, delete_user} = useAuth()
  const [modalstate, setmodalstate] = useState(false)
  const renderModal = () =>{
    if (modalstate){
      return <NotificationModal/>
    }else{
      return null
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    setServerMessage('Logged out')
    router.push('/')
  }

  const handleUserUpdate = () =>{
    update_user(profileimage, address, email, contact, occupation, password)
  }

  useEffect(()=>{
    setServerMessage('')
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')
   const userinfo = JSON.parse(localStorage.getItem('userinfo'))
    get_user()
    setuserinfo(userinfo)
    setFirstname(firstname)
    setLastname(lastname)
    get_all_projects()

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
              className="w-1/3 h-full m-2  flex content-center items-center justify-center cursor-pointer"
              onClick={()=>router.push(`/${firstname}_${lastname}/settings`)}
              >
              <p> Settings </p>
              </a>
           
              
              
          </div>
          <div className="w-1/3 flex flex-row items-center content-center justify-center">
          <div className="w-2/3 flex flex-row h-full items-center content-center">
          <div className="w-1/4 m-2 flex items-center content-center h-full">
                
          <IoMdNotifications onClick={()=>{
                       
                       setmodalstate(!modalstate)
                    
                    }} 
                    className={`w-10 cursor-pointer h-10 fill-current ${modalstate? 'text-blue-400': 'text-gray-400' }`}
                    
                    />
              {renderModal()}
            </div>
            <div className="w-1/4 m-2 h-full flex content-center items-center ">
            <div className="w-10 h-10 rounded-full bg-gray-500">
                  
                  </div>
               
            </div>
            <div 
                 className="w-2/4 h-full cursor-pointer border-b-4 border-purple-400 justify-center content-center items-center flex m-2"
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
       <form 
       method="POST"
            className=" flex w-full h-screen flex-row" 
            >
         <div className="h-full w-1/3 pt-10 p-10">
            <div className="w-2/3 h-1/3 bg-purple-300">
                   <img src={`https://targetometer-server.herokuapp.com/${userinfo.profileimage}`} className="h-full w-full"/>
                  
                    <p>Profile Picture</p>
        
            <input 
              className="px-2 cursor-pointer py-1 m-5  w-56 text-gray-600  rounded-md flex flex-row justify-center items-center content-center" 
              type="file" 
              // value={profileimage}
              onChange={e =>{
                e.preventDefault()
                setprofileimage(e.target.files[0])
                
              }}
              />
            
            {/* Update user profile */}

            
        
           <div 
          onClick={()=>{
             
             delete_user()
             router.push('/')
           }}
           className="px-2 cursor-pointer hover:bg-purple-600 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdRemoveCircle className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Delete User Profile</p>
           </div>
           <div 
          onClick={()=>{
             
             handleLogout()
           }}
           className="px-2 cursor-pointer hover:bg-purple-600 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdLogOut className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Log Out</p>
           </div>
           

            </div>
         </div>
         <div className="h-full w-1/3 pt-10">
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-lg font-bold" >Name</p>
                   <p className="text-xl font-bold text-purple-800" >{userinfo.firstname} {userinfo.lastname}</p>
            </div>
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Email</p>
                    <p className="text-lg text-purple-800" >{userinfo.email}</p>
            </div>
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Contact</p>
                    <input 
                      className="text-lg text-purple-800" 
                      type="phone"
                      placeholder={userinfo.contact}
                      value={contact}
                      onChange={e =>{
                        e.preventDefault()
                        setcontact(e.target.value)
                      }}
                      />
            </div> 
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Password</p>
                   <input 
                    className="text-lg text-purple-800" 
                    placeholder="xxx xxx xxx" 
                    type="password"
                    value={password}
                    onChange={e=>{
                      e.preventDefault()
                      setpassword(e.target.value)
                    }}
                    />
           </div>
           <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Role</p>
                <input 
                  className="text-lg text-purple-800" 
                  placeholder={userinfo.occupation}
                  value={occupation}
                  onChange={e=>{
                    e.preventDefault()
                    setoccupation(e.target.value)
                  }}
                  />
            </div>
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Address</p>
                   <input 
                    className="text-lg text-purple-800" 
                    placeholder={userinfo.address}
                    value={address}
                    onChange={e=>{
                      e.preventDefault()
                      setaddress(e.target.value)
                    }}
                    />
            </div>
            <div className="h-20  w-96 m-5 my-2">
                    <p className="text-md font-bold" >Number of projects</p>
                   <p className="text-lg text-purple-800" >{projects.length}</p>
           </div>
          
           <div 
          onClick={()=>{
             
             handleUserUpdate()
           }}
           className="px-2 cursor-pointer hover:bg-purple-600 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdCloudUpload className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Update User Profile</p>
           </div>
           <p className="text-purple-700 text-center bg-purple-400 text-md rounded m-5" >{serverMessage}</p>
            </div>
         </form>
       
      </main>
    </div>
  )
}
