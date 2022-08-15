 import React from 'react'
 
 const Hero = () => {
   return (
     <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'> <span className='text-orange-500'>Foods </span>Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
     </div>
   )
 }
 
 export default Hero