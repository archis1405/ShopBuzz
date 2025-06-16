import React from 'react';
import HomeSlider from '../../Components/Home/homeSlider';
import HomeSectionSlider from '../../Components/HomeSectionSlider/HomeSectionSlider.jsx';

const HomePage = () => {
    return (
        <div>
            <HomeSlider />

            <div>
                <HomeSectionSlider />
            </div>
        </div>
    )
};

export default HomePage;