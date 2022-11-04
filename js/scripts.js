//pizza object
function Pizza() {
  this.quantity = 1;
  this.price = 0;
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
};

Pizza.prototype.addTopping = function(topping) {
  this.topping = topping;
};

Pizza.prototype.addPriceBasedOnSize = function() {
  if (this.size === 10) {
    this.price = 10;
  } else if (this.size === 14) {
    this.price = 14;
  } else if (this.size === 18) {
    this.price = 18;
  }
};

Pizza.prototype.addPriceBasedOnTopping = function() {
  if (this.topping !== undefined) {
    const totalPriceOfToppings = this.topping.length * 2;
    this.price += totalPriceOfToppings;
  }
  console.log("No topping added");
  return false
};


let pizza = new Pizza();

//make pizza
  //add toppings: pepperoni, pineapple, chicken, jalapenos
  //choose size: 10, 14, 18
  //choose quantity
  //add price

// customer object
function Customer() {
}

Customer.prototype.pickUpOrDelivery = function(userChoice) {
  this.pickUpOrDelivery = userChoice;
}

Customer.prototype.nameAndCallBack = function(userInputName, userPhoneNumber) {
  this.nameOnOrder = userInputName;
  this.phoneNumber = userPhoneNumber;
}

Customer.prototype.addDeliveryAddress = function(streetAddress, city, state, zipCode) {
  this.address = {};
  this.address.streetAddress = streetAddress;
  this.address.city = city;
  this.address.state = state;
  this.address.zipCode = zipCode;
}

let customer = new Customer();

//make customer
  //name on order
  //call back phone number
  //pick up or delivery
  //if pick up
    //come in 25 minutes
  //if delivery
    //address
