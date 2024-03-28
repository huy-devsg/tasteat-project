'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SvgPintrest from '../../../../public/svg/SvgPintrest.svg'
import SvgInsta from '../../../../public/svg/SvgInsta.svg'
import SvgFb from '../../../../public/svg/SvgFb.svg'
import SvgTwiter from '../../../../public/svg/SvgTwiter.svg'
import SvgLogo from '../../../../public/svg/SvgLogo.svg'
import Image from 'next/image'

// import Image from 'next/image'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-primary w-full">
      <div className="w-full bg-primary  md:border-y md:border-[#5C6168]">
        <div id="navBar" className="hidden md:block ">
          <div className="px-10 md:px-20 flex justify-between items-center py-4 overflow-x-visible	">
            <ul className="flex space-x-8">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Menu</Link>
              </li>
              <li>
                <Link href="#">Reservation</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <Image src={SvgInsta} alt="" width={20} />
              <Image src={SvgFb} alt="" width={20} />
              <Image src={SvgTwiter} alt="" width={20} />
              <Image src={SvgPintrest} alt="" width={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between px-10 md:px-20 py-2">
        <div>
          <Image src={SvgLogo} alt="" width={120} />
        </div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden  bg-primary fixed z-50 w-full transition-all ${
            isNavbarVisible ? 'top-20' : '-top-full'
          }`}
        >
          <ul className="p-4">
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-grayPrimary">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-grayPrimary">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-grayPrimary">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-grayPrimary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
