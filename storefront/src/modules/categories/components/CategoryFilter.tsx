"use client"

import { useState, useEffect } from "react"
import { HttpTypes } from "@medusajs/types"
import { useSearchParams } from "next/navigation"
import { ChevronDown, ChevronUp, Tag } from "lucide-react"
import { useRouter } from "next/navigation"

type CategoryFilterProps = {
  setQueryParams: (name: string, value: string) => void
  'data-testid'?: string
}

const CategoryFilter = ({ 
  setQueryParams, 
  'data-testid': dataTestId 
}: CategoryFilterProps) => {
  const [categories, setCategories] = useState<HttpTypes.StoreProductCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category") || ""
  const router = useRouter()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Import is dynamic to avoid server component imports in client components
        const { getCategories } = await import("@lib/actions/get-categories")
        const { categories: fetchedCategories, error } = await getCategories()
        
        if (error) {
          throw new Error(error)
        }
        
        setCategories(fetchedCategories)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const handleCategoryChange = (categoryHandle: string) => {
    setQueryParams("category", categoryHandle)
  }

  const handleClearCategory = () => {
    setQueryParams("category", "")
  }
  
  const handleAllProducts = () => {
    router.push(`/store`)
  }

  const renderCategory = (category: HttpTypes.StoreProductCategory, level = 0) => {
    const hasChildren = category.category_children && category.category_children.length > 0
    const isExpanded = expandedCategories[category.id] || false
    const isSelected = selectedCategory === category.handle

    return (
      <div key={category.id} className="w-full">
        <div 
          className={`flex items-center justify-between py-2 ${level > 0 ? 'pl-4' : ''}`}
        >
          <button
            className={`text-base-regular text-left flex-grow hover:text-gray-900 transition-colors duration-200
              ${isSelected ? 'font-medium text-gray-900' : 'text-gray-600'}`}
            onClick={() => handleCategoryChange(category.handle)}
          >
            {category.name}
            {category.products && category.products.length > 0 && (
              <span className="ml-2 text-xs text-gray-500">({category.products.length})</span>
            )}
          </button>
          {hasChildren && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(category.id);
              }}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
              aria-label={isExpanded ? "Collapse category" : "Expand category"}
            >
              {isExpanded ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-2 pl-2 border-l border-gray-200">
            {category.category_children.map(child => renderCategory(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="mb-6" data-testid={`${dataTestId}-category-filter-loading`}>
        <h3 className="text-base-semi mb-4">Categories</h3>
        <div className="space-y-3">
          <div className="animate-pulse h-6 bg-gray-100 rounded w-3/4"></div>
          <div className="animate-pulse h-6 bg-gray-100 rounded w-1/2"></div>
          <div className="animate-pulse h-6 bg-gray-100 rounded w-2/3"></div>
          <div className="animate-pulse h-6 bg-gray-100 rounded w-3/5"></div>
        </div>
      </div>
    )
  }

  // Filter for top-level categories (no parent)
  const topLevelCategories = categories.filter(category => !category.parent_category)

  if (topLevelCategories.length === 0) {
    return null
  }

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100" data-testid={`${dataTestId}-category-filter`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base-semi flex items-center gap-2">
          <Tag size={16} className="text-gray-600" />
          <span>Categories</span>
        </h3>
        {selectedCategory && (
          <button 
            onClick={handleClearCategory}
            className="text-xs text-gray-500 hover:text-gray-900 underline"
          >
            Clear
          </button>
        )}
      </div>
      <div className="flex flex-col divide-y divide-gray-100">
        <div className="py-2">
          <button
            className={`text-base-regular text-left w-full hover:text-gray-900 transition-colors duration-200
              ${!selectedCategory ? 'font-medium text-gray-900' : 'text-gray-600'}`}
            onClick={handleAllProducts}
          >
            All Products
          </button>
        </div>
        {topLevelCategories.map(category => (
          <div key={category.id} className="py-1">
            {renderCategory(category)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter