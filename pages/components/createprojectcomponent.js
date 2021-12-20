import Head from 'next/head'
import {FaBars, FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaLongArrowAltRight} from 'react-icons/fa'
import {IoIosMenu, IoMdCheckmarkCircle, IoMdCheckmarkCircleOutline, IoMdClose, IoMdMenu} from 'react-icons/io'
import {GiCheckMark} from 'react-icons/gi'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ReactModal from 'react-modal'
import { useProject } from '../../context/ProjectContext'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext'
export default function CreateProjectComponent({newProject,closeForm, serverMessage, handleSubmit}) {
    const  [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [startdate, setstartdate] = useState('')
    const [enddate, setenddate] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
   const {setServerMessage} =  useAuth()
  const router = useRouter()

const{ create_single_project, projects} =  useProject()

  const handleForm = () =>{
   
  create_single_project(title, description, startdate, enddate)
 
}
  useEffect(()=>{
    setServerMessage('')
    const firstname = localStorage.getItem('firstname')
     const lastname = localStorage.getItem('lastname')
     setFirstname(firstname)
     setLastname(lastname)
     
  },[])

  return (
    
         
             <ReactModal 
              isOpen={newProject}
              className="h-screen w-screen flex flex-col justify-center bg-white border-b " >
              {/* <button className="mt-10 bg-purple-600 rounded-xl text-white py-2  w-32 self-center" onClick={closeForm}>
                    <p>Go back</p>
                  </button> */}
                <div className="w-full h-full justify-center flex content-center items-center">
                  
                  <form className="w-1/3 rounded-lg shadow p-10">
                    <div className="my-5 w-full flex justify-center content-center">
                      <p className="text-2xl font-bold">Create New Project</p>
                    </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="project title">
                      Project Title
                    </label>
                    <input 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="project-title" 
                      type="text" 
                      placeholder="Project Title"
                      value={title}
                      onChange={e=>{
                        e.preventDefault()
                        settitle(e.target.value)
                      }}
                      />
                  </div>
              <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Project Description">
                      Project Description
                    </label>
                    <input 
                      className="shadow appearance-none border h-24 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="project-description" 
                      type="text" 
                      placeholder="Project Description"
                      value={description}
                      onChange={e=>{
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
                      onChange={e=>{
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
                      onChange={e=>{
                        e.preventDefault()
                        setenddate(e.target.value)
                      }}
                      />
                  </div> 
                  <div className="flex my-8 w-full items-center justify-between">
                    <button 
                    onClick={()=>{
                      handleForm()
                      router.push(`/${firstname}_${lastname}/projects`)
                    }}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Create New Project
                    </button>
                   
                  </div>
                  <p className="text-blue-800 bg-blue-200">{serverMessage}</p>
                 </form>
                </div>
            </ReactModal>
                                          
     
  )
}
