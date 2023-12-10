import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  GlobeAltIcon,
  CursorArrowRaysIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingCartIcon,
  
} from '@heroicons/react/24/outline'
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import Lottie from "lottie-react";





































import wel from './WEL.json'




const products = [
  
  { name: 'Shopping Site', description: 'Explore my clothing store.', href: 'https://vivekbeast.github.io/vt-5/index.html', icon: ShoppingCartIcon },
  { name: 'Directionless Science', description: 'The greatest project & content.', href: 'https://vivekbeast.github.io/Dscience/', icon: CursorArrowRaysIcon },
  { name: 'Weather App', description: 'Using API, this site shows weather details.', href: 'https://vivekbeast.github.io/Weather-QuoteAPP/', icon: GlobeAltIcon },
  { name: 'Integrations', description: 'All-in-one WeBPAGE of all my projects.', href: 'https://vivekbeast.github.io/UP2/', icon: SquaresPlusIcon },
  { name: 'My First Webpage', description: "Let's time-travel back.", href: 'https://vivekbeast.github.io/Project4/', icon: ArrowPathIcon },


]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header  className=" bg-inherit fixed top-0 w-full shadow-lg z-10 rounded-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-row lg:flex-1">
        <Lottie className=' h-7 align-top' animationData={wel}></Lottie>
        </div>
        
        <div className="flex lg:hidden">
        
          <button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.6 }}




            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7 rounded-md" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
        
          
          
          <h1 href="#" className="text-sm font-semibold leading-6 text-slate-200">
            Home
          </h1>
          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-200">
              Git Projects
              <ChevronDownIcon className="h-5 w-5 flex-none text-slate-200" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gradient-to-b from-gray-200 via-slate-300 to-gray-200 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>
          <h1 href="#" className="text-sm font-semibold leading-6 text-slate-200">
            Contact
          </h1>
          <h1 href="#" className="text-sm font-semibold leading-6 text-slate-200">
            About
          </h1>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <h1  className="text-sm font-semibold leading-6 text-slate-200">
            Log in <span aria-hidden="true">&rarr;</span>
          </h1>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <h1 href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto rounded-full"
                src={iron}
                alt=""
              /> */}
            </h1>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-slate-100" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50">
                        Git Projects
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="flex rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray hover:bg-gray-50  items-center"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-100 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>{item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <h1
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50"
                >
                  Home
                </h1>
                <h1
                  href="https://github.com/vivekbeast"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50"
                >
                  Contact
                </h1>
                <h1
                  href="https://www.google.com/search?client=firefox-b-d&q=human"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50"
                >
                  About
                </h1>
              </div>
              <div className="py-6">
                <h1 
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-200 hover:bg-gray-50"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </h1>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

