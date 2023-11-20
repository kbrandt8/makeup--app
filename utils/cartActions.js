export async function startCart() {
  //  const URL = process.env.NEXT_PUBLIC_URL
  try {
    await fetch(`http://localhost:3000/api/cartCookies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }
    }
    )


  } catch (error) {
    console.log(error)
  }
}

export async function getCart(id) {
  try {
    const data = await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store"


    }
    )
    return data.json()

  } catch (error) {
    console.log(error)
  }
}

export async function addToCart(id, item, price) {
//  const { items } = await getCart(id)
  //const isInCart = items.filter(product=>product.id === item.id)


    try {
      const data = await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        }, cache: "no-store",
        body: JSON.stringify({ item, price })

      }
      )
      return data.json()

    } catch (error) {
      console.log(error)
    }


}
export async function removeFromCart(id, item) {
  try {
    await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store",
      body: JSON.stringify({ item })
    })
  } catch (error) {
    console.log(error)
  }
}

export async function changeQuantity(id, item, quantity,increment) {
  if(quantity > 0){
  try {
    await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store",
      body: JSON.stringify({ item, quantity,increment})
    })
  } catch (error) {
    console.log(error)
  }}
}

export async function getTotal(items){
  const itemTotal = items.map(item =>parseFloat(item.price) * item.quantity) 
  const total = itemTotal.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
  }, 0)
  return total
}