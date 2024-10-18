"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import { FaStar } from "react-icons/fa6";
import image from 'next/image';
import Image from 'next/image';



const data = [
    {
        name: "Sarah Thompson",
        designation: "Registered Nurse",
        image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
        message: "As a healthcare professional, I was amazed by the accuracy of this AI symptom diagnosis tool. It has become an invaluable resource for my patients, allowing us to make informed decisions quickly. Highly recommend!"
    },
    {
        name: "Dr. Michael Lee",
        designation: "Family Physician",
        image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
        message: "This tool has transformed how I assess symptoms. Its user-friendly interface and detailed analysis have streamlined my consultations, saving time while improving patient care."
    },
    {
        name: "Emily Garcia",
        designation: "Medical Student",
        image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600",
        message: "Using this AI tool has greatly enhanced my learning experience. It provides immediate feedback and helps me understand symptom relationships better."
    },
    {
        name: "James Patel",
        designation: "Health Tech Entrepreneur",
        image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600",
        message: "This AI symptom diagnosis tool is a game-changer in the healthcare industry. Its precision and speed are unparalleled, making it essential for both patients and providers."
    }
];
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
                                        <span className="relative block w-16 h-16 overflow-hidden rounded-full shadow-sm bg-card">
                                            <Image src={el.image} className='w-full h-full object-cover object-center' fill />
                                        </span>
                                        <p className="mt-2 font-bold dark:text-white">{el.name}</p>
                                        <p className="text-sm text-gray-700 dark:text-white">{el.designation}</p>
                                    </div>
                                    <div className='flex-1'>
                                        <div className="flex justify-between items-center gap-x-2 w-max">
                                            {Array.from({ length: 4 }).map((el, idx) => (
                                                <span className="text-lg text-primary">
                                                    <FaStar />
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-2 font-bold dark:text-white">&quot;{el.message}&quot;</p>
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
