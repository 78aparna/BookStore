import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen } from 'react-icons/fa'
function AdminProfile() {
  return (
    <>
      <AdminHeader/> 
     <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
          {/* text */}
          <div>
            <p className='text-xl font-bold mb-5'>Welcome to the Bookstore Admin Settings Panel.</p>
Manage your bookstore operations, users, inventory, and system preferences from one place.

<p className="font-bold mb-2 mt-5">👤 Account Settings</p>
        <ul>
       <li>Profile information : Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi exercitationem doloremque nobis nemo iure</li>
      <li>login credentials : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sit eius perferendis officia placeat suscipit vero</li>
       <li>Activity logs : Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta placeat delectus libero esse rerum explicabo in sit</li>
        </ul>
          </div>
          {/* form */}
           <div className="flex justify-center items-center flex-col mb-5 mt-1 bg-blue-100 p-5 rounded">
            {/* image */}
            
              <label htmlFor="uploadImg">
                <input type="file" id='uploadImg' hidden/>
                <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="profile" />
              </label>
              <button style={{marginTop:'-25px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
            
              
            
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className='bg-white p-2 rounded w-full'/>
            </div>
            
            {/* password */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className='bg-white p-2 rounded w-full'/>
            </div>
            {/* confirm pswd */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='confirm Password' className='bg-white p-2 rounded w-full'/>
            </div>
            
            {/* button */}
            <div className="mb-3 flex justify-end px-5 w-full mt-5">
              <button className="px-3 py-2 rounded border bg-red-600 text-white hover:bg-white
              hover:border-red-600 hover:text-red-600">RESET</button>
              <button className="px-3 py-2 rounded border bg-green-600 text-white hover:bg-white
              hover:border-green-600 hover:text-green-600 ms-5">Update</button>
            
            </div>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default AdminProfile
