import React from 'react'
import { FaPowerOff } from 'react-icons/fa'


function AdminHeader() {
  return (
    <>
    {/* header upper part */}
      <div className="flex justify-between items-center p-3 md:px-20">
        {/* logo with title */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png"
          alt="logo" />
          <p className='font-bold text-2xl'>BOOKSTORE</p>
        </div>
        {/* logout */}
        <button className="bg-black px-3 py-2 border rounded text-white flex items-center 
        hover:bg-white hover:text-black"><FaPowerOff className='me-2'/>LOG OUT</button>
      </div>
      {/* header lower part */}
      <div className="bg-black p-2"> 
        <p>Welcome, Admin! you'r all set to manage the system.let's get into work!</p>
      
       </div>

    </>
  )
}

export default AdminHeader
