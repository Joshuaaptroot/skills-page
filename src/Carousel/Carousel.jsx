import React from 'react'

import Gearbig from '../Images/Gearbig.png'
import GearColour from '../Images/Gearcolour.png'
import HtmlLogo from '../Images/HtmlLogo.png'
import PythonLogo from '../Images/PythonLogo.png'
import CSSLogo from '../Images/CSSLogo.png'
import JSLogo from '../Images/JSLogo.png'
import Pipes1 from '../Images/Pipes1.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay} from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'

const slider = [
    {
        title: "python",
        description: "Python is the language I'm most cofident and comfortable in. Designed to be as intuitive as possible, Python is a great way to build out sturdy and complicated applications, and with a huge community of users, there is a wealth of knowledge that exists online to inspire and assist Junior developers such as myself.",
        image: PythonLogo
    },
    {
        title: "HTML",
        description: "HTML, the Skeleton of every site. I have been usign HTML since the beginning of my journey into coding, two years ago. Whilst the fundamentals of HTML are easy to learn, there are a range of new tricks and tools that make it's use exciting and fresh on eah build!",
        image: HtmlLogo
    },
    {
        title: "CSS",
        description: "So far, my experience with has mostly been through using raw CSS to style sites, However, I have begun using popular frameworks such as Boostrap and Tailwind to speed up/improve my designs! ",
        image: CSSLogo
    },
    {
        title: "JS",
        description: "JavaScript is how we make each site exciting. Each link, animation and reaction on a site is programmed with JS; this slider for example, so I've spent a good amount of time learnign how to use this one. I have also begun to use frameworks like React, which has been a great experence and can provide tremendous value to the efficient build of a site! ",
        image:  JSLogo
    },
]

const button = [
    <a className='slider-btn' href="#">Make a Request!</a>
]

const backgroundImage = [
    <img src={Pipes1} alt="Pipes" className="Pipes" />
]

export const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>What can I Do?</h1>
                <hr />
                <p>Web Development Support</p>
                <a className='slider-btn' href="https://kptiv-contact-form.azurewebsites.net/#">Make a Request!</a>
            </div>
        </div>

        <div className='home'>
            <a className="home-btn" href='https://orange-sea-030b0c010.3.azurestaticapps.net'>Home</a>
        </div>
        
        <Swiper className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        CenteredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,

        }}
        loop={true}
        pagination={{clickable: true}}
        slidesPerView={2}
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{backgroundImage: `url(${data.image})`}} className='myswiper-slider'>
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <img src={Gearbig} alt="gear" className='gear-1' />
        <img src={GearColour} alt="gear" className='gear-2' />
        <img src={Pipes1} alt="Pipes" className="Pipes" />
    </div>
    
  )
}



export default Carousel