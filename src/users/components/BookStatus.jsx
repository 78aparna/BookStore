import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
      {/* book div duplicate */}
    <div className="bg-gray-200 p-5 rounded">
      <div className="md:grid grid-cols-[3fr_1fr]">
        <div>
          <h2 className="text-2xl">Title</h2>
          <h3 className="text-xl">Author</h3>
           <h4 className="text-lg text-red-500">$ 400</h4>
           <p className='flex mt-5'>Abstract</p>
           <div className="flex mt-5">
            {/* pending */}
            <img width={'120px'} height={'120px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
            {/* approved */}
            <img width={'100px'} height={'100px'} src="http://www.pngall.com/wp-content/uploads/2/Approved-Stamp.png" alt="pending" />
           
            {/* sold */}
            <img width={'90px'} height={'90px'} src="https://png.pngtree.com/png-clipart/20230421/original/pngtree-sold-labels-png-image_9072960.png" alt="pending" />
           
           </div>
        </div>
        <div>
          <img className='w-50' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" alt="book" />
         <div className="flex justify-end"><button className="p-2 bg-red-600 text-white mt-5">DELETE</button></div>
        </div>
        
      </div>
      
    </div>
    </div>
  )
}

export default BookStatus
