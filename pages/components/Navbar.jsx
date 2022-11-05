import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#757575')
  const [linkColor, setLinkColor] = useState('#000000')
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/about'
    ){
      setNavBg('transparent')
      setLinkColor('#000000')
    }else{
      setNavBg('#757575')
      setLinkColor('#000000')
    }
  },[router])

  useEffect(()=>{
    const scrollShadow = () =>{
      if (window.scrollY >= 90){
        setShadow(true)
      } else{
        setShadow(false)
      }
    };
    window.addEventListener('scroll', scrollShadow)
  },[])
  return (
    <div style={{backgroundColor: `${navBg}`}}
     className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/#home'>
          <Image src="/../public/assets/SL (2).png" alt="/" width='105' height='105' />
          </Link>
            <div>
              <h1 className='text-black text-center font-thin'>Welcome!</h1>
            </div>
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href='/#home'>
                      <li className='ml-10 text-sm uppercase hover:border-b text-black'>Home</li>
                    </Link>
                    <Link href='/#about'>
                      <li className='ml-10 text-sm uppercase hover:border-b text-black'>About</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar