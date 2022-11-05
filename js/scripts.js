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
  return
};

Pizza.prototype.addQuantity = function(quantityToAdd) {
  this.quantity += quantityToAdd;
  return this.quantity;
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
}

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

// start button
document.getElementById("start-button").addEventListener("click", function() {
  document.getElementById("hidden1").classList.add("hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  highlightSelectedSize();
});
// name and number
document.getElementById("name-and-number").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  customer.nameAndCallBack(name, phoneNumber);
  document.getElementById("hidden2").classList.add("hidden");
  document.getElementById("hidden3").classList.remove("hidden");
});
//pick up or delivery
document.getElementById("pick-up").addEventListener("click", function() {
  document.getElementById("hidden3").classList.add("hidden");
  document.getElementById("hidden4").classList.remove("hidden");
  customer.pickUpOrDelivery(this.value);
});
document.getElementById("delivery").addEventListener("click", function() {
  document.getElementById("hidden3").classList.add("hidden");
  document.getElementById("hidden-address").classList.remove("hidden");
  customer.pickUpOrDelivery(this.value);
});
//address submission
document.getElementById("address").addEventListener("submit", function(e) {
  e.preventDefault();
  const streetAddress = document.getElementById("street-address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value;

  customer.addDeliveryAddress(streetAddress, city, state, zipCode);
  document.getElementById("hidden-address").classList.add("hidden");
  document.getElementById("hidden4").classList.remove("hidden");
});
// pizza menu
document.getElementById("pizza").addEventListener("submit", function(e) {
  e.preventDefault();

});

document.getElementById("size").addEventListener("click", highlightSelectedSize);
function highlightSelectedSize() {
  const radioArray = Array.from(document.querySelectorAll("input[type=radio"));
  radioArray.forEach(function(radio) {
    if (radio.checked === true) {
      radio.parentElement.classList.remove("gray-img");
    } else {
      radio.parentElement.classList.add("gray-img");
    }
  });
}
document.getElementById("topping").addEventListener("click", highlightSelectedTopping);
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
  // if (inputId !== "topping" && inputId !== undefined) {
  //   let targetElement = document.getElementById(inputId);
  //   if (targetElement.checked === true) {
  //     targetElement.previousSibling.classList.remove("gray-img");
  //   } else {
  //     targetElement.previousSibling.classList.add("gray-img");
  //   }
  // }
}