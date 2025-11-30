import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
    <div className="md:px-40 p-5">
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <p>We'd love to hear from you!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolore minus fuga labore, obcaecati quisquam repudiandae ipsum totam unde perferendis optio vero error voluptas non, nobis adipisci qui laudantium. Magni.

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quibusdam ullam dignissimos mollitia sapiente doloremque, facere vel totam porro explicabo voluptate. Atque quidem explicabo ex dolorem maxime delectus harum itaque.
        </p>
      </div>
      <div className="md:flex justify-evenly items-center my-10">
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center">
           <FaLocationDot/>
          </div>
          <p>123 main street, apt 4b, anutown, ca 91234</p>
        </div>
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center">
           <FaPhone/>
          </div>
          <p>+91 9873451234</p>
        </div>
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center">
           <FaEnvelope/>
          </div>
          <p>contact@bookst.com</p>
        </div>
        

      </div>
      <div className="md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0">
        {/* form */}
        <div className="bg-gray-200 p-5">
          <h1 className="text-xl text-center">Send me Message</h1>
          <div className="my-3">
            <input placeholder='Name' type="text" className='bg-white p-2 w-full rounded'/>
          </div>
          <div className="my-3">
            <input placeholder='Email' type="text" className='bg-white p-2 w-full rounded'/>
          </div>
          <div className="my-3">
            <input placeholder='Message' type="text" className='bg-white p-2 w-full rounded'/>
          </div>
        </div>
        {/* map */}
        <div className="mt-5 w-full md:mt-0">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.6889139034959!2d76.60747190529609!3d9.53183130941153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08de9277732b95%3A0x6f422cc402a0eaea!2sPuzhikkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704387603795!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default Contact
