import Button from '@/components/Button'
import React from 'react'

const HeroIntro = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-[50px] md:text-[60px] lg:text-[100px] leading-none	 font-bold text-white titleIntro">
        Welcome to Restaurantate
      </h1>
      <p className="py-6">
        {`Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy .`}
      </p>
      <Button variant="outline">View Menu</Button>
    </div>
  )
}

export default HeroIntro
