import React from 'react';

const HomeProductCard = ({ product }) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white 
        rounded-lg shadow-lg overflow-hidden width-[25rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60" alt="" />

            </div>
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900'>Best Wireless Earbuds</h3>
                <p className='text-sm text-gray-500'>GRAB NOW</p>
            </div>
        </div>
    )
}

export default HomeProductCard;
