import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdAdd, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ReactModal from 'react-modal'
import { CircularProgressbar } from 'react-circular-progressbar';
import Jigsaw from './puzzlecomponent'
import VisualizationComponent from './visualizationcomponent'
import VisualizationSelector from './visualizationselector'
import image from 'next/image'
import { LinearProgress } from '@material-ui/core'
import { useAuth } from '../../context/AuthContext'
import CompletedVisualizationComponent from './gamificationcomponent/completedstatus'
import CreatedVisualizationComponent from './gamificationcomponent/createdstatus'
import WorkingVisualizationComponent from './gamificationcomponent/workingstatus'
import { useTask } from '../../context/TaskContext'

export default function GamificationComponent({viewProjectStatus, closePage}) {
  const [gameImage, setgameImage] = useState('/game/rennaisanceart.jpg')
  const {user} = useAuth()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [projectInfo, setprojectInfo] = useState('')
  const [taskInfo, setTaskInfo] = useState([])
  const { tasks,
    singleTask,
     taskServerMessage,
     get_all_tasks,
     get_single_task,
     set_task_to_completed,
     set_task_to_working,
     settaskServerMessage,
     create_single_task} = useTask()
    


  useEffect(()=>{
    const newTaskInfo = JSON.parse(localStorage.getItem('taskInfo'))
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')
    const newProjectInfo = JSON.parse(localStorage.getItem('projectInfo'))
    setprojectInfo(newProjectInfo)
    
    setTaskInfo(newTaskInfo)
   
    setFirstname(firstname)
    setLastname(lastname)
    const token = localStorage.getItem('token')
    const userID = localStorage.getItem('userID')
    console.log(token)
    console.log(userID)
   }, [])

   const jigsawSelector = () =>{
    if (projectInfo.status == 'created'){
      return <CreatedVisualizationComponent gameImage={gameImage}/> 
    }else if (projectInfo.status == 'working'){
     return <WorkingVisualizationComponent gameImage={gameImage}/>
    }else {
      return <CompletedVisualizationComponent gameImage={gameImage}/>
    }
  }

  const progressBarSelector = () => {
    if (projectInfo.status == 'created'){
      return <LinearProgress className="w-40" variant="determinate" value={10} />
    }else if (projectInfo.status == 'working'){
     return <LinearProgress className="w-40" variant="determinate" value={65} />
    }else {
      return <LinearProgress className="w-40" variant="determinate" value={100} />
    }
  }

  const projectStatus = ()=>{
    if (projectInfo.status == 'created'){
      return <p >Created</p>
    }else if (projectInfo.status == 'working'){
     return <p >In Progress</p>
    }else {
      return <p >Completed</p>
    }
  }
  const upcomingtasks = taskInfo.slice(3)
//   const renderTasks = () => {
    
      
//       upcomingtasks.map(upcomingtask => {
//         return (
// <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
//                     <div className="h-2/3 p-5 flex content-center flex-col">
//                       <p className="text-sm text-purple-700">{upcomingtask.enddate}</p>
//                       <p className="text-md text-purple-700 font-bold" >{upcomingtask.title}</p>
//                     </div>
//                     <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
//                     <p className="text-xs text-gray-500">Assigned to:</p>
//                       <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
//                     </div>
//                   </div>
//         )
//       })
    
//   }

  return (
    
         
             <ReactModal 
              isOpen={viewProjectStatus}
              className="h-screen w-screen flex justify-center p-10 bg-white border-b " >
              
          
              <div className="flex flex-row h-screen w-full">
         {/* project section */}
         <div className="flex flex-col pl-20 pr-10 mt-10 w-3/4">
           <div className="w-1/4 self-end flex"> 
         <button 
           onClick={closePage}
           className="px-2 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            <IoMdClose className="h-6 w-6 m-1 fill-current text-white"/>
            <p className="text-white m-1 text-sm ">Close Project View</p>
           </button>
           </div>
         <p className="m-5 text-lg h-1/8 text-gray-600 font-bold">
         Welcome, here's your progress so far for this project 🚀
         </p>

    {
      jigsawSelector()
    }
         {/* visualization component */}
        {/* <CompletedVisualizationComponent gameImage={gameImage}/> */}
       {/* <CreatedVisualizationComponent gameImage={gameImage}/>  */}
       {/* <WorkingVisualizationComponent gameImage={gameImage}/> */}
       {/* End of visualization component */}

       {/* Visualization selector */}
       <p className="m-5 text-lg h-1/8 text-gray-600 font-bold">
         Select Puzzle 🧩
         </p> 
            <div className="w-full flex flex-row">
                  
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
            </div>

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
                        
                        {progressBarSelector()}
                      </div>
                      <p className="font-bold text-xs m-1">{firstname} {lastname}</p>
                     <p className="text-xs ml-1 font-bold" >Sales Executive </p>
                  </div>
              </div>
            </div>
            <p className="h-10 mt-10 w-full text-blue-900 text-lg font-bold" >Upcoming tasks</p>
            <div className="w-full flex flex-col h-80 overflow-y-scroll">
                  
             {
               upcomingtasks.map(upcomingtask => {
                return (
        <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
                            <div className="h-2/3 p-5 flex content-center flex-col">
                              <p className="text-sm text-purple-700">{upcomingtask.enddate}</p>
                              <p className="text-md text-purple-700 font-bold" >{upcomingtask.title}</p>
                            </div>
                            <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
                            <p className="text-xs text-gray-500">Assigned to:</p>
                              <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
                            </div>
                          </div>
                )
              })
             }
                  {/* <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
                    <div className="h-2/3 p-5 flex content-center flex-col">
                      <p className="text-sm text-purple-700">{taskInfo[0].enddate}</p>
                      <p className="text-md text-purple-700 font-bold" >{taskInfo[1].title}</p>
                    </div>
                    <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
                    <p className="text-xs text-gray-500">Assigned to:</p>
                      <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
                    </div>
                 </div>


                 <div className="m-5 w-4/5 h-32 flex flex-col rounded-2xl shadow-lg">
                    <div className="h-2/3 p-5 flex content-center flex-col">
                      <p className="text-sm text-purple-700">{taskInfo[1].enddate}</p>
                      <p className="text-md text-purple-700 font-bold" >{taskInfo[1].startdate}</p>
                    </div>
                    <div className="h-1/3 rounded-b-xl pl-4 bg-yellow-200 flex flex-col content-center" >
                   <p className="text-xs text-gray-500">Assigned to:</p>
                      <p className="text-xs text-gray-500 font-bold" >{firstname} {lastname}</p>
                    </div>
                  </div> */}
            </div>
            <div 
          //  onClick={closePage}
           className="px-2 py-1 m-5 bg-purple-500 rounded-md flex flex-row justify-center items-center content-center">
            
            <p className="text-white m-1 text-sm ">Project Status:  </p>
            <p className="text-white m-1 text-sm ">{projectStatus()} </p>
           </div>
         </div>
       </div>
            </ReactModal>
                                          
     
  )
}
