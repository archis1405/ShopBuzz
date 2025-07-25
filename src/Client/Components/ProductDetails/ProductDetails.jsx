import React, { useState } from 'react';
import { Grid, Box, LinearProgress, Button, Rating } from "@mui/material";
import { Radio, RadioGroup } from "@headlessui/react";
import ProductReviewCard from './ProductReviewCard';
import { mens_kurta } from '../../Data/Mens_kurta';
import ProductCard from '../Product/ProductCard';

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4.3, totalCount: 42807 };

// Rating breakdown data
const ratingBreakdown = [
  { label: "Excellent", percentage: 45, count: 19259, color: "success" },
  { label: "Very Good", percentage: 30, count: 12842, color: "success" },
  { label: "Good", percentage: 15, count: 6421, color: "warning" },
  { label: "Average", percentage: 7, count: 2996, color: "warning" },
  { label: "Poor", percentage: 3, count: 1284, color: "error" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col item-center">
            <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
                <img
                    alt={product.images[0].alt}
                    src={product.images[0].src}
                    className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                />
            </div>
            <div className="flex flex-wrap justify-center space-x-5">
                {product.images.map((item, index) => (
                  <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg font-semibold lg:text-xl text-gray-900">
                BRAND
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">TITLE of the Product</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="text-gray-900 font-semibold">199</p>
                <p className="opacity-50 line-through">299</p>
                <p className="text-green-600 font-semibold">33% off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                    <Rating name='read-only' value={3.5} readOnly precision={0.5}/>
                    <p className="opacity-50 text-sm">36489 Ratings</p>
                    <p className="ml-3 text-indigo-700 font-medium hover:text-indigo-500 opacity-50 text-sm">873 Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <div className="flex justify-center mt-10">
                  <Button variant="contained" sx={{ px:"2rem" , py:"1rem", bgcolor:"#9155fd"}}>
                    Add to Cart
                  </Button>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Ratings and Reviews Section */}
        <section className="px-4 pb-16">
          <h1 className="font-semibold text-lg pb-4">Recent Reviews and Ratings</h1>
          <div className="border p-5">
            <Grid container columnSpacing={2} justifyContent="space-between">
              <Grid item xs={12} md={5}>
                <div className="space-y-5">
                  {[1,1,1].map((item)=> <ProductReviewCard />)}
                </div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                {/* Enhanced Product Ratings Section */}
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-3">Product Ratings</h1>
                  
                  {/* Overall Rating Display */}
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <Rating 
                      value={reviews.average} 
                      precision={0.1} 
                      readOnly 
                      size="large"
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#FFD700',
                        },
                        '& .MuiRating-iconEmpty': {
                          color: '#E0E0E0',
                        }
                      }}
                    />
                    <span className="text-3xl font-bold text-gray-800">{reviews.average}</span>
                  </div>
                  
                  <p className="text-gray-500 text-xl font-medium">
                    {reviews.totalCount.toLocaleString()} Ratings
                  </p>
                </div>

                {/* Rating Breakdown */}
                <div className="space-y-3">
                  {ratingBreakdown.map((rating, index) => (
                    <Box key={index} className="flex items-center space-x-3">
                      {/* Rating Label */}
                      <div className="w-20 text-left">
                        <span className="text-sm font-medium text-gray-700">
                          {rating.label}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                    <Box sx={{ width: '220px' }}>
                        <LinearProgress
                            variant="determinate"
                            value={rating.percentage}
                            color={rating.color}
                            sx={{
                            height: 10,
                            borderRadius: 2,
                            backgroundColor: '#f0f0f0',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                            }
                            }}
                        />
                    </Box>

                      
                      {/* Count */}
                      <div className="w-16 text-right">
                        <span className="text-sm text-gray-500">
                          {rating.count.toLocaleString()}
                        </span>
                      </div>
                    </Box>
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Similar Products Section */}
        <section className='pt-10'>
            <h1 className='font-bold py-5 text-xl'>Similar Products</h1>

            <div className="flex flex-wrap wid">
                  {mens_kurta.map((item, index) => (
                    <div key={index} className="w-1/5 p-2">
                    <ProductCard product={item} />
                    </div>
                  ))}
            </div>
        </section>
      </div>
    </div>
  );
}