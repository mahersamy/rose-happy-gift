export interface AllProductResponse {
  message: string
  metadata: Metadata
  products: ProductResponse[]
}

export interface Metadata {
  currentPage: number
  totalPages: number
  limit: number
  totalItems: number
}

export interface ProductResponse {
  rateAvg: number
  rateCount: number
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  createdAt: string
  updatedAt: string
  __v: number
  isSuperAdmin: boolean
  sold: number
  id: string
}
 
  export interface AllProductResponseAdapt {
    message: string
    metadata: Metadata
    products:ProductResponseAdapt[]

  }
  export interface ProductResponseAdapt{
    id: string
    images: string[]
    imageCover: string
    title: string
    description: string
    price: number
    quantity: number
    catId:string
    ratingsAverage: number

  }
   export interface ProductData{
    data:ProductResponse
   }

