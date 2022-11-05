//pizza object
function Pizza() {
  this.quantity = 0;
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
  return;
};

Pizza.prototype.addQuantity = function(quantityToAdd) {
  this.quantity += quantityToAdd;
  return this.quantity;
};

Pizza.prototype.addPriceBasedOnQuantity = function() {
  this.price *= this.quantity;
  return this.price;
};
// customer object
function Customer() {
}

Customer.prototype.pickUpOrDelivery = function(userChoice) {
  this.pickUpOrDelivery = userChoice;
};

Customer.prototype.nameAndCallBack = function(userInputName, userPhoneNumber) {
  this.nameOnOrder = userInputName;
  this.phoneNumber = userPhoneNumber;
};

Customer.prototype.addDeliveryAddress = function(streetAddress, city, state, zipCode) {
  this.address = {};
  this.address.streetAddress = streetAddress;
  this.address.city = city;
  this.address.state = state;
  this.address.zipCode = zipCode;
};

Customer.prototype.addPizza = function(pizza) {
  this.customerPizza = pizza;
};

//ORDER OBJECT
function Order() {
  this.orderNumber = {};
  this.totalNumberOfOrders = 0;
}

Order.prototype.addCustomer = function(customer) {
  this.totalNumberOfOrders = this.assignOrderNumber();
  this.orderNumber[this.totalNumberOfOrders] = customer; 
};

Order.prototype.assignOrderNumber = function() {
  this.totalNumberOfOrders++;
  return this.totalNumberOfOrders;
};


//UI
let pizza = new Pizza();
let order = new Order();
let customer = new Customer();


document.getElementById("start-button").addEventListener("click", handleClickStart);
document.getElementById("name-and-number").addEventListener("submit", handleNameAndNumberSubmission);
document.getElementById("pick-up").addEventListener("click", handleClickPickUp);
document.getElementById("delivery").addEventListener("click", handleClickDelivery);
document.getElementById("address").addEventListener("submit", handleAddressSubmission);
document.getElementById("pizza").addEventListener("submit", handlePizzaSubmission);
document.getElementById("size").addEventListener("click", highlightSelectedSize);
document.getElementById("topping").addEventListener("click", highlightSelectedTopping);
document.getElementById("pay").addEventListener("click", showHidden6);

function handleClickStart() {
  document.getElementById("hidden1").classList.add("hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  highlightSelectedSize();
}

function handleNameAndNumberSubmission(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  customer.nameAndCallBack(name, phoneNumber);
  document.getElementById("hidden2").classList.add("hidden");
  document.getElementById("hidden3").classList.remove("hidden");
}

function handleClickPickUp() {
  document.getElementById("hidden3").classList.add("hidden");
  document.getElementById("hidden4").classList.remove("hidden");
  customer.pickUpOrDelivery(this.value);
}

function handleClickDelivery() {
  document.getElementById("hidden3").classList.add("hidden");
  document.getElementById("hidden-address").classList.remove("hidden");
  customer.pickUpOrDelivery(this.value);
}

function handleAddressSubmission(e) {
  e.preventDefault();
  const streetAddress = document.getElementById("street-address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value;

  customer.addDeliveryAddress(streetAddress, city, state, zipCode);
  document.getElementById("hidden-address").classList.add("hidden");
  document.getElementById("hidden4").classList.remove("hidden");
}

function handlePizzaSubmission(e) {
  e.preventDefault();
  const quantity = Number(document.getElementById("quantity").value);
  const size = Number(document.querySelector("input[name=pizza]:checked").value);
  const inputToppingArray = Array.from(document.querySelectorAll("input[name=topping]:checked"));
  const toppingArray = [];
  inputToppingArray.forEach(function(topping) {
    toppingArray.push(topping.value);
  });

  pizza.addQuantity(quantity);
  pizza.addSize(size);
  pizza.addTopping(toppingArray);
  pizza.addPriceBasedOnSize();
  pizza.addPriceBasedOnTopping();
  pizza.addPriceBasedOnQuantity();
  customer.addPizza(pizza);
  order.addCustomer(customer);
  displayCheckout();
}

function displayCheckout() {
  document.getElementById("hidden4").classList.add("hidden");
  document.getElementById("hidden5").classList.remove("hidden");
  document.querySelector(".name").innerText = customer.nameOnOrder;
  document.querySelector(".phone-number").innerText = customer.phoneNumber;

  if (customer.pickUpOrDelivery === "delivery") {
    document.getElementById("hidden-delivery").classList.remove("hidden");
    document.querySelector(".street-address").innerText = customer.address.streetAddress;
    document.querySelector(".city").innerText = customer.address.city;
    document.querySelector(".state").innerText = customer.address.state;
    document.querySelector(".zip-code").innerText = customer.address.zipCode;
  }
  document.querySelector(".customer-pizza-size").innerText = pizza.size;
  document.querySelector(".customer-pizza-topping").innerText = pizza.topping.length;
  document.querySelector(".customer-pizza-quantity").innerText = pizza.quantity;
  document.querySelector(".total-price").innerText = pizza.price;
}

function highlightSelectedSize() {
  const radioArray = Array.from(document.querySelectorAll("input[type=radio"));
  radioArray.forEach(function(radio) {
    if (radio.checked === true) {
      radio.parentElement.parentElement.classList.remove("gray-img");
    } else {
      radio.parentElement.parentElement.classList.add("gray-img");
    }
  });
}

function highlightSelectedTopping(e) {
  let inputId = e.target.id;
  let targetElement = document.getElementById(inputId);
  if (inputId !== "") {
    if (targetElement.checked === true) {
      targetElement.previousElementSibling.classList.remove("gray-img");
    } else {
      targetElement.previousElementSibling.classList.add("gray-img");
    }
  }
}

function showHidden6() {
  document.getElementById("hidden5").classList.add("hidden");
  document.getElementById("hidden6").classList.remove("hidden");
}
