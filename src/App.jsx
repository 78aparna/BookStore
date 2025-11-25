import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './users/Pages/Home'
import Book from './users/Pages/Book'
import Contact from './users/Pages/Contact'
import Profile from './users/Pages/Profile'
import View from './users/Pages/View'
import AdminHome from './Admin/pages/AdminHome'
import AdminCollections from './Admin/pages/AdminCollections'
import AdminProfile from './Admin/pages/AdminProfile'
import Auth from './Pages/Auth'
import Pnf from './Pages/Pnf'
import Preloader from './components/Preloader'
import { useState } from 'react'



function App() {
    const [loading,setLoading] = useState(true)

    setTimeout(()=>{
      setLoading(false)
    },7500);

  return (
    <>
      <Routes>
        <Route path='/' element= {loading?<Preloader/>: <Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/books' element={<Book/>}/>

        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/books/:id/view' element={<View/>}/>


        <Route path='/admin/home' element={<AdminHome/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
        <Route path='/admin/resources' element={<AdminCollections/>}/>

        <Route path='/*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App
