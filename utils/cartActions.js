const URL = process.env.NEXT_PUBLIC_URL
export async function startCart() {
  try {
    await fetch(`${URL}/api/cartCookies`, {
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
  if (!id) return null;
  try {
    const data = await fetch(`${URL}/api/cartCookies/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        cache: 'no-store'
      }


    }
    )
    getTotal(id)

    return data.json()

  } catch (error) {
    console.log(error)
    console.log("Could Not Get Cart!")
  }
}

export async function addToCart(id, item) {
  const { items } = await getCart(id)
  const isInCart = items.filter(product =>
    product.id === item.id &&
    product.product_color === item.product_color).length > 0 ? true : false
  if (!isInCart) {
    try {
      const data = await fetch(`${URL}/api/cartCookies/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        }, cache: "no-store",
        body: JSON.stringify({ item })

      }
      )
      return data.json()

    } catch (error) {
      console.log(error)
    }
  } else {
    changeQuantity(id, item, true)
  }

}
export async function removeFromCart(id, item) {
  try {
    await fetch(`${URL}/api/cartCookies/${id}`, {
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

export async function changeQuantity(id, item, increment) {
  if (item.quantity >= 1 && increment || !increment) {
    try {
      await fetch(`${URL}/api/cartCookies/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        }, cache: "no-store",
        body: JSON.stringify({ item, increment })
      })
    } catch (error) {
      console.log(error)
    }
  } else if (item.quantity <= 1 && !increment) {

    removeFromCart(id, item)
  }
}

export async function getTotal(id) {
  try {
    await fetch(`${URL}/api/cartCookies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store"
    })
  } catch (error) {
    console.log(error)
  }
}


