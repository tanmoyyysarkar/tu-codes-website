'use client'
import React from 'react'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className="bg-sky-50 border-0 border-white funnel-font">
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            {/*<Image src={FooterImage} alt='TU-CODE LOGO'/>*/}
            
            <h1 className='shiny-gradient-text font-bold text-8xl footer-font'>TU CODEs</h1>
            <p className='text-gray-700 mb-4 lexend-font'>
              TU-CODEs Club at Tezpur University is a community of students and developers who are interested in coding, problem-solving, and building technology-driven solutions.
            </p>
            <div className='flex gap-4'>
              <Link href={`https://www.linkedin.com`}><Linkedin color='gray'/></Link>
              <Link href={`https://www.instagram.com/codes_tu/`}><Instagram color='gray'/></Link>
            </div>
          </div>
          <div className='md:mx-auto'>
            <h3 className="font-bold text-gray-700 mb-4">Quick Links</h3>
            <ol>
              <li>
                  <Link href="/" className="text-gray-900 hover:text-slate-900 transition-colors px-2 text-lg">
                    Home
                  </Link>
                </li>
              <li>
                  <Link href="/about" className="text-gray-900 hover:text-slate-900 transition-colors px-2 text-lg">
                    About Us
                  </Link>
                </li>
              <li>
                  <Link href="/events" className="text-gray-900 hover:text-slate-900 transition-colors px-2 text-lg">
                    Events
                  </Link>
                </li>
              <li>
                  <Link href="/projects" className="text-gray-900 hover:text-slate-900 transition-colors px-2 text-lg">
                    Projects
                  </Link>
                </li>
            </ol>
          </div>

          <div className='md:mx-auto'>
            <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
            <ol>
              <li className="text-gray-900 hover:text-slate-900 transition-colors px-2 text-lg">Tezpur University, Napaam</li>

              <li className='text-gray-800 hover:text-slate-900 transition-colors px-2 text-lg'>
                Tezpur, Assam - 784028
              </li>
            </ol>
          </div>
        </div>
        <hr className="my-6 border-gray-300"/>
        <div className=''>
          <p className='text-gray-800 text-center weight-499'>&copy; {year} Tezpur University Community Of Developers and Engineers</p>
          
        </div>
  
      </div>
    </div>
  )
}

export default Footer