import Product from "@/components/product"
const URL = process.env.NEXT_PUBLIC_URL
import { products, tagList, brands } from "./lists"
const API = process.env.NEXT_PUBLIC_API
import product from '@/utils/product.json'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API,
    'X-RapidAPI-Host': 'makeup.p.rapidapi.com',
    cache:'no-store'
  },
};


//For Multiple Products
export async function getData(product, brand, tags) {
  const productType = product ? `/products/${product}` : ""
  const brandName = brand ? `/products/brands/${brand}` : ""
  const addProducts = brand || product ? "" : "/products"
  const tagList = tags ? `?tags=${tags.tags}` : ""
  const url = `${URL}api${addProducts}${brandName}${productType}${tagList}`;
  const data= await fetch(url, options).then(response => response.json())
  return data.products
}



//Individual Products
export async function getProductPage(id) {
  const url = `${URL}api/products/productPage/${id}`
  const {product} = await fetch(
    url,
    options).then(response => response.json())

  return product
}

//For the HomePage

export async function getRandomProduct() {

  let num = Math.floor(Math.random() * products.length)
  const product = products[num].toString()
  
  return product
  
}

export async function getRandomBrand() {

    let num = Math.floor(Math.random() * brands.length)
    const brand = brands[num].toString()
  return brand

}

export async function getRandomTag(){
  
  let num = Math.floor(Math.random()* tagList.length)
  const tag = tagList[num].toString()
  return tag
}



// For watering the database
export async function getProducts() {
  const sorted = await sortMakeup(product)
  const schema = sorted.map(product => {
    const item = {
      id: product.id,
      name: product.name,
      description: product.description,
      brand: product.brand,
      price: product.price,
      api_featured_image: product.api_featured_image,
      product_type: product.product_type,
      product_colors: product.product_colors,
      tag_list: product.tag_list
    }
    return item
  })
  addProducts(schema)
}
export async function addProducts(products) {
  try {
    const data = await fetch(`${URL}/api/water`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store",
      body: JSON.stringify({ products })
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}