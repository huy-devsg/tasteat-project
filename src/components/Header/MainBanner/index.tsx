import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import SvgLogo from '../../../../public/svg/SvgLogo.svg'
import SvgCart from '../../../../public/svg/SvgCart.svg'

const MainBanner = () => {
  return (
    <div className="hidden md:block w-full bg-primary">
      <div
        id="mainBanner"
        className="px-10 md:px-20 flex justify-center md:justify-between items-center py-8"
      >
        <Button variant="outline hidden md:block">Call - 987 654 321</Button>
        <div className="">
          <Image src={SvgLogo} alt="" width={250} />
        </div>
        <div className=" hidden md:block">
          <div className="flex">
            <Image className="mr-6" src={SvgCart} alt="" width={25} />
            <Button variant="primary">Reservation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
