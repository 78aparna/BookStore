import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
      <div className="my-10 flex justify-center items-center">
        <img width={'100px'} height={'1600px'} style={{borderRadius:'50%'}} 
        src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="user" /></div>
         {/* name */}
         <h1 className="text-xl">name</h1>
         {/* links */}
         <div className="mt-10 flex flex-col justify-center items-center">
          <div className="mb-3">
           <Link to={'/admin/home'} className='flex items-center'><FaHome/>Dashboard</Link>
          </div>
          <div className="mb-3">
           <Link to={'/admin/resources'} className='flex items-center'><FaBookReader/>Resources</Link>
          </div>
          <div className="mb-3">
           <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Settings</Link>
          </div>
         </div>

      

    </div>
  )
}

export default AdminSideBar
