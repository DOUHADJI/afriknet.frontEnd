import React, { useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import DesktopCarousel from './desktopCarousel'
import MediumCarousel from './mediumCarousel'
import SmallCarousel from './smallCarousel'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <DesktopCarousel></DesktopCarousel>

        {/* Carousel for tablet and medium size devices */}
        <MediumCarousel></MediumCarousel>

        {/* Carousel for mobile and Small size Devices */}
        <SmallCarousel></SmallCarousel>
      </div>
    </div>
  )
}
