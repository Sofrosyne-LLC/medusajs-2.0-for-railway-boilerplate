'use client'
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import NextImage from "next/image"
import { useState, useEffect } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
  variants?: {
    color: string
    imageUrl: string
  }[]
}

const ImageGallery = ({ images, variants = [] }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index)
  }
  
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  
  // Preload critical images
  useEffect(() => {
    if (images.length > 0 && images[0].url) {
      const img = new window.Image()
      img.src = images[0].url
    }
  }, [images])
  
  return (
    <div className="flex flex-col md:flex-row items-start relative">
      {/* Thumbnails navigation - horizontal on mobile, vertical on desktop */}
      <div className="flex md:flex-col flex-row overflow-x-auto gap-2 md:gap-y-2 md:mr-4 mb-2 md:mb-0">
        {images.map((image, index) => (
          <div 
            key={`thumb-${image.id}`}
            className={`min-w-16 w-16 h-16 md:w-20 md:h-20 border-2 cursor-pointer ${currentImageIndex === index ? 'border-gray-900' : 'border-transparent'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            {!!image.url && (
              <div className="relative w-full h-full">
                <NextImage
                  src={image.url}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Main image display - center */}
      <div className="flex-1 relative min-h-[350px] md:min-h-[450px] w-full">
        {/* Previous arrow */}
        <button 
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        {/* Main image container */}
        <Container
          className="relative aspect-[4/3] md:aspect-square w-full h-full overflow-hidden bg-ui-bg-subtle"
        >
          {images.length > 0 && images[currentImageIndex]?.url && (
            <NextImage
              src={images[currentImageIndex].url}
              priority={true}
              className="absolute inset-0"
              alt={`Product image ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 576px) 320px, (max-width: 768px) 500px, (max-width: 992px) 640px, 800px"
              style={{
                objectFit: "contain",
              }}
            />
          )}
        </Container>
        
        {/* Next arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      
      {/* Color variants */}
      {variants.length > 0 && (
        <div className="md:hidden mt-4 flex flex-wrap gap-2 justify-center">
          {variants.map((variant, index) => (
            <div 
              key={`variant-${index}`}
              className="w-16 h-16 rounded-md cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-full">
                <NextImage
                  src={variant.imageUrl}
                  alt={`${variant.color} variant`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      
      {variants.length > 0 && (
        <div className="hidden md:flex flex-col gap-y-2 ml-4">
          {variants.map((variant, index) => (
            <div 
              key={`variant-${index}`}
              className="w-16 h-16 rounded-md cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-full">
                <NextImage
                  src={variant.imageUrl}
                  alt={`${variant.color} variant`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery