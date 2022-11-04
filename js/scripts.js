function Pizza() {
  this.quantity = 1;
}
const pizza = new Pizza();

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.topping = topping;
}

Pizza.prototype.addPrice = function(price) {
  this.price = price;
}
//make pizza
  //add toppings
  //choose size
  //choose quantity

