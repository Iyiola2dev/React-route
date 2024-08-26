import { useContext } from 'react'

import ThemeContext from '../contexts/ThemeContext'


const Home = () => {
  const {darkMode}= useContext(ThemeContext)
  return (
    <div className={`${darkMode ? "bg-slate-500":"bg-slate-100" } h-screen p-20`}>
       
        <h1>Home</h1>
    </div>
  )
}

export default Home