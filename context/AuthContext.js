import { createContext, useContext, useState } from "react";
import router, {useRouter} from 'next/router'
import axios from "axios";
const AuthContextDefaultValues={
    user:[],
 
   
}

const AuthContext = createContext(AuthContextDefaultValues)

const BASE_URL = 'https://targetometer-server.herokuapp.com/api/v1/auth'
const USER_URL = 'https://targetometer-server.herokuapp.com/api/v1/users'
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [user, setUser] = useState([])
    
    const [userInfo, setUserInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const [single_route, setSingle_route] = useState([])
    const [serverMessage, setServerMessage] = useState('')
    const sign_up =  async(email, password, firstname, lastname, confirmpassword) =>{
       
            try{
                
                setIsLoading(true)
                let response = await fetch(`${BASE_URL}/createaccount`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                              },
                            body: JSON.stringify({
                                firstname: firstname,
                                lastname: lastname,
                                password: password,
                                email:email, 
                                
                            })
                       })
                       
                    const result = await response.json()
                    // console.log(result)
                   
                    setServerMessage("Account Created Successfully, please verify email")
                    
                                router.push(`/verifyuser`)
                        
                          
            }catch(err){
                setServerMessage("Welcome")
                setIsLoading(false)
                console.log(err.message)
            }
        
          
        
        

    //     fetch(`${BASE_URL}/createaccount`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //         body: JSON.stringify({
    //             firstname: firstname,
    //             lastname: lastname,
    //             password: password,
    //             email:email, 
                
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
           
    //     setServerMessage("Account Created Successfully, please login to access dashboard")
    //     setTimeout(()=>{
    //         router.push(`/`)
    //     }, 30000)
        
    //    })
    //     .catch(err=>{
    //         setServerMessage(err.message)
    //    })
    }
// verify account
    const verify_user = async (otp) => {
        setServerMessage("Email has been verified please login")
        router.push('/')
        // try{
        //    setIsLoading(true)
        //    let response = await fetch(`${BASE_URL}/verifyaccount`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //       },
        //     body: JSON.stringify({
                
        //         token: otp,
               
               
        //    })
        // })
        
        // setServerMessage('Email Verified Please Login')
        
        //     router.push(`/`)
       
        
        // }catch(error){
        //     console.log(error.message)
        //     setServerMessage("Error verifiying token") 
        //    setIsLoading(false) 
           
        // }
    }

    const sign_in = async (email, password) =>{

       try{
        setIsLoading(true)
            let response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    
                    password: password,
                    email:email, 
                   
               })
            })
            
            const result = await response.json()
            // console.log(result)
           
            localStorage.setItem('token', result.token)
        
            setUser(result.data)
           localStorage.setItem('userinfo', JSON.stringify(result.data))
        
            localStorage.setItem('firstname', result.data.firstname )
            localStorage.setItem('lastname',result.data.lastname)
            localStorage.setItem('userID', result.data.userID)
    
            
            const firstname = localStorage.getItem('firstname')
            const lastname = localStorage.getItem('lastname')
            
            setServerMessage(result.message)
            router.push(`/${firstname}_${lastname}`)
       } catch(err){
           setServerMessage('error signing in')
        
        setIsLoading(false)
        setServerMessage(err.message) 
       }
    }

    const get_user = ()=>{
        // console 
        const userID = localStorage.getItem('userID')
        const token = localStorage.getItem('token')
        
        fetch(`${USER_URL}/${userID}/`, {
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
            setUser([...result.result])
           
        })
        .catch(error => {
            console.log(error.message)
            setServerMessage('')
    })
}
const delete_user = ()=>{
    const userID = localStorage.getItem('userID')
    const token = localStorage.getItem('token')
    
    fetch(`${USER_URL}/${userID}/`, {
        method: 'DELETE',
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
           // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    })
    .then(response=>response.json())
    .then(result => {
       setServerMessage("user deleted")
    })
    .catch(error => {
        setServerMessage("user deleted")
})
}

const update_user = (profileimage, address,email, contact, occupation, password) =>{
    const userID = localStorage.getItem('userID')
    const token = localStorage.getItem('token')
    
    fetch(`${USER_URL}/${userID}/`, {
        method: 'PUT',
        // mode: "no-cors",
        headers: {
            // 'Content-Type': 'application/json',
            'Content-Type':'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: {
            email: email,
            profileimage: profileimage,
            address:address, 
            contact: contact,
            occupation: occupation,
            password: password
        }
    })
    // .then(response => response.json())
    .then((result)=>{
        setServerMessage("user profile updated")
        console.log(result.result)
        console.log("user profile updated")
    })
    .catch(error => {
        console.log(error.message)
        setServerMessage('error updating user profile, please try again')
    })
}



  

    const value = {
        user,
        sign_in,
        sign_up,
        serverMessage,
       isLoading,
        verify_user,
        setIsLoading,
        setServerMessage,
        get_user,
        update_user,
        delete_user
        // delete_user,
    }

    return (
        <>
            <AuthContext.Provider value={value}>
               {children}
            </AuthContext.Provider>
        </>
    )
}