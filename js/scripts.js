function Pizza(quantity, size, topping) {
  this.quantity = quantity;
  this.price = 0;
  this.size = size;
  this.topping = topping;
}

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

Pizza.prototype.addPriceBasedOnQuantity = function() {
  this.price *= this.quantity;
  return this.price;
};
// customer object
function Customer(userInputName, userPhoneNumber, userChoice) {
  this.nameOnOrder = userInputName;
  this.phoneNumber = userPhoneNumber;
  this.pickUpOrDelivery = userChoice;
  this.address = {};
}

Customer.prototype.addDeliveryAddress = function(streetAddress, city, state, zipCode) {
  this.address.streetAddress = streetAddress;
  this.address.city = city;
  this.address.state = state;
  this.address.zipCode = zipCode;
};

//UI
window.addEventListener('load', function() {
  document.getElementById("start-button").addEventListener("click", handleClickStart);
  document.getElementById("basic-info").addEventListener("submit", function(e) {
    e.preventDefault();
    handleBasicInfoSubmission();
  });
  document.getElementById("address").addEventListener("submit", function(e) {
    e.preventDefault();
    let customer = handleBasicInfoSubmission();
    handleAddressSubmission(customer);
  });
  document.getElementById("pizza").addEventListener("submit", function(e) {
    e.preventDefault();
    let customer = handleBasicInfoSubmission();
    handlePizzaSubmission(customer);
  });
  document.getElementById("size").addEventListener("click", highlightSelectedSize);
  document.getElementById("topping").addEventListener("click", highlightSelectedTopping);
  document.getElementById("pay").addEventListener("click", showThankYou);
});

function handleClickStart() {
  document.getElementById("hidden1").classList.add("hidden");
  document.getElementById("hidden2").classList.remove("hidden");
  highlightSelectedSize();
}

function handleBasicInfoSubmission() {
  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const pickUpOrDelivery = document.querySelector('input[name=methodToGetPizza]:checked').value;
  let customer = new Customer(name, phoneNumber, pickUpOrDelivery);
  document.getElementById("hidden2").classList.add("hidden");
  if (pickUpOrDelivery === 'delivery') {
    document.getElementById("hidden-address").classList.remove("hidden");
  } else {
    document.getElementById("hidden3").classList.remove("hidden");
  }
  addBasicInfoToDisplay(customer);
  return customer;
}

function addBasicInfoToDisplay(customer) {
  document.querySelector(".name").innerText = customer.nameOnOrder;
  document.querySelector(".phone-number").innerText = customer.phoneNumber;
}

function handleAddressSubmission(customer) {
  const streetAddress = document.getElementById("street-address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value;
  customer.addDeliveryAddress(streetAddress, city, state, zipCode);
  document.getElementById("hidden-address").classList.add("hidden");
  document.getElementById("hidden3").classList.remove("hidden");
  addAddressToDisplay(customer);
  return customer;
}

function addAddressToDisplay(customer) {
  document.querySelector(".street-address").innerText = customer.address.streetAddress;
  document.querySelector(".city").innerText = customer.address.city;
  document.querySelector(".state").innerText = customer.address.state;
  document.querySelector(".zip-code").innerText = customer.address.zipCode;
}

function handlePizzaSubmission(customer) {
  document.getElementById("hidden-address").classList.add("hidden");
  const quantity = Number(document.getElementById("quantity").value);
  const size = Number(document.querySelector("input[name=pizza-size]:checked").value);
  const inputToppingArray = Array.from(document.querySelectorAll("input[name=topping]:checked"));
  const toppingArray = [];
  inputToppingArray.forEach(function(topping) {
    toppingArray.push(topping.value);
  });
  let pizza = new Pizza(quantity, size, toppingArray);
  pizza.addPriceBasedOnSize();
  pizza.addPriceBasedOnTopping();
  pizza.addPriceBasedOnQuantity();
  addPizzaDetailsToDisplay(pizza);
  displayCheckout(customer);
}

function addPizzaDetailsToDisplay(pizza) {
  document.querySelector(".customer-pizza-size").innerText = pizza.size;
  document.querySelector(".customer-pizza-topping").innerText = pizza.topping.length;
  document.querySelector(".customer-pizza-quantity").innerText = pizza.quantity;
  document.querySelector(".total-price").innerText = pizza.price;
}

function displayCheckout(customer) {
  document.getElementById("hidden3").setAttribute('class', "hidden");
  document.getElementById("hidden4").classList.remove("hidden");
  if (customer.pickUpOrDelivery === "delivery") {
    document.getElementById("hidden-delivery").classList.remove("hidden");
  }
}

function highlightSelectedSize() {
  const pizzaSizeRadioArray = Array.from(document.querySelectorAll("input[name=pizza-size"));
  pizzaSizeRadioArray.forEach(function(radio) {
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

function showThankYou() {
  document.getElementById("hidden4").classList.add("hidden");
  document.getElementById("hidden5").classList.remove("hidden");
}
