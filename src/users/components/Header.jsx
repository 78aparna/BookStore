import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus,setListStatus] = useState(false)

  const menuBtnClick=()=>{
       setListStatus(!listStatus)
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
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black
           hover:text-white flex items-center'><FaUser className='me-1'/>login</Link>
        </div>

      </div>
      {/*header lower part - links and menu+login btn*/}
      <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center">
        {/* div menu bar and login btn */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          {/* menu bar btn */}
          <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
          {/* login link */}
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-white
           hover:text-black flex items-center'><FaUser className='me-1'/>login</Link>
       
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
