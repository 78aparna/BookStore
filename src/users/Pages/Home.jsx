import React, { useContext, useEffect, useState } from 'react'
import Header from'../components/Header'
import Footer from"../../components/Footer"
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { BiBorderRadius } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'
import { getHomePageBookAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'

function Home() {
  const navigate = useNavigate()
  //const [searchKey,setSearchKey] = useState("")
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [homeBooks,setHomeBooks] = useState([])
 
  console.log(homeBooks);
  useEffect(()=>{
    getHomeBooks()
  },[])
  
  const getHomeBooks = async ()=>{
    const result = await getHomePageBookAPI()
    if(result.status==200){
      setHomeBooks(result.data)
    }else{
      console.log(result);
      
    }
  }



  const handleSearch = ()=>{
      if(!searchKey){
        toast.warning("Please provide a book title here!!!!")
      }else if(!sessionStorage.getItem("token")){
        toast.warning("Please login to search book!!!!")
        setTimeout(()=>{
          navigate('/login')
        },2500)
      }else if(sessionStorage.getItem("token") && searchKey){
        navigate('/books')
      }else{
       toast.error("Something went wrong!!!")
      }
  }
  return (
    <>
      <Header/>
      <div>
      {/* landing part - search */}
      <div style={{height:'500px'}} 
      className="flex justify-center items-center flex-col bg-[url(/bg.jpg)] bg-cover bg-center text-white">
        <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5)'}}
        className='w-full flex justify-center items-center flex-col'>
          <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
           {/* search */}
           <div className='mt-9 flex-items-center'>
            <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here'/>
            <button onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch/></button>
           </div>
        </div>
      </div>
      {/* new arrival */}
      <section className="md:px-40 p-5 my-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h2 className='text-2xl'>Explore Our Latest Collections</h2>
        {/* books row and col */}
        <div className="md:grid grid-cols-4 w-full mt-10">
          {/* duplicate book card div */}
          {
            homeBooks?.length>0?
            homeBooks.map(book=>(
              <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
            <img width={'250px'}  height={'250px'} src={book?.imageURL} alt="book" />
            <div className="flex justify-center items-center flex-col mt-4">
              <h3 className="text-blue-600 font-vold text-lg">{book?.author} </h3>
              <h4 className="text-lg">{book?.title} </h4>
              <h4>{book?.discountPrice} </h4>
            </div>
            </div>
            ))
            :
            <p className="font-bold">Loading.....</p>
          }
           

        </div>
        {/* all books link */}
        <div className="text-center mt-20">
          <Link to={'/books'} className="p-3 bg-black text-white">Explore More....</Link>
        </div>
      </section>
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
        {/* author content */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Featured Authors</h1>
        <h2 className='text-xl'>Captivates with every word</h2>
         <p className='text-justify mt-9'>Romi Neustadt is a multifaceted professional—an entrepreneur, best-selling author, speaker, coach, wife, and mother of two. She transitioned from careers in law and public relations to build a successful direct sales business, empowering women to design fulfilling lives. Her mission centers on helping others achieve their personal and professional goals.

Her “Meet Romi” page offers a personal narrative, sharing her journey from corporate life to entrepreneurship. It highlights her family, passions, and commitment to guiding women toward their aspirations. The page includes sections about her background, professional achievements, and personal philosophy, providing a comprehensive view of who she is and what she stands for.

</p>
        </div>
        {/* author image */}
        <div className="p-5 flex justify-center items-center">
          <img className='w-full' src="https://www.babelio.com/users/AVT_Freida-McFadden_9897.jpg" alt="Author" />
        </div>
      </section>
      {/* testimonials */}
      <section className="md:px-40 p-5 my-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h2 className='text-2xl'>See what others are saying</h2>
        <div className="my-5 flex justify-center items-center flex-col">
          {/* user image */}
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="user" />
          <p className='mt-5'>lucas aleaxander</p>
          <p className="text-justify mt-4"><span className="font-bold mt-2">Amazing collection and easy navigation</span>
          An extremely powerful story of a young Southern Negro, from his late high school days through three years of college to his life in Harlem.
His early training prepared him for a life of humility before white men, but through injustices- large and small, he came to realize that he was an "invisible man".</p>
        </div>
       </section>
      </div>
      <Footer/>
      {/* toast */}
            <ToastContainer position="top-center" autoClose={3000} theme="colored"/>
        
    </>
  )
}

export default Home
