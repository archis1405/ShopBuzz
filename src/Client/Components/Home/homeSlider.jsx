import React from "react";
import { homeSliderData } from './SliderData.js';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeSlider = () => {
    const items = homeSliderData.map((item, index) => (
        <div key={index} className="slider-item">
            <img 
                className='cursor-pointer' 
                role='presentation' 
                src={item.image} 
                alt={item.title} 
                style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default HomeSlider;

