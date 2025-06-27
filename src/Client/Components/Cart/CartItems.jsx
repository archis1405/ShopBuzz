import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/l/d/m-frml-st2-vebnor-original-imahcjn6bttxcex2.jpeg?q=70"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            BLIVE Solid Men Round Neck Black T-Shirt
          </p>
          <p className="opacity-60">Size: M</p>
          <p className="opacity-60 mt-2">Seller:TRIPR</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-5 ">
            <p className="font-semibold">₹ 499</p>
            <p className="line-through opacity-60">₹ 999</p>
            <p className="text-green-600 font-semibold">33% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg-space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">2</span>
          <IconButton sx={{ color: "RGB(145, 85, 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button sx={{ color: "RGB(145, 85, 253)" }}>
            REMOVE
          </Button>
        </div>

      </div>
    </div>
  );
};

export default CartItems;
