import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvasStatus,setOffCanvasStatus] = useState(false)
  return (
    <div>
      <button onClick={()=>setOffCanvasStatus(true)} className="flex flex-center text-blue-600 border p-2 rounded hover:text-white 
      hover:bg-blue-600"> Edit<FaEdit className='ms-3'/></button>
      {/* offcanvas */}
      {
        offCanvasStatus &&
      <div>
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        </div>
        <div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
          {/* header */}
          <div className="bg-black p-3 flex justify-between text-white">
            <h3 className="text-xl">Update Profile</h3>
            <button onClick={()=>setOffCanvasStatus(false)}><FaX/></button>
         </div>
          {/* body */}
          <div className="flex justify-center items-center flex-col mb-5 mt-10">
            {/* image */}
            
              <label htmlFor="uploadImg">
                <input type="file" id='uploadImg' hidden/>
                <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://www.babelio.com/users/AVT_Freida-McFadden_9897.jpg" alt="profile" />
              </label>
              <button style={{marginTop:'-25px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
                          
              
            
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full'/>
            </div>
            
            {/* password */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className='border border-gray-200 p-2 rounded w-full'/>
            </div>
            {/* confirm pswd */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='confirm Password' className='border border-gray-200 p-2 rounded w-full'/>
            </div>
            {/* bio */}
            <div className="mb-3 w-full px-5">
              <textarea type="text" placeholder='Bio' rows={3} className='border border-gray-200 p-2 rounded w-full'/>
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
}
    </div>
  )
}

export default Edit
