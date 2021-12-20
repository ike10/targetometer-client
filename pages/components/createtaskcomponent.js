import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useState} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ReactModal from 'react-modal'
import router, { useRouter } from 'next/router'
import {useTask} from '../../context/TaskContext'
import { useProject } from '../../context/ProjectContext'
export default function CreateTaskComponent({newTask, closeForm, createTask}) {
  const  [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [startdate, setstartdate] = useState('')
  const [enddate, setenddate] = useState('')
  const {taskServerMessage, create_single_task} = useTask()
const router = useRouter()
const{projectID} = router.query

  const createTaskHandler = () =>{
 
    create_single_task(title, description, startdate, enddate)
  }

  return (
   
        
             <ReactModal 
              isOpen={newTask}
              className="h-screen w-screen flex justify-center bg-white border-b " >
              
                <div className="w-full h-full justify-center flex flex-col content-center items-center">
                  {/* <button className="self-center w-32 py-2 rounded-xl bg-purple-600 text-white" onClick={closeForm}>
                    Close Form
                  </button> */}
                  <form className="w-1/3 rounded-lg shadow p-10">
                    <div className="my-5 w-full flex justify-center content-center">
                      <p className="text-2xl font-bold">Create New task</p>
                    </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="task title">
                      Task Title
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="task-title" 
                    type="text" 
                    placeholder="task Title"
                    value={title}
                   onChange={(e)=>{
                        e.preventDefault()
                        settitle(e.target.value)
                    }}
                    />
                  </div>
              <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="task Description">
                      Task Description
                    </label>
                    <input 
                      className="shadow appearance-none border h-24 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="task-description" 
                      type="text" 
                      placeholder="task Description"
                      value={description}
                    onChange={(e)=>{
                        e.preventDefault()
                        setdescription(e.target.value)
                    }}
                      />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="start-date">
                      Start date 
                    </label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="start-date" 
                    type="date" 
                    placeholder="Start Date"
                    value={startdate}
                    onChange={(e)=>{
                        e.preventDefault()
                        setstartdate(e.target.value)
                    }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="end date">
                      End Date
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="end-date" 
                      type="date" 
                      placeholder="End Date"
                      value={enddate}
                    onChange={(e)=>{
                        e.preventDefault()
                        setenddate(e.target.value)
                    }}
                      />
                  </div> 
                  <div className="flex my-8 w-full items-center justify-between">
                    <button 
                    onClick={(e)=>{
                      e.preventDefault()
                      createTaskHandler()
                    }}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                      Create New Task
                    </button>
                   
                  </div>
                  <p className="text-blue-800 bg-blue-200">{taskServerMessage}</p>
                  </form>
                </div>
            </ReactModal>
                                          
     
  )
}
