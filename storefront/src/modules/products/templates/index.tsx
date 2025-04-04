import React, { Suspense } from "react"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import WishlistButton from "@modules/store/components/wishlist/WishlistButton"
import { isVariantInWishlist } from "@lib/data/wishlist"
import { retrieveCustomer } from "@lib/data/customer"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  // Get the default variant ID
  const defaultVariantId = product.variants?.[0]?.id || ""
  
  // Get customer info
  const customer = await retrieveCustomer()
  console.log(customer, 'customueieoeoe')
  const customerId = customer?.id || null
  
  // Check if product is in wishlist
  const isInWishlist = customer ? 
    await isVariantInWishlist(customer, defaultVariantId) : 
    false

  return (
    <>
      {/* Main Product Section */}
      <div className="content-container py-6 md:py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
          {/* Product Image Gallery - Takes more space on larger screens */}
          <div className="md:col-span-7 lg:col-span-8">
            <ImageGallery images={product?.images || []} />
          </div>

          {/* Product Information and Actions - Right side section */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-y-8">
            {/* Product Info (Brand, Title, Rating) */}
            <div className="order-1">
              <ProductInfo product={product} />
            </div>

            {/* Product Actions (Size, Add to Cart, etc) */}
            <div className="order-2">
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
              
              {/* Wishlist button below add to cart */}
              {/* <div className="mt-4">
                <WishlistButton 
                  customerId={customerId} 
                  variantId={defaultVariantId}
                  isInWishlist={isInWishlist}
                  productTitle={product.title}
                />
              </div> */}
            </div>

            {/* Product Onboarding CTA (if needed) */}
            <div className="order-3">
              <ProductOnboardingCta />
            </div>

            {/* Product Tabs (Description, Details, etc) */}
            <div className="order-4">
              <ProductTabs product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div
        className="content-container my-16"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate