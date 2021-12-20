import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight, FaComment, FaComments} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark, GiPaperClip} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsClipboard, BsThreeDots } from 'react-icons/bs'
import { useTask } from '../../context/TaskContext'

export default function TaskComponent({title, description, taskHandler, completehandler, workinghandler}) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
 return (
  
  
         <div 
          
          className="h-54 p-5 w-42 m-4 cursor-pointer hover:border-purple-400 rounded-2xl border border-gray-100 flex flex-col"
          onClick={taskHandler}
          > 
        
           <div className="h-2/4 w-full flex flex-col">
               <p className="text-xl font-bold mt-2">{title}</p>
              <p className="pt-2 text-sm text-gray-500">{description}</p>
           </div>
          <div className="h-2/4 w-full flex flex-col">
              <div className="w-full mt-3 h-full flex flex-row items-center">
                <button 
                onClick={workinghandler}
                className="ml-0 m-2 p-2 hover:bg-purple-900 items-center justify-center flex content-center rounded-md text-center bg-purple-400"> 
                  <p className="text-white hover:bg-purple-900 text-xs">In Progress</p>
               </button>
               <button
               onClick={completehandler}
               className="m-2 p-2  items-center justify-center flex content-center rounded-md text-center bg-purple-400"> 
                  <p className="text-white text-xs">Completed</p>
                </button>
              </div>  
              <div className="w-full h-1/2 flex flex-row content-center items-center justify-center"> 
              <div className="h-full w-1/2 flex flex-row content-center items-center">
                <div className="flex items-center flex-row p-2"> 
                <p className="text-sm text-gray-700" >3</p>
                    <GiPaperClip className="fill-current m-2 h-6 w-6 text-gray-500" />
                    </div>
                    <div className="items-center p-2 flex flex-row"> 
                       <p className="text-gray-700 text-sm" >3</p>
                        <FaComments className="fill-current m-2 h-6 w-6 text-gray-500" />
                    </div>
              </div>
              <div className="h-full w-1/2 flex flex-row content-center items-center justify-end">
                <div className="bg-gray-400 rounded-full h-6 w-6 flex justify-center items-center"> 
                    </div>
                    <div className="bg-gray-400 rounded-full h-6 w-6 flex justify-center items-center">            
                    </div>
              </div>
            </div>
          </div>
         </div>                                           
    
  )
}
