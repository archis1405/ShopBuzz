import React from "react";
import CartItems from "./CartItems";
import Button from "@mui/material/Button";

const Cart = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                
                <div className="col-span-2">
                    {[1,1,1,1,1].map((item) => <CartItems />)}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className='opacity-60 font-bold pb-4 text-left'>PRICE DETAILS</p>

                        <hr />

                        <div className="space-y-3 font-semibold mb-5">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price (2 items)</span>
                                <span>₹ 998</span>
                            </div>

                            <div className="flex justify-between pt-3  ">
                                <span>Discount</span>
                                <span className="text-green-600">₹ 235</span>
                            </div>

                            <div className="flex justify-between pt-3 ">
                                <span>Delivery Charges</span>
                                <span className="text-green-600">₹ 20</span>
                            </div>

                            <div className="flex justify-between pt-3 font-bold">
                                <span>Total Amount</span>
                                <span className="text-green-600">₹ 783</span>
                            </div>

                        </div>
                        <Button variant="contained" className="w-full mt-5" sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}>
                            PROCEED
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
