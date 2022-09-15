import { useOffers } from '@/adapters/special_offers';
import React, { FC, useRef, useState } from 'react'

import Slider from "react-slick";

const Special: FC = () => {

    const carousel = useRef<Slider>(null)
    const { isLoading, offers } = useOffers()

    const offersLenth = offers?.length

    const settings = {
        dots: true,
        speed: 500,
        infinity: true,
        slidesToShow: Number(offersLenth) >= 4 ? 4 : offersLenth,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow:  Number(offersLenth) >= 2 ? 2 : offersLenth,
                dots: false,
                infinity: true,
            }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
                },
          ]
      };

    return (
        
        <section className="special">
            <div className="special__frame">
                <div className="special__title">Специальные предложения
                    <img className="special__vector" src="icons/emblem/Vector 2.svg" alt="vector"/>
                </div>

                <div className='special__wrap' onClick={(e) => {carousel.current?.slickPrev(); e.stopPropagation()}}>
                    <div className="special__slider-button" >
                        <img src="icons/emblem/arrowL.svg"/>
                    </div>

                    <Slider {...settings} ref={carousel} className="special__slider">

                        { offers?.map(_item => (
                            <div className="special__item-block" key={_item.id}>
                                <div className="special__img">
                                    <img src={_item.url_image} alt="vector"/>
                                </div>
                                <div className="special__description">{_item.title}</div>
                            </div>
                        ))}
                        
                    </Slider>

                    <div className="special__slider-button" onClick={(e) => {carousel.current?.slickNext(); e.stopPropagation()}}>
                        <img src="icons/emblem/arrowR.svg"/>
                    </div>
                </div>
            </div> 
            
        </section>
    )
}

export default Special;

