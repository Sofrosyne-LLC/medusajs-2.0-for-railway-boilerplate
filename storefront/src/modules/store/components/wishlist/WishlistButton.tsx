"use client"
import { useTransition } from "react"
import { Heart } from "lucide-react"
import { Button } from "@medusajs/ui"
import { toast } from "@medusajs/ui"
import { addItemToWishlist } from "@lib/data/wishlist"
import { useRouter } from "next/navigation"

interface WishlistButtonProps {
  customerId: string | null;
  variantId: string;
  isInWishlist: boolean;
  productTitle: string;
}

export default function WishlistButton({ 
  customerId, 
  variantId, 
  isInWishlist, 
  productTitle 
}: WishlistButtonProps) {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const handleClick = () => {
    if (!customerId) {
      toast.info("You need to be logged in to add items to your wishlist")
      return
    }

    startTransition(async () => {
      try {
        console.log('this worked')
        await addItemToWishlist(customerId, variantId)
        toast.success(`${productTitle} has been added to your wishlist`)
        // Refresh the page to show updated state
        router.refresh()
      } catch (error) {
        toast.error("Could not add item to wishlist")
      }
    })
  }

  return (
    <Button 
      variant="secondary" 
      onClick={handleClick} 
      disabled={isPending || isInWishlist}
      className="flex items-center gap-x-2"
    >
      <Heart className={`h-5 w-5 ${isInWishlist ? "fill-rose-500 text-rose-500" : ""}`} />
      {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
    </Button>
  )
}