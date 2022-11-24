import React, { useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function SmallCarousel({ children }) {
  return (
    <CarouselProvider
      className="block md:hidden "
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={12}
      visibleSlides={1}
      step={1}
      infinite={true}
    >
      <div className="w-full relative flex items-center justify-center">
        <ButtonBack
          role="button"
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
          id="prev"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonBack>
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <Slider>
            <div
              id="slider"
              className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
            >
              {children}
            </div>
          </Slider>
        </div>
        <ButtonNext
          role="button"
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          id="next"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  )
}
