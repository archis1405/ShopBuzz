import React from 'react';
import HomeSlider from '../../Components/Home/homeSlider';
import HomeSectionSlider from '../../Components/HomeSectionSlider/HomeSectionSlider.jsx';

const HomePage = () => {
    return (
        <div>
            <HomeSlider />

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionSlider />
                <HomeSectionSlider />
                <HomeSectionSlider />
                <HomeSectionSlider />
                <HomeSectionSlider />
                <HomeSectionSlider />            
            </div>
        </div>
    )
};

export default HomePage;