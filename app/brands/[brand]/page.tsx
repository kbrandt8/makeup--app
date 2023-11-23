import Product from "@/components/product";
import { ProductType } from "@/utils/dataTypes";
async function getData(brand:string) {
    const url = `https://makeup.p.rapidapi.com/products.json?brand=${brand}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '626e7f7ce3msh61a91afbee87b93p1c05bfjsn99341dc69557',
        'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
      }
    };
   const getMakeup =  await fetch(url,options).then(response => response.json())
    const makeup = await getMakeup.filter((item:ProductType)=>item.api_featured_image !== undefined)
   return makeup

}

export default async function Page({ params }: { params: { brand: string } }) {
const {brand} = params
const data = await getData(brand)


const makeup = data.map((item:ProductType)=><li key={item.id}>
<Product data={item}/>
</li>)


    return (<main>
<h1>{brand}</h1>
      <ul>{makeup}</ul>
    
    </main>)
  }


  