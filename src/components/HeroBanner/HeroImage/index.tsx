import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/images/heroImage.png'
import SvgPattern from '../../../../public/svg/SvgPattern.svg'
const HeroImage = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-[#3E434A] h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-tr-[50%] rounded-tl-[50%] p-4  relative z-10">
        <Image
          src={heroImage}
          className="h-[300px] md:h-[400px] lg:h-[500px] object-fit absolute rounded-tr-[50%] rounded-tl-[50%] shadow-[0px_15px_10px_-13px_#000] z-10"
          style={{
            width: 'calc(100% - 2rem)',
          }}
          alt=""
        />
        <Image
          src={SvgPattern}
          alt=""
          width={250}
          className="absolute top-[-30px] right-[-100px] "
        />
      </div>
    </div>
  )
}

export default HeroImage
