// app/lib/data/wishlist.ts
"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"

/**
 * Add a product variant to a customer's wishlist
 */
export async function addItemToWishlist(
  customerId: string,
  variantId: string,
  quantity: number = 1,
  metadata?: Record<string, any>
) {
  const headers = await getAuthHeaders()

  return sdk.client
    .fetch<HttpTypes.StoreCustomer>(`/store/customers/${customerId}/wishlist`, {
      method: "POST",
      headers,
      body: {
        variant_id: variantId,
        quantity,
        metadata,
      },
    })
    .then((response) => response)
    .catch((err) => medusaError(err))
}

/**
 * Remove an item from a customer's wishlist
 */
export async function removeItemFromWishlist(
  customerId: string,
  index: number
) {
  const headers = await getAuthHeaders()

  return sdk.client
    .fetch<HttpTypes.StoreCustomer>(`/store/customers/${customerId}/wishlist`, {
      method: "DELETE",
      headers,
      body: {
        index,
      },
    })
    .then((response) => response)
    .catch((err) => medusaError(err))
}

/**
 * Generate a share token for a customer's wishlist
 */
export async function generateWishlistShareToken(customerId: string) {
  const headers = await getAuthHeaders()

  return sdk.client
    .fetch<{ share_token: string }>(
      `/store/customers/${customerId}/wishlist/share-token`,
      {
        method: "POST",
        headers,
      }
    )
    .then((response) => response.share_token)
    .catch((err) => medusaError(err))
}

/**
 * Retrieve a shared wishlist using a token
 */
export async function getWishlistByToken(token: string) {
  const next = await getCacheOptions("wishlist")

  return sdk.client
    .fetch<{ items: any[]; first_name: string }>(
      `/wishlists/${token}`,
      {
        method: "GET",
        next,
        cache: "no-store",
      }
    )
    .then((response) => response)
    .catch((err) => medusaError(err))
}

/**
 * Check if a product variant is in a customer's wishlist
 */
export async function isVariantInWishlist(customer: any, variantId: string): Promise<boolean> {
  if (!customer?.metadata?.wishlist) {
    return false
  }
  
  try {
    const wishlist = JSON.parse(customer.metadata.wishlist as string)
    return wishlist.some((item: any) => item.variant_id === variantId)
  } catch (error) {
    console.error("Error parsing wishlist:", error)
    return false
  }
}

/**
 * Get wishlist items from customer metadata
 */
export async function getWishlistItems(customer: any): Promise<any[]> {
  if (!customer?.metadata?.wishlist) {
    return []
  }
  
  try {
    return JSON.parse(customer.metadata.wishlist as string)
  } catch (error) {
    console.error("Error parsing wishlist:", error)
    return []
  }
}

/**
 * Add or remove a product variant from a customer's wishlist (toggle)
 */
export async function toggleWishlistItem(
  state: {
    success: boolean
    error: string | null
    customer: HttpTypes.StoreCustomer | null
  },
  formData: FormData
): Promise<{
  success: boolean
  error: string | null
  customer: HttpTypes.StoreCustomer | null
}> {
  const customerId = formData.get("customer_id") as string
  const variantId = formData.get("variant_id") as string
  const action = formData.get("action") as "add" | "remove"
  const index = formData.get("index") ? Number(formData.get("index")) : undefined
  
  if (!customerId || !variantId) {
    return { 
      success: false, 
      error: "Customer ID and Variant ID are required", 
      customer: null 
    }
  }
  
  try {
    if (action === "add") {
      const quantity = formData.get("quantity") 
        ? Number(formData.get("quantity")) 
        : 1
        
      const customer = await addItemToWishlist(customerId, variantId, quantity)
      
      return { success: true, error: null, customer }
    } else if (action === "remove" && typeof index === "number") {
      const customer = await removeItemFromWishlist(customerId, index)
      
      return { success: true, error: null, customer }
    }
    
    return { success: false, error: "Invalid action", customer: null }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "An unknown error occurred",
      customer: null
    }
  }
}