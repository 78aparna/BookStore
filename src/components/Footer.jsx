import React from 'react'
import { FaArrowRight, FaFacebook, FaTwitter,FaInstagram,FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-black text-white p-10">
        <div>
          <h4 className="font-bold">ABOUT US</h4>
          <p className='text-justify mt-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis perspiciatis error, distinctio amet aliquam, a rerum libero quo perferendis nam eos! Quaerat laborum voluptas, blanditiis officiis corrupti neque in consectetur!
          </p>
        </div>
        <div>
          <h4 className="font-bold">NEWS LETTER</h4>
          <p className="my-5">Stay updated with our latest trends </p>
          <div className="flex">
            <input type="text" placeholder='Email id here' className='p-2 bg-white placeholder-gray-400 text-black' />
            <button className="p-2 bg-yellow-500"><FaArrowRight/></button>
          </div>
        </div>
        <div className="md:ms-40">
          <h4 className="font-bold">FOLLOW US</h4>
          <p className="my-5">Let us be social</p>
          <div className="flex">
            <FaFacebook/>
            <FaInstagram className='mx-5'/>
            <FaTwitter className='mx-5'/>
            <FaEnvelope/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
