

export interface AllCategories{
  message: string
  metadata: Metadata
  categories: Category[]
}

export interface Metadata {
  currentPage: number
  limit: number
  totalPages: number
  totalItems: number
}

export interface Category {
    _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  isSuperAdmin:boolean
  productsCount: number
}

export interface CategoryAdapt{
  id:string
  name:string
  image: string
  productsCount: number

}




