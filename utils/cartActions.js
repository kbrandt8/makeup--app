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
    getTotal(id)

    return data.json()

  } catch (error) {
    console.log(error)
    console.log("Could Not Get Cart!")
  }
}

export async function addToCart(id, item) {

  try {
    const data = await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
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

export async function changeQuantity(id, item, increment) {
  if (item.quantity > 1) {
    try {
      await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        }, cache: "no-store",
        body: JSON.stringify({ item, increment })
      })
    } catch (error) {
      console.log(error)
    }
  } else if (item.quantity <=1 && !increment) {
    console.log("Removing")
    removeFromCart(id,item)
  }
}

export async function getTotal(id) {
  try {
    await fetch(`http://localhost:3000/api/cartCookies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      }, cache: "no-store"
    })
  } catch (error) {
    console.log(error)
  }
}


