import React from 'react';

const HomeProductCard = ({ product }) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white 
        rounded-lg shadow-lg overflow-hidden width-[15rem] mx-3 '>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />

            </div>
            <div className='p-4'>
                <h3 className='text-lg font-semibold'>{product.brand}</h3>
                <p className='text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default HomeProductCard;
