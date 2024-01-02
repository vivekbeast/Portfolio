import React from 'react';
// import as from './abstract-minimalism-4k-gz.jpg'
// import {motion} from "framer-motion"
import Lottie from "lottie-react";
import hi from './ROBOT.json'
import iron from './IRONMAN.png'
import {motion} from "framer-motion"
import {Popover } from '@headlessui/react'
import {
    ArrowPathIcon,
    GlobeAltIcon,
    CursorArrowRaysIcon,
    SquaresPlusIcon,
    ShoppingCartIcon,
    CurrencyRupeeIcon,
    ShieldCheckIcon
  } from '@heroicons/react/24/outline'
  import { IoLogoCss3 } from "react-icons/io5";
  import { IoLogoHtml5 } from "react-icons/io5";
  import { SiTailwindcss } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact } from "react-icons/fa";








const products = [
  
    { name: 'Shopping Site', description: 'Explore my clothing store.', href: 'https://vivekbeast.github.io/vt-5/index.html', icon: ShoppingCartIcon },
    { name: 'FitnessApp', description: 'Gtime fitness app built using API', href: 'https://vivekbeast.github.io/Fitness_APP/', icon: ShieldCheckIcon },
    { name: 'Expense Tracker', description: 'Vgrow app built with Google Firebase', href: 'https://expense-tracker-374f6.web.app/', icon: CurrencyRupeeIcon },
    { name: 'Directionless Science', description: 'The greatest project & content.', href: 'https://vivekbeast.github.io/Dscience/', icon: CursorArrowRaysIcon },
    { name: 'Weather App', description: 'Using API, this site shows weather details.', href: 'https://vivekbeast.github.io/Weather-QuoteAPP/', icon: GlobeAltIcon },
    { name: 'Integrations', description: 'All-in-one WeBPAGE of all my projects.', href: 'https://vivekbeast.github.io/UP2/', icon: SquaresPlusIcon },
    { name: 'My First Webpage', description: "Let's time-travel back.", href: 'https://vivekbeast.github.io/Project4/', icon: ArrowPathIcon },
    
  
  
]

export default function Land(){
    return(
        <div className=' bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 static'>
          
            <section className='h-screen flex flex-col justify-center items-center '>
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}  
                // -m-1.5 p-1.5
             className=" justify-center text-center -m-.5 p-2.5 mx-auto max-w-lg ">
<h1 className="text-3xl font-bold bg-gradient-to-r from-green-300 via-yellow-300 to-pink-400 p-4 rounded-md text-transparent bg-clip-text">
          knowlEDGE is the EDGE of Universe
        </h1>          
          </motion.div>
            {/* <Lottie className=' justify-center' animationData={hi}></Lottie> */}
            <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.6 }}  
                  
             className="-m-1.5 p-1.5">
            <img className="w-auto h-48 rounded-full" src={iron} alt="" />
            
          </motion.div>
          <motion.div  
            
            
            initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -300, opacity: 0 }}
            
            
            
            className='-m-.5 p-3.5 font-semibold text-xl  text-slate-100'><h1 className=' text-3xl'>Hi, I’m <a href='./' class="underline decoration-emerald-500 decoration-4">Vivek Tarnallya</a></h1><p className=' font-mono text-xl'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p></motion.div>
            {/* <Lottie animationData={iii}></Lottie> */}
            
            </section>
            <section className='h-screen flex flex-col'>
            <div className=' mt-8'>
            <Lottie className=' h-52 align-top' animationData={hi}></Lottie></div>
            <div className=' justify-center text-center -m-.5 p-2.5 mx-auto max-w-lg'>
            <h1 className=' justify-center text-2xl font-sans text-slate-50 text-center -m-.5 p-2.5 '> Projects</h1>
                <Popover>
                <div className="p-2 bg-slate-800 text-left rounded-xl">
                
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-slate-500"
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
                
             </Popover>
            </div>
            </section>
            <section className=' h-screen justify-center flex items-center'>
                <div className='  justify-center text-center -m-.5 p-2.5 mx-auto max-w-lg'>
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