import Product from "@/components/product"
import { products, tagList, brands } from "./lists"
const API = process.env.NEXT_PUBLIC_API
const baseUrl = `https://makeup.p.rapidapi.com/products.json?`

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API,
    'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
  }
};
export function sortMakeup(makeup) {
  console.log(makeup)
  return makeup.filter((item) =>
    item.price !== '0.0' &&
    item.api_featured_image !== "/images/original/missing.png" &&
    item.api_featured_image !== undefined
  )
}

export async function getData(product, brand, tags) {
  const newTags = tags && tags.map(tag => tag.replace("%20", " "))
  const productType = product ? `product_type=${product}&` : ""
  const brandName = brand ? `brand=${brand}&` : ""
  const tagList = tags ? `product_tags=${newTags}` : ""
  const url = `${baseUrl}${productType}${brandName}${tagList}`;
  const getMakeup = await fetch(url, options).then(response => response.json())
  const allMakeup = await sortMakeup(getMakeup)
  const makeup = allMakeup.map((item) =>
    <div key={item.id}><Product data={item} /></div>
  )
  return makeup
}


export async function getRandomProduct() {
  let num = Math.floor(Math.random() * products.length)
  const url = `${baseUrl}product_type=${products[num]}&rating_greater_than=4`
  const getMakeup = await fetch(url, options).then(response => response.json())
  const allMakeup = await sortMakeup(getMakeup)
  const sorted = await allMakeup.sort((a, b) => b.rating - a.rating)
  return sorted
}

export async function getRandomBrand(){
  let num = Math.floor(Math.random() * brands.length)
  const url = `${baseUrl}brand=${brands[num]}`
  const getMakeup = await fetch(url, options).then(response => response.json())
  const allMakeup = await sortMakeup(getMakeup)
  const sorted = await allMakeup.sort((a, b) => b.rating - a.rating)
  return sorted
}

