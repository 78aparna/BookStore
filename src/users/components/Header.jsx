import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaAddressCard, FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
function Header() {
  const [listStatus,setListStatus] = useState(false)
  const[dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const[dropDown,setDropDown] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

  const menuBtnClick=()=>{
       setListStatus(!listStatus)
  }

  const logout =()=>{
    sessionStorage.clear()
    setToken("")
    setDp("")
    setDropDown(false)
    setListStatus(false)
    navigate('/')
  }
  return (
    <>
    {/* {header upper part -title and login} */}
      <div className='grid grid-cols-3 p-3'>
        {/* {logo with title} */}
        <div className="flex items-center">
          <img width={'70px'} height={'70px'} src="https://www.freeiconspng.com/uploads/books-icon--circle-iconset--martz90-18.png"
           alt="logo" />
           <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>

        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/* login */}
        <div className="md:flex justify-end items-center hidden">
          {/* insta,facebook,twitter */}
          <FaInstagram/>
          <FaFacebook className='mx-2'/>
          <FaXTwitter/>
          {
            !token?
            <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black
           hover:text-white flex items-center'><FaUser className='me-1'/>login</Link>
         :
         <div className="relative inline-block text-left ms-2">
          <button onClick={()=>setDropDown(!dropDown)}className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
            <img width={'40px'} height={`40px`} style={{borderRadius:'50%'}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/a/ACg8ocJO34idjXffcpVma0UPmtKz_IyrMCA5mkIa77H8uFH2RT_Obw=s96-c")?dp:`${serverURL}/uploads/${dp}`:"https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"} alt="profile picture" />
          </button>
          {
            dropDown &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right
            ring-1 ring-black/5 focus:outline-hidden">
              <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
              <FaAddressCard className='me-2'/>Profile</Link>
              <button onClick={logout}  className="px-4 py-2 text-sm text-gray-700 flex items-center"><FaPowerOff className='me-2'/>Logout</button>
            </div>
          }
         </div>

          } 
          </div>

      </div>
      {/*header lower part - links and menu+login btn*/}
      <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
        {/* div menu bar and login btn */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          {/* menu bar btn */}
          <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
          {/* login link */}
          {
            !token?
            <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black
           hover:text-white flex items-center'><FaUser className='me-1'/>login</Link>
         :
         <div className="relative inline-block text-left ms-2">
          <button onClick={()=>setDropDown(!dropDown)}className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
            <img width={'40px'} height={`40px`} style={{borderRadius:'50%'}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/a/ACg8ocJO34idjXffcpVma0UPmtKz_IyrMCA5mkIa77H8uFH2RT_Obw=s96-c")?dp:`${serverURL}/uploads/${dp}`:"https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"} alt="profile picture" />
          </button>
          {
            dropDown &&
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right
            ring-1 ring-black/5 focus:outline-hidden">
              <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'>
              <FaAddressCard className='me-2'/>Profile</Link>
              <button onClick={logout}   className="px-4 py-2 text-sm text-gray-700 flex items-center"><FaPowerOff className='me-2'/>Logout</button>
            </div>
          }
         </div>

          } 
        </div>
        {/* ul links */}
        <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
          <li  className='md:mx-4 my-3 md:my-0'><Link to={'/books'}>BOOKS</Link></li>
          <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACTS</Link></li>
        </ul>
        </nav>
    </>
  )
}

export default Header
