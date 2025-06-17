import React from 'react';
import HomeSlider from '../../Components/Home/homeSlider';
import HomeSectionSlider from '../../Components/HomeSectionSlider/HomeSectionSlider.jsx';
import { mens_kurta } from '../../Data/Mens_kurta.js';

const HomePage = () => {
    return (
        <div>
            <HomeSlider />

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionSlider data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionSlider data={mens_kurta} sectionName= {"Mens Shoes"}/>
                <HomeSectionSlider data={mens_kurta} sectionName= {"Mens Shirts"}/>
                <HomeSectionSlider data={mens_kurta} sectionName= {"Women's Clothing"}/>
                <HomeSectionSlider data={mens_kurta} sectionName= {"Women's Shoes"}/>
                <HomeSectionSlider data={mens_kurta} sectionName= {"Women's Bags"}/>            
            </div>
        </div>
    )
};

export default HomePage;