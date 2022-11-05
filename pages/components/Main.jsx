import React from 'react'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-centre'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-lg tracking-widest text-black'>Hello, and welcome to my portfolio</p>
                <h1 className='py-5 text-zinc-900'>I'm <span className='text-white'>Sharfaraaz</span>
                  <p className=' text-base'>
                    But you can call me Shafa.
                  </p>
                </h1>
                <p className='py-5 text-black max-w-[70%] m-auto text-lg'>
                  I have taken a software development course through IT Academy and hoping to join the <span className=' text-blue-400 font-bold'>SOVtech Graduate Programme</span> as a Software Developer/Engineer.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main