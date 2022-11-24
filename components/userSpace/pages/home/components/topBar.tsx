import { FunctionComponent } from 'react'
import Selection from '../../../components/selection'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { streams, streams_2, streams_3 } from '../../../../shared/const/streams'

const TopBar: FunctionComponent = () => {
  return (
    <div className="-z-50">
      <div className="pt-4">
        <p className="text-center text-black/50 text-2xl  py-6 dark:text-gray-100/50">
          Sur nos chaines actuellement...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={streams.length}
              isPlaying
              infinite
              className=""
              key={'01'}
            >
              <div className="h-[260px] md:h-[450px]">
                <Slider>
                  <div className="flex items-center justify-center">
                    {streams.map((item, index) => (
                      <Slide key={index} index={index}>
                        <Selection
                          key={index}
                          bg_image={item.bg_image}
                          title={item.title}
                        />
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
            </CarouselProvider>
          </div>

          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={streams_2.length}
              isPlaying
              infinite
              className=""
              key={'02'}
            >
              <div className="h-[260px] md:h-[450px]">
                <Slider>
                  <div className="flex items-center justify-center">
                    {streams_2.map((item, index) => (
                      <Slide key={index} index={index}>
                        <Selection
                          key={index}
                          bg_image={item.bg_image}
                          title={item.title}
                        />
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
            </CarouselProvider>
          </div>

          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={streams_3.length}
              isPlaying
              infinite
              className=""
              key={'03'}
            >
              <div className="h-[260px] md:h-[450px]">
                <Slider>
                  <div className="flex items-center justify-center">
                    {streams_3.map((item, index) => (
                      <Slide key={index} index={index}>
                        <Selection
                          key={index}
                          bg_image={item.bg_image}
                          title={item.title}
                        />
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
