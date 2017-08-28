var cart = [];

function itemPrice(){
	let num = Math.random() * 99 + 1;
	return Math.floor(num);
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
	let obj = {}
	obj[item] = itemPrice()
 	cart.push(obj)
 	console.log(`${item} has been added to your cart.`)
 	return cart
}

function viewCart() {
	let str = "In your cart, you have "
	if (cart.length === 0){
		console.log('Your shopping cart is empty.')
	} else if (cart.length === 1){
		console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
	} else if (cart.length === 2){
		console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
	}else {
		for(let i = 0; i < cart.length-1; i++){
			
			str += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `
		}
		str+= `and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`
	}
	console.log(str)
	return cart
}

function total() {
	total = 0
  	for(var i = 0; i < cart.length; i++){
  		total += Number(Object.values(cart[i]))
  	}
  	return total
}


function removeFromCart(item) {
  let new_cart = []
	for(var i = 0; i < cart.length; i++){
		if(!(cart[i][item])){
			new_cart.push(cart[i])
		}
	}
	if (new_cart.length == cart.length){
		console.log('That item is not in your cart.')
	}
	cart = new_cart
	return cart

}

function placeOrder(cardNumber) {
  if(cardNumber == null){
  	console.log("Sorry, we don't have a credit card on file for you.")
  } else {
  	console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
  	return cart = []
  }
}
