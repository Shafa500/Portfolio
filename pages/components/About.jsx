import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-5'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-black'>About</p>
                <h2 className='py-4'>Get To Know Me</h2>
                <p>I have just finished my software development course through IT Academy and wish to join SOVtech for the graduate programme. I see this opportunity as a way to further my skills as a sofware developer and i think SOVtech with its exciting environment and forward thinking I can accomplish that. Afterwards I hope to join SOVtech permanently as I would like to stick to one company for as long as possible.</p><br/>
                <p>I previously worked in the restuarant industry for quite some time. I started out as a waiter at the age of 14, which was fun for the few months I spent there. I learnt many things like learning how to manage my time working in a fast-paced environment as well as making sure the customers have a good expeience.</p><br/>
                <p>A few years later, back in 2019, after I finished High School, I began managing a small takeout and gained leadership experience as well as customer service experience. After that I finally decided to pursue my dream of becoming a software developer.</p>
            </div>
            <div>
                <img src='https://ltvplus.wpenginepowered.com/wp-content/uploads/2019/06/Good-Customer-Service-featured.png'/>
            </div>
        </div>
    </div>
  )
}

export default About