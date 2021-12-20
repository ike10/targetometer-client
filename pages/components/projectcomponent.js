import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight, FaComment, FaComments} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark, GiPaperClip} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsClipboard, BsThreeDots } from 'react-icons/bs'

export default function ProjectComponent({projectdescription, projecttitle, projecthandler, completehandler, workinghandler}) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
 return (
      // <Link href="/username/projects/8918">
      
     
     
         <div 
            className="h-96 p-5 cursor-pointer hover:border-purple-400 w-54 m-4 rounded-2xl border border-gray-100 flex flex-col"
           
            > 
           <div className="h-2/4 flex w-full">
            <img className="rounded-md" src="/boxed-water.jpg"/>
           </div>
           <div className="h-1/4 w-full flex flex-col">
               <p className="text-xl font-bold mt-2">{projecttitle}</p>
              <p className="text-sm text-gray-500">{projectdescription}</p>
           </div>
          <div className="h-1/4 w-full flex flex-col">
              <div className="w-full h-full flex flex-row items-center">
      <button
         className="ml-0 m-2 p-2 items-center hover:bg-red-800 justify-center flex content-center rounded-md text-center bg-red-400"
         onClick={workinghandler}
         > 
                  <p className="text-white text-xs">Working</p>
        </button>
        <button
         className="ml-0 m-2 p-2 items-center hover:bg-purple-800 justify-center flex content-center rounded-md text-center bg-purple-400"
         onClick={completehandler}
         > 
                 <p className="text-white text-xs">Completed</p>
        </button>
        
               <button 
               onClick={projecthandler}
               className="m-2 p-2 items-center hover:bg-blue-800 justify-center flex content-center rounded-md text-center bg-blue-400"> 
                  <p className="text-white text-xs">View Project</p>
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
          //  </Link>
  )
}
