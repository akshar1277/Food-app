import React from 'react'

const Card = (props) => {
  return (
    <>
     {/* card*/}
     <div className='rounded-xl relative'>
     {/*overlay*/}
     <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
     <p className='font-bold text-2xl px-2 pt-4'>{props.text1}</p>
     <p className='px-2'>{props.text2}</p>
     <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
     </div>
     <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={props.url} alt="" />
    </div>
    </>
  )
}

export default Card