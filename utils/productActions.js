import Product from "@/components/product"

export async function getData(product,brand,tags) {
    const newTags = tags && tags.map(tag=> tag.replace("%20"," "))
    const API = process.env.NEXT_PUBLIC_API
    const productType = product ? `product_type=${product}&` : ""
    const brandName = brand ? `brand=${brand}&` : ""
    const tagList = tags ? `product_tags=${newTags}` : ""
    const url = `https://makeup.p.rapidapi.com/products.json?${productType}${brandName}${tagList}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API,
        'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
      }
    };
    const getMakeup = await fetch(url, options).then(response => response.json())
    const allMakeup = await getMakeup.filter((item) =>
    item.price !== '0.0' &&
    item.api_featured_image !== "/images/original/missing.png" &&
    item.api_featured_image !== undefined
  )
  const makeup = allMakeup.map((item) =>
    <div key={item.id}><Product data={item} /></div>
  )

  
    return makeup
  }

