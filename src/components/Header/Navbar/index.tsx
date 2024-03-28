import React from 'react'
import SvgPintrest from '../../../../public/svg/SvgPintrest.svg'
import SvgInsta from '../../../../public/svg/SvgInsta.svg'
import SvgFb from '../../../../public/svg/SvgFb.svg'
import SvgTwiter from '../../../../public/svg/SvgTwiter.svg'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="w-full bg-primary  border-y border-[#5C6168]">
      <div
        id="navBar"
        className="flex justify-between items-center py-4 container"
      >
        <div className=" overflow-x-visible	">
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
        </div>
        <div className="flex space-x-4">
          <Image src={SvgInsta} alt="" width={20} />
          <Image src={SvgFb} alt="" width={20} />
          <Image src={SvgTwiter} alt="" width={20} />
          <Image src={SvgPintrest} alt="" width={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
