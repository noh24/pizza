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
//make pizza
  //add toppings
  //choose size
  //choose quantity

