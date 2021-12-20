import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa'
import Link from 'next/link'
import ProjectComponent from '../../../components/projectcomponent'
import CalendarComponent from '../../../components/calendarcomponent'
import { IoIosAlarm, IoMdAdd, IoMdNotifications } from 'react-icons/io'
import { BsAlarm } from 'react-icons/bs'
import { GiAlarmClock, GiOpenBook } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import NotificationModal from '../../../components/notificationmodal'
import CreateProjectComponent from '../../../components/createprojectcomponent'
import TaskComponent from '../../../components/taskcomponent'
import CreateTaskComponent from '../../../components/createtaskcomponent'
import { useProject } from '../../../../context/ProjectContext'
import { useTask } from '../../../../context/TaskContext'
import router, { useRouter } from 'next/router'
import GamificationComponent from '../../../components/gamificationcomponent'


export default function TaskDashboard() {
  const [firstname, setFirstname] = useState('')
  
  const router = useRouter()
  const [lastname, setLastname] = useState('')
  const [modalstate, setmodalstate] = useState(false)
  const [createTaskModal, setCreateTaskModal] = useState(false)
  const [createProject, setCreateProject] = useState(false)
  const [viewProjectStatus, setViewProjectStatus] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskStartDate, setTaskStartDate] = useState('')
  const [taskEndDate, setTaskEndDate] = useState('')
  const {projects, setServerMessage, set_project_to_completed, set_project_to_working, singleproject, projectID , create_single_project, setProjectID, serverMessage, get_all_projects} = useProject()

  const { tasks,
   singleTask,
    taskServerMessage,
    get_all_tasks,
    get_single_task,
    set_task_to_completed,
    set_task_to_working,
    settaskServerMessage,
    create_single_task} = useTask()
   
   
    const closeViewProjectStatus = () =>{
      setViewProjectStatus(!viewProjectStatus)
  }

  const [oldTask, setOldTask] = useState({})

const [selectedProjectID, setSelectedProjectID] = useState('')

