var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random()*100)+1)
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) { return "Your shopping cart is empty." }
  else {
    while (cart.length) {
      var cartPrint = cart.shift()
    }
    return "In your cart, you have ${cartPrint}"
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
