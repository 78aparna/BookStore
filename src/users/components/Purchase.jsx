import React from 'react'

function Purchase() {
  return (
    <div>
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
            {/* purchase */}
            <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="pending" />
            
           </div>
        </div>
        <div>
          <img className='w-50' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg" alt="book" />
          </div>
        
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Purchase
