
import {  createContext, useContext, useState } from "react";
import { GiToken } from "react-icons/gi";
import { useAuth } from "./AuthContext";

const TaskContextDefaultValues = createContext({
    tasks: [],
    singleTask: [],
   
})

const TaskContext = createContext(TaskContextDefaultValues)

const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/users'

export function useTask(){
    return useContext(TaskContext)
}

export const TaskProvider = ({children}) =>{
    const {user} = useAuth()
    const [tasks, setTask] = useState([])
    const [singleTask, setSingleTask] = useState([])
    const [taskServerMessage, settaskServerMessage] = useState('')

    const get_all_tasks = () =>{
        const userID = localStorage.getItem('userID')
        const token = localStorage.getItem('token')
        const projectID = localStorage.getItem('selectedProjectID')
        console.log(`${BASE_URL}/${userID}/projects/${projectID}/tasks` )
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
               // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then(response=>response.json())
        .then(result => {
            console.log(result.result)
            setTask([...result.result])
            localStorage.setItem('taskInfo',JSON.stringify(result.result) )
        })
        .catch(error => {
            settaskServerMessage(error.message)
        })
    }

    const get_single_task =( taskID)=>{
        const projectID = localStorage.getItem('selectedProjectID')
        const userID = localStorage.getItem('userID')
        const token = localStorage.getItem('token')
       fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
               // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        })
        .then((response)=>response.json())
        .then(result => {
            console.log(result)
            localStorage.setItem('tasks',JSON.stringify(result.result))
            setTask([...result.result])
       })
        .catch(error => {
            settaskServerMessage(error.message)
        })
    }

    const create_single_task = ( title, description, startdate, enddate) =>{
        const token = localStorage.getItem('token')
        const projectID = localStorage.getItem('selectedProjectID')
        const userID = localStorage.getItem('userID')
     
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/`, {
            method: 'POST',
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
        .then(()=>{
            
           settaskServerMessage("Task Created Successfully")
            location.reload(true);
        })
        .catch(error => {
            settaskServerMessage(error.message)
        })
    }

    const set_task_to_working =(taskID)=>{
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const projectID = localStorage.getItem('selectedProjectID')
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}/working`, {
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
            console.log(result.message)
            location.reload(true);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const set_task_to_completed = (taskID) => {
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const projectID = localStorage.getItem('selectedProjectID')
        fetch(`${BASE_URL}/${userID}/projects/${projectID}/tasks/${taskID}/completed`, {
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
            console.log(result.message)
         
            location.reload(true);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const value = {
        tasks,
        singleTask,
        taskServerMessage,
        get_all_tasks,
        get_single_task,
        create_single_task,
        set_task_to_completed,
        set_task_to_working,
        settaskServerMessage
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext