import React, {useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import Purchase from '../components/Purchase'
import BookStatus from '../components/BookStatus'
import SellBook from '../components/SellBook'
function Profile() {
  const [tab,setTab] = useState(1)
  const [dp,setDp] = useState("")
  const [username,setUsername] = useState("")
  console.log(dp);
  console.log(username);

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user?.username)
      setDp(user?.picture)
    }
},[]);
  
  
  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"></div>
    {/* profile image */}
    <div style={{width:'200px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white">
          <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={dp? dp:"https://www.babelio.com/users/AVT_Freida-McFadden_9897.jpg"} alt="profile" />
    </div>
    {/* name with edit block */}
    <div className="md:flex justify-between items-center md:px-20 px-5 my-5">
      <h1 className="text-2xl font-bold flex items-center mx-5 md:mx-20">{username}<FaCircleCheck className='text-blue-400 ms-5'/> </h1>
      <Edit/>
    </div>
    <p className='text-justify md:px-20 px-5 my-5'>
      Hello, I’m [Name], a passionate reader and lifelong learner.
I enjoy fiction, self-development, and history books. This bookstore helps me organize my reading journey, follow my favorite authors, and receive recommendations based on what I love. I believe every book brings a new perspective, and I'm here to explore them all.
    </p>
    {/* tabs with contents */}
    <div className="md:px-40">
      {/* tabs */}
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 border-gray-200 border-t border border-r p-4 cursor-pointer":
          " border-gray-200 border-b p-4 cursor-pointer"
        }>Sell Books</p>
        <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 border-gray-200 border-t border border-r p-4 cursor-pointer":
          " border-gray-200 border-b p-4 cursor-pointer"
        }>Book Status</p>
        <p onClick={()=>setTab(3)} className={tab==3?"text-blue-600 border-gray-200 border-t border border-r p-4 cursor-pointer":
          " border-gray-200 border-b p-4 cursor-pointer"
        }>Purchase History</p>
        
      </div>
      {/* contents */}
      {
        tab==1 &&
      <SellBook/>
      }
      {tab==2 &&
      <BookStatus/>
}
{tab==3 &&
      <Purchase/>
}
    </div>
    <Footer/>
      
    </>
  )
}

export default Profile