useEffect(()=>{
    const newProjectID = localStorage.getItem('selectedProjectID')
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')
    settaskServerMessage('')
   setSelectedProjectID(newProjectID)
   console.log(selectedProjectID)
    setFirstname(firstname)
    setLastname(lastname)
   
    get_all_tasks()
   
}, [])

  const renderModal = () =>{
    if (modalstate){
      return <NotificationModal/>
    }else{
      return null
    }
  } 
  const closeNewTaskForm = () =>{
    setCreateTaskModal(!createTaskModal)
  }
  
 

  return (
    <div className="w-screen overflow-hidden" style={{fontFamily:'inter'}}>
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
       <div className="flex flex-row h-screen overflow-y-scroll w-full">
         {/* project section */}
         
        <div className="flex flex-col h-full w-3/4">
         <div className="h-1/8 content-center flex justify-end">
 {/* View Project Status */}

 



 <button 
           onClick={()=>{
            
             setViewProjectStatus(!viewProjectStatus)
           }}
           className="px-2 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <GiOpenBook className="h-6 w-6 m-1 fill-current text-white"/>
            
            <p className="text-white m-1 text-sm ">View Progress</p>
           </button>
         <GamificationComponent viewProjectStatus={viewProjectStatus} closePage={closeViewProjectStatus}/>
           <button 
          onClick={()=>{
             
             setCreateTaskModal(!createTaskModal)
           }}
           className="px-2 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdAdd className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Add Task</p>
           </button>
           
           <CreateTaskComponent newTask={createTaskModal} closeForm={closeNewTaskForm}/>
         </div>
         <div className="h-7/8 w-full mt-5 pl-5 flex flex-row ">
         <div className="w-1/3 h-full m-2 flex flex-col">
            <p className="font-bold">Working</p>
            <div className="flex flex-col">
            
                {tasks.map(task=>{
                 if (task.status == 'created'){
                  return <TaskComponent
                     title={task.title}
                     description={task.description}
                     workinghandler={()=>{
                      set_task_to_working(task.taskID)
                   } }
                     completehandler={()=>{
                       set_task_to_completed(task.taskID)}
                      }
                     taskHandler={()=>{

                       setTaskName(task.title)
                       setTaskDescription(task.description)
                       setTaskStartDate(task.startdate)
                       setTaskEndDate(task.enddate)
                     }}
                    />
                  
                  } else{
                    return null 
                  }
                 })
                 
                }
                <TaskComponent
                    title="Task Sample"
                    description="Please press the 'Add Task' button above to create a new task in this project, press 'view project' to get status report"
                   />
           </div>
          </div>
          <div className="w-1/3 h-full m-2 flex flex-col">
          <p className="font-bold">In progress</p>
          <div className="flex flex-col">
          
          {tasks.map(task=>{
                 if (task.status == 'working'){
                  return <TaskComponent
                     title={task.title}
                     description={task.description}
                     workinghandler={()=>{
                       set_task_to_working(task.taskID)}
                     }
                     completehandler={()=>{
                       set_task_to_completed(task.taskID)
                      }}
                     taskHandler={()=>{
                      setTaskName(task.title)
                       setTaskDescription(task.description)
                       setTaskStartDate(task.enddate)
                       setTaskEndDate(task.startdate)
                    }}
                   />
                  
                  } else{
                    return null 
                  }
                 })
                 
                }
                <TaskComponent
                    title="Task Sample"
                    description=" press 'any part of the task card to view more information"
                   />
            </div>
        </div>
        <div className="w-1/3 h-full m-2 flex flex-col">
          <p className="font-bold">Completed</p>
          <div className="flex flex-col">
          
          {tasks.map(task=>{
                 if (task.status == 'completed'){
                  return <TaskComponent
                     title={task.title}
                     description={task.description}
                     workinghandler={()=>{
                       set_task_to_working(task.taskID)}
                     }
                     completehandler={()=>{
                       set_task_to_completed(task.taskID)}}
                     taskHandler={()=>{
                      setTaskName(task.title)
                      setTaskDescription(task.description)
                      setTaskStartDate(task.startdate)
                      setTaskEndDate(task.enddate)
                    }}
                    />
                  
                  } else{
                    return null 
                  }
                 })
                 
                }
                <TaskComponent
                    title="Task Sample"
                    description="click on the 'completed' and 'working' tags to change progress of a project"
                   />
            </div>
          </div>
         </div>
          
         </div>
         {/* dashboard section */}
        <div className="flex w-1/4 mt-10 justify-center content-center">
            {/* Task Viewer */}

            <div className="w-full h-full px-5 py-5 pr-10 rounded border border-gray-300 flex flex-col items-center">
              <p className="font-bold text-md my-5">Task Viewer</p>
              <p className="font-bold text-xl my-5">Task Title: {taskName}</p>
              <p className="text-md my-5 text-gray-600 text-center"> Task description: {taskDescription}</p>
              <div className="my-5"> 
                <p> Start Date: {taskStartDate}</p>
                <p> End Date: {taskEndDate}</p>
              </div>
              <p className="text-md my-5 text-gray-600">Members:</p>
              <div className="flex flex-row">
                <div className="bg-gray-400 rounded-full h-10 w-10 m-2">

                </div>
                <div className="bg-gray-400 rounded-full h-10 w-10 m-2">

                </div>
                <div className="bg-gray-400 rounded-full h-10 w-10 m-2">

                </div>
                <div className="bg-gray-400 rounded-full h-10 w-10 m-2">

                </div>
              </div>
              <div className="my-5 flex flex-row">
                <p className="text-md m-2 text-gray-600">Status:  </p>
                <select className="m-2 bg-purple-700 px-3 py-2 text-white rounded">
                  <option>Working</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              
            </div>
         </div>
       </div>
      </main>
    </div>
  )
}
