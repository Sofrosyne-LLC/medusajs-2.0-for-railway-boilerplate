"use server"

import { listCategories } from "@lib/data/categories"
import { cache } from "react"

// Cache the categories to avoid duplicate requests
export const getCategories = cache(async () => {
  try {
    const categories = await listCategories()
    return { categories, error: null }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return { 
      categories: [], 
      error: "Failed to fetch categories" 
    }
  }
})