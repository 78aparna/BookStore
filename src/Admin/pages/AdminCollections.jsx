import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
function AdminCollections() {
  const [tab,setTab]= useState(1)
  return (
    <>
    <AdminHeader/> 
     <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="my-5 text-center text-3xl font-bold">All Collections</h1>
        {/* tabs */}
        <div className="flex my-10 justify-center items-center">
          <p onClick={()=>setTab(1)} className={tab==1?"font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer"
            :
            "border-b font-bold border-gray-200 text-xl p-3"}>Book</p>
       
          <p onClick={()=>setTab(2)} className={tab==2?"font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer"
            :
            "border-b font-bold border-gray-200 text-xl p-3"}>User</p>
          
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'300px'}  height={'300px'} src="https://tse1.mm.bing.net/th/id/OIP.30w2UTuJi3O0cM-gEX-a0QHaK-?pid=Api&P=0&h=180" alt="book" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-vold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$Price</h4>
              <div className="grid mt-3 w-full">
                <button className="bg-green-600 text-white p-2">Approve</button>
              </div>
            </div>
            </div>
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'300px'}  height={'300px'} src="https://tse1.mm.bing.net/th/id/OIP.30w2UTuJi3O0cM-gEX-a0QHaK-?pid=Api&P=0&h=180" alt="book" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-vold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$Price</h4>
              <div className="grid mt-3 w-full">
                <button className="bg-green-600 text-white p-2">Approve</button>
              </div>
            </div>
            </div>
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'300px'}  height={'300px'} src="https://tse1.mm.bing.net/th/id/OIP.30w2UTuJi3O0cM-gEX-a0QHaK-?pid=Api&P=0&h=180" alt="book" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-vold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$Price</h4>
              <div className="grid mt-3 w-full">
                <button className="bg-green-600 text-white p-2">Approve</button>
              </div>
            </div>
            </div>
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'300px'}  height={'300px'} src="https://tse1.mm.bing.net/th/id/OIP.30w2UTuJi3O0cM-gEX-a0QHaK-?pid=Api&P=0&h=180" alt="book" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-vold text-lg">Author</h3>
              <h4 className="text-lg">title</h4>
              <h4>$Price</h4>
              <div className="grid mt-3 w-full">
                <button className="bg-green-600 text-white p-2">Approve</button>
              </div>
            </div>
            </div>
          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate user cards */}
            <div className="rounded bg-gray-200 p-1 text-wrap">
              <p className="text-red-600 font-bold">ID : gvjjie5678</p>
              <div className="flex text-wrap mt-2">
                {/* user imge */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="user" />
                 {/* content */}
                 <div className="ms-5">
                  <h4 className="font-bold text-2xl text-blue-600">name</h4>
                  <p>demo@gmail.com</p>
                 </div>
              </div>
            </div>
          </div>
        }
        </div>
      </div>
    
     <Footer/>
     </>
  )
}

export default AdminCollections
