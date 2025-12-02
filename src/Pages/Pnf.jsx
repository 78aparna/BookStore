import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
      <img width={'55%'} src="https://i.pinimg.com/originals/fe/df/71/fedf7125acf620e856b6d09ef44eee51.gif" alt="pnf" />
      <h1 className="text-blue-600 text-2xl">Look like you'r lost!!!!</h1>
      <p>The page youre Searching is not available</p>
      <Link to={'/'} className='bg-blue-600 py-2 px-3 rounded my-3 text-white'>Home</Link>
      
    </div>
  )
}

export default Pnf
