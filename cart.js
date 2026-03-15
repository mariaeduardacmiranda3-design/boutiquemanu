let cart = []

function addToCart(id){

const product = products.find(p => p.id === id)

cart.push(product)

updateCart()

}

function updateCart(){

localStorage.setItem("cart", JSON.stringify(cart))

}
