import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaStreetView} from 'react-icons/fa'
import Link from 'next/link'
import ProjectComponent from '../../components/projectcomponent'
import CalendarComponent from '../../components/calendarcomponent'
import { IoIosAlarm, IoMdAdd, IoMdNotifications } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'
import { GiAlarmClock, GiOpenBook } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import NotificationModal from '../../components/notificationmodal'
import CreateProjectComponent from '../../components/createprojectcomponent'
import GamificationComponent from '../../components/gamificationcomponent'
import router from 'next/router'
import { useAuth } from '../../../context/AuthContext'
import { useProject } from '../../../context/ProjectContext'
import { useTask } from '../../../context/TaskContext'

export default function ProjectScreen() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

const {user} = useAuth()

const {projects, setServerMessage, set_project_to_completed, set_project_to_working, singleproject, projectID , create_single_project, setProjectID, serverMessage, get_all_projects} = useProject()
  const [modalstate, setmodalstate] = useState(false)
  const [createProject, setCreateProject] = useState(false)
  const [viewProjectStatus, setViewProjectStatus] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startdate, setStartDate] = useState('')
  const [enddate, setEndDate] = useState('')
 
  const renderModal = () =>{
    if (modalstate){
      return <NotificationModal/>
    }else{
      return null
    }
  } 
  const closeViewProjectStatus = () =>{
    setViewProjectStatus(!viewProjectStatus)
}
 
  useEffect(()=>{
    setServerMessage('')
 const firstname = localStorage.getItem('firstname')
  const lastname = localStorage.getItem('lastname')
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
    
      <main className="h-full flex w-screen flex-col">
        {/* navigation bar */}
        <nav className="w-full h-24 flex flex-row border-gray-200 border-b">
        
          <div className="w-1/3 justify-center flex items-center content-center flex-row">
         
          <div className="w-1/3 h-30 flex p-4">
              <img className="w-full h-full" src="/vercel.svg"/>
            </div>
               {/* <h1 className="w-1/3 justify-center text-center cursor-pointer focus:bg-blue-700 focus:text-white">Targetometer</h1> */}
          
              <input className="flex focus:outline-none focus:ring focus:border-blue-300  w-2/3 justify-center items-center content-center rounded-2xl px-4 py-3 bg-gray-200" placeholder="search" />
          </div>
          <div className="w-1/3 h-full flex flex-row items-center content-center justify-center">
             
              <a 
                className="w-1/3 h-full m-2 flex content-center items-center justify-center cursor-pointer" 
                onClick={()=>router.push(`/${firstname}_${lastname}`)}
                >
              <p className="" >Home</p>
             </a>
             
              
              <a 
                className="w-1/3 h-full border-b-4 border-purple-400 m-2 flex content-center items-center justify-center cursor-pointer"
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
         
         <div className="flex flex-col h-full w-3/4">
         <div className="h-1/8 content-center flex justify-end">
          
           
 
     
            {/* Add new Project */}
          <button 
           onClick={()=>{
             setCreateProject(!createProject)
           }}
           className="px-2 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdAdd className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Add Project</p>
           </button>
           <CreateProjectComponent 
            newProject={createProject} 
            closeForm={()=>{
              
              setCreateProject(!createProject)
            }}
           
           
            
           
          serverMessage={serverMessage}
            />
        
         
         </div>

{/* git fetch */}
         {/* Add new project */}
        
         <div className="h-7/8 w-full mt-5 pl-5 flex flex-row ">
         <div className="w-1/3 h-full m-2 flex flex-col">
            <p className="font-bold">Created</p>
            <div className="flex flex-col">
            

{
                projects.map(project =>{
                  
                  if (project.status == 'created'){
                    return <ProjectComponent 
                    projectdescription={project.description} 
                    projecttitle={project.title}
                    projecthandler={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('selectedProjectID', project.projectID)
                      localStorage.setItem('projectInfo', JSON.stringify(project))
                     setProjectID(project.projectID)
                      router.push(`/${firstname}_${lastname}/projects/${projectID}`)
                     
                      //router.push(`/${firstname}_${lastname}/projects/${projects.projectID}`)
                    }}
                    completehandler={()=>{
                      set_project_to_completed(project.projectID)
                    }}
                    workinghandler={()=>{
                      set_project_to_working(project.projectID)
                    }}
                    />
                  }else{
                    return null
                  }
                
               })
             }

<ProjectComponent 
                  
                  projecttitle="Sample"
                  projectdescription="Please press the 'Add Project' button above to create a new project,"
                   
        
          
                  />
           </div>
          </div>
          <div className="w-1/3 h-full m-2 flex flex-col">
          <p className="font-bold">In progress</p>
          <div className="flex flex-col">
         
           {
                projects.map(project =>{
                  
                  if (project.status == 'working'){
                    return <ProjectComponent 
                    projectdescription={project.description} 
                    projecttitle={project.title}
                    projecthandler={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('selectedProjectID', project.projectID) 
                     setProjectID(project.projectID)
                     localStorage.setItem('projectInfo', JSON.stringify(project))
                      router.push(`/${firstname}_${lastname}/projects/${projectID}`)
                     
                      //router.push(`/${firstname}_${lastname}/projects/${projects.projectID}`)
                    }}
                    completehandler={()=>{
                      set_project_to_completed(project.projectID)
                    }}
                    workinghandler={()=>{
                      set_project_to_working(project.projectID)
                    }}
                    />
                  }else{
                    return null
                  }
                
               })
             }

<ProjectComponent 
                 
                 projecttitle="Sample"
                   projectdescription=" press 'view project' to get status report"
                   
         
                 />
            </div>
        </div>
        <div className="w-1/3 h-full m-2 flex flex-col">
          <p className="font-bold">Completed</p>
          <div className="flex flex-col">
          
      {
                projects.map(project =>{
                  
                  if (project.status == 'completed'){
                    return <ProjectComponent 
                    projectdescription={project.description} 
                    projecttitle={project.title}
                    projecthandler={(e)=>{
                      e.preventDefault()
                      localStorage.setItem('selectedProjectID', project.projectID) 
                      localStorage.setItem('projectInfo', JSON.stringify(project))
                     
                      setProjectID(project.projectID)
                      router.push(`/${firstname}_${lastname}/projects/${projectID}`)
                      
                      //router.push(`/${firstname}_${lastname}/projects/${projects.projectID}`)
                    }}
                    completehandler={()=>{
                      set_project_to_completed(project.projectID)
                    }}
                    workinghandler={()=>{
                      set_project_to_working(project.projectID)
                    }}
                    />
                  }else{
                    return null
                  }
                
               })
             }

<ProjectComponent 
                  
                  projecttitle="Sample"
                    projectdescription="click on the 'completed' and 'working' tags to change progress of a project"
                     
          
                  />
            </div>
          </div>
         </div>
          
         </div>
         {/* dashboard section */}
         <div className="flex w-1/4 mt-10 justify-center content-center">
           {/* <CalendarComponent/> */}
         </div>
       </div>
      </main>
    </div>
  )
}
