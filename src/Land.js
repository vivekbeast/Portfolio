import React, { useEffect, useRef } from 'react';
// import as from './abstract-minimalism-4k-gz.jpg'
// import {motion} from "framer-motion"
import Lottie from "lottie-react";
import hi from './LottieJSONfiles/ROBOT.json'
import iron from '../src/images/WhatsApp Image 2024-02-11 at 11.09.56_6adf1db8.jpg'
import {motion} from "framer-motion"
import {Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    GlobeAltIcon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
    ShoppingCartIcon,
    CurrencyRupeeIcon,
    ShieldCheckIcon,
    
  } from '@heroicons/react/24/outline'
  import { IoLogoCss3 } from "react-icons/io5";
  import { IoLogoHtml5 } from "react-icons/io5";
  import { SiTailwindcss } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa6";
  import { SiGithub } from "react-icons/si";
import './index.css'
import {  useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const products = [
  
    { name: 'FitnessApp', description: 'Gtime fitness app built using API', href: 'https://vivekbeast.github.io/Fitness_APP/', icon: ShieldCheckIcon },
    { name: 'Expense Tracker', description: 'Vgrow app built with Google Firebase', href: 'https://expense-tracker-374f6.web.app/', icon: CurrencyRupeeIcon },
    { name: 'Shopping Site', description: 'Explore my clothing store.', href: 'https://bhagya-clothing.netlify.app/', icon: ShoppingCartIcon },
    { name: 'Directionless Science', description: 'The greatest project & content.', href: 'https://vivekbeast.github.io/Dscience/', icon: CursorArrowRaysIcon },
    { name: 'Weather App', description: 'Using API, this site shows weather details.', href: 'https://vivekbeast.github.io/Weather-QuoteAPP/', icon: GlobeAltIcon },
    { name: 'Integrations', description: 'All-in-one WeBPAGE of all my projects.', href: 'https://vivekbeast.github.io/UP2/', icon: SquaresPlusIcon },
    { name: 'My First Webpage', description: "Let's time-travel back.", href: 'https://vivekbeast.github.io/Project4/', icon: ArrowPathIcon },
    
  
  
]

export default function Land(){

  let comp = useRef(null);


  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from("#hello", {
        xPercent: "-200",
        duration: 1,
        delay: 0.3
      }).from("#texthello",{
        opacity : 0,
        y: "+=30",
        stagger: 0.5
      }).to("#texthello",{
        opacity : 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5
      }).to("#hello", {
        opacity: 1,
        xPercent: "-200",
        duration: 1,
        delay: 0.3
      }).fromTo("#original", {
        opacity: 0.3,
      }, {
        opacity: 1,
        duration: 0.3
      }, "-=0.3")

      return ()=> ctx.revert()
    })
  },[comp]);

  // const [text] = useTypewriter({
  //   words: ['Frontend Developer'],
  //   loop: false,
  //   delaySpeed: 20000,
  // });

 












    return(
        <div className=' bg-gray-900 static' ref={comp}>
         <div id='hello' className=' justify-center  z-20 bg-gray-900 text-center h-screen w-full self-center flex absolute items-center'>
                <h1 id='texthello' className='texthello text-[80px] text-white'>Hello!!</h1>
              </div>
            <section id='original' className=' h-screen opacity-20 flex flex-col justify-center items-center'>
            
            <div className=" container mx-auto flex justify-center items-center">
  <div className=" flex flex-col md:flex-row items-center md:items-start">
    <div className=" mr-4 mb-4 md:mb-0 p-2 md:p-6 lg:p-6 xl:p-10 rounded-md">
 <div className=' flex gap-1 text-white'><p className=' text-md md:text-lg lg:text-xl xl:text-lg text-white font-medium'>I’m </p><h1 className=' font-bold text-white text-md md:text-lg lg:text-xl xl:text-lg'>Vivek Tarnallya </h1> <p className=' text-md md:text-lg lg:text-xl xl:text-lg'>a Passionate</p></div>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-50 ">
    {/* {text}<Cursor /> */}
    Frontend Developer  🧑🏻‍💻
  </h1>
  <p className="text-md md:text-lg lg:text-xl xl:text-lg hidden md:flex lg:flex text-neutral-200 max-w-[20rem] md:max-w-[25rem] lg:max-w-[30rem] xl:max-w-[35rem] break-words mb-4 md:mb-6 lg:mb-8 xl:mb-10">
     creating vibrant, responsive UIs to enhance user experiences
  </p>

  <div className='flex'>
    <a href='https://www.linkedin.com/in/vivek-tarnallya-981684259' target='_blank'  rel='noopener noreferrer'>
      <FaLinkedin className='mt-2 mr-4 text-[25px] md:text-[26px] lg:text-[30px] text-sky-500 ' />
    </a>
    <a href='https://github.com/vivekbeast' target='_blank' rel='noopener noreferrer'>
      <SiGithub className='mt-2 text-[25px] md:text-[29px] lg:text-[29px]' />
    </a>
  </div>
</div>

    
  </div>
</div>

{/* w-full md:w-auto h-32 md:h-40 lg:h-48 xl:h-56 */}
            </section>
            <section className='h-screen flex flex-col'>
            <div className=' mt-8'>
            <Lottie className=' h-52 align-top' animationData={hi}></Lottie></div>
            <div className=' justify-center text-center -m-.5 p-2.5 mx-auto max-w-lg'>
            <h1 className=' justify-center text-2xl font-sans text-slate-50 text-center -m-.5 p-2.5 '> Projects</h1>
                {/* <Popover> */}
                <div className="p-2 bg-slate-800 text-left rounded-xl ">
                
                  {products.map((item) => (
                    <div
                    key={item.name}
                      className="group relative flex  items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-slate-500"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-slate-100 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-slate-100">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
             {/* </Popover> */}
            </div>
            </section>
            <section className=' h-screen  flex flex-col '>
                <div className='  justify-center text-center -m-.5 p-2.5 mt-[355px] mx-auto max-w-lg'>
                <h1 className=' justify-center text-2xl font-sans text-slate-50 text-center -m-.5 p-2.5'>What i Know...</h1>
                <div className="flex flex-wrap justify-center gap-4 bg-slate-800 p-5 rounded-md">
  <div className=" w-24 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>React</h1>
    <FaReact />
  </div>
  <div className=" w-26 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>Javascript</h1>
    <IoLogoJavascript/>
  </div>
  <div className=" w-26 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>Tailwind</h1>
    <SiTailwindcss />
  </div>
  <div className=" w-22 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>HTML</h1>
    <IoLogoHtml5 />
  </div>
  <div className=" w-22 text-center bg-gray-200 p-4 rounded-md flex flex-row align-center justify-center">
    <h1>CSS</h1>
    <IoLogoCss3 />
  </div>
  
</div>

                </div>
            </section>
        </div>

    )
}