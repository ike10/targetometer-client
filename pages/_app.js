import "tailwindcss/tailwind.css"
import '../styles/globals.css'
import '../styles/app.css'
import {AuthProvider} from '../context/AuthContext'
import { ProjectContextProvider, ProjectProvider } from "../context/ProjectContext"
import { TaskContextProvider, TaskProvider } from "../context/TaskContext"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthProvider>
      <ProjectProvider>
        <TaskProvider>
        <Component {...pageProps} />
        </TaskProvider>
      </ProjectProvider>
    
    </AuthProvider>
    </>
    )
}

export default MyApp
