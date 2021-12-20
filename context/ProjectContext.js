
import {  createContext, useContext, useState } from "react";
import { GiToken } from "react-icons/gi";
import { useAuth } from "./AuthContext";

const ProjectContextDefaultValues = createContext({
    projects: [],
    singleproject: [],
   
})



const ProjectContext = createContext(ProjectContextDefaultValues)

const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/users'

export function useProject(){
    return useContext(ProjectContext)
}

export const ProjectProvider = ({children}) =>{
    const {user} = useAuth()
    const [projects, setProject] = useState([])
    const [singleproject, setSingleProject] = useState([])
    const [serverMessage, setServerMessage] = useState('')
    const [projectID, setProjectID] = useState('')
    const get_all_projects = () =>{
        const userID = localStorage.getItem('userID')
        const token = localStorage.getItem('token')
      
        fetch(`${BASE_URL}/${userID}/projects`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
               // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then(response=>response.json())
        .then(result => {
            console.log('projects')
            console.log(result.result)
            setProject([...result.result])
        })
        .catch(error => {
            setServerMessage(error.message)
        })
    }

    
    const get_single_project =()=>{
        const projectID = localStorage.getItem('selectedProjectID')
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/`, {
            method: 'GET',
            headers: {
               // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
               // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then((response)=>response.json())
        .then(result => {
            console.log(result.result)
            setProjects(...result.result)
        })
        .catch(error => {
            setServerMessage(error.message)
        })
    }

    const create_single_project = (title, description, startdate, enddate) =>{
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const firstname = localStorage.getItem('firstname')
        const lastname = localStorage.getItem('lastname')
        fetch(`${BASE_URL}/${userID}/projects`, {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                
                title: title,
                description:description, 
                startdate: startdate,
                enddate: enddate
            })
        })
        .then(response => response.json())
        .then((result)=>{
            setServerMessage(result.message)
           
            location.reload(true);
        })
        .catch(error => {
            setServerMessage(error.message)
        })
    }
   const set_project_to_working =(projectID)=>{
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/working`, {
            method: 'PUT',
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                
               
            })
        })
        .then(response => response.json())
        .then((result)=>{
            location.reload(true);
            // setServerMessage(result.message)
            
        })
        .catch(error => {
            setServerMessage(error.message)
        })
    }

    const set_project_to_completed = (projectID) => {
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/completed`, {
            method: 'PUT',
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                
              
            })
        })
        .then(response => response.json())
        .then((result)=>{
            // setServerMessage(result.message)
           location.reload(true);
        })
        .catch(error => {
            setServerMessage(error.message)
        })
    }

    const value = {
        projects,
        singleproject,
        serverMessage,
        setServerMessage,
        get_all_projects,
        get_single_project,
       create_single_project,
        projectID,
        setProjectID,
        set_project_to_working,
        set_project_to_completed
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectContext