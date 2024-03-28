import React from 'react'

import Image from 'next/image'
import HeroImage from './HeroImage'
import HeroIntro from './HeroIntro'
const HeroBanner = () => {
  return (
    <div className="bg-primary w-full">
      <div className="px-10 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between pt-4">
        <div id="bannerIntro" className="md:w-1/2 py-8">
          <HeroIntro />
        </div>
        <div id="heroImage" className="w-full md:w-1/2">
          <HeroImage />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
