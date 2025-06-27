import React from "react";

const CartItems = () => {
    return(
        <div className="p-6 shadow-lg border rounded-md bg-white max-w-4xl">
            <div className="flex items-start gap-6">
                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0"> 
                    <img 
                        src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/q/1/q/xxl- bblrnful-plainz133-blive-original-imaha9q682vhzcp9.jpeg?q=90" 
                        alt="BLIVE Solid Men Round Neck Black T-Shirt" 
                        className="w-full h-full object-cover object-top rounded" 
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                    {/* Title and Delivery Info Row */}
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-blue-500 text-lg font-medium leading-tight">
                            BLIVE Solid Men Round Neck Black T-Shirt
                        </h3>
                        <div className="text-right text-sm text-gray-700 ml-4">
                            <div>Delivery by <p className="font-medium inline">Mon Jun 30</p></div>
                        </div>
                    </div>

                    {/* Size */}
                    <p className="text-gray-600 text-sm mb-1">Size: M</p>
                    
                    {/* Seller */}
                    <div className="flex items-center gap-2 mb-4">
                        <p className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            Seller:TRIPR
                        </p>
                        
                    </div>

                    {/* Price and Discount */}
                    <div className="flex items-center gap-3 mb-4">
                        <p className="line-through text-gray-500 text-sm">₹999</p>
                        <p className="text-xl font-bold text-black">₹219</p>
                        <p className="text-green-600 font-semibold text-sm">78% Off</p>
                        
                    </div>

                    {/* Quantity Controls and Actions */}
                    <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-500">
                                −
                            </button>
                            <p className="w-12 h-8 flex items-center justify-center border-x text-sm font-medium">
                                1
                            </p>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-500">
                                +
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                            SAVE FOR LATER
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                            REMOVE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;