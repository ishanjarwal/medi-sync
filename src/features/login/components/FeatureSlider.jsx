"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import { FaStar } from "react-icons/fa6";



const data = [1, 2, 3, 4, 5];
const sliderOptions = {
    spaceBetween: 8,
    slidesPerView: 3,
    allowTouchMove: 1,
    direction: "vertical",
    centeredSlides: 1,
    autoplay: {
        delay: 2000
    },
    modules: [Autoplay],
    loop: 1,
    initialSlide: 1
}

const FeatureSlider = () => {
    return (
        <div id="login_features_container" className="w-full h-full py-16">
            <Swiper {...sliderOptions} className="h-full">
                {data.map((el, idx) => (
                    <SwiperSlide>
                        <div className="relative h-full w-full rounded-xl shadow-xl bg-white/80 dark:bg-black/80" >
                            <div className="p-6">
                                <div className="flex justify-start items-start gap-x-4">
                                    <div>
                                        <span className="block w-16 h-16 overflow-hidden rounded-full shadow-sm bg-card">

                                        </span>
                                        <p className="mt-2 font-bold dark:text-white">John Doe</p>
                                        <p className="text-sm text-gray-700 dark:text-white">Designation</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center gap-x-2 w-max">
                                            {Array.from({ length: 4 }).map((el, idx) => (
                                                <span className="text-lg text-primary">
                                                    <FaStar />
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-2 font-bold dark:text-white">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est excepturi totam et, tempore explicabo labore? Aliquid consequuntur cumque facere.&quot;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default FeatureSlider
