import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeProductCard from '../SectionCard/HomeProductCard.jsx';


const HomeSectionSlider = () => {
    const responsive = {
        0 : { items: 1 },
        720 : { items: 3 },
        1024 : { items: 4 },
    };

    const items = [1,1,1,1,1,1].map((item)=><HomeProductCard /> )
    return(
        <div>
            <AliceCarousel
                        mouseTracking
                        items={items}
                        controlsStrategy="alternate"
                        disableButtonsControls
                        autoPlay
                        autoPlayInterval={1000}
                        infinite
                        responsive={responsive}
                    />
        </div>
    )
}

export default HomeSectionSlider;