# Pizza Parlor Project
By Brian Noh
Epicodus Independent Project: Pizza Parlor Project   
_Currently not deployed_: [Check out the project here](noh24.github.com/pizza/)

## Technologies Used  
* HTML
* CSS
* Bootstrap
* JavaScript
* Web API

## Description
Welcome to the New York Style Pizza Parlor!  
Customers can select from a wide variety of toppings to customize their very own NY-style pizza. 
Thanks for stopping by and enjoy the best New York-style pizza!

## Setup/Installation Requirements
* Clone this repository to your desktop through the Terminal.
* Access your file explorer(Windows/Linux)/finder(MacOs).
* Find and access the folder/directory labeled "pizza".
* Open the file labeled index.html onto your browser.
* Input required information in forms and press submit.

## Specifications/TDD
```
Describe Pizza()

Test1: When called with arguments, should return Pizza object with 4 properties.
Code: 
let pizza = new Pizza(1, 10, "jalapenos");
pizza;
Expected Output: Pizza { quantity: 1, price: 0, size: 10, topping: "jalapenos" }
```
```
Describe Pizza.prototype.addPriceBasedOnSize()

Test1: It should adjust price based on size 10
Code: 
let pizza = new Pizza(1, 10);
pizza.addPriceBasedOnSize();
pizza;
Expected Output: Pizza { quantity: 1, price: 10, size: 10, topping: undefined }

Test2: It should adjust price based on size 14
Code: 
let pizza = new Pizza(1, 14);
pizza.addPriceBasedOnSize();
pizza;
Expected Output: Pizza { quantity: 1, price: 14, size: 14, topping: undefined }

Test3: It should adjust price based on size 18
Code: 
let pizza = new Pizza(1, 18);
pizza.addPriceBasedOnSize();
pizza;
Expected Output: Pizza { quantity: 1, price: 18, size: 18, topping: undefined }
```
```
Describe Pizza.prototype.addPriceBasedOnTopping()

Test1: It should adjust price based on number of toppings: 1, each topping is 2
Code: 
let pizza = new Pizza(1, 0, ["jalapenos"]);
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza { quantity: 1, price = 2, size: 0, topping: ["jalapenos"] }

Test2: It should adjust price based on number of toppings: 2, each topping is 2
Code: 
let pizza = new Pizza(1, 0, ["jalapenos", "pepperoni"]);
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza { quantity: 1, price = 4, size: 0, topping: ["jalapenos", "pepperoni"] }

Test3: It should not adjust price if no topping is added.
Code: 
let pizza = new Pizza(1, 0);
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza { quantity: 0, price = 0, size: 0, topping: undefined }
```
```
Describe Pizza.prototype.addPriceBasedOnQuantity()

Test1: Should adjust price based on the quantity of pizza
Code: 
let pizza = new Pizza(3);
pizza.price = 10;
pizza.addPriceBasedOnQuantity();
pizza;
Expected Output: Pizza { quantity: 3, price = 30, size: undefined, topping: undefined }
```
```
Describe Customer()

Test1: should create Customer object with 4 properties
Code: 
let customer = new Customer("bobithy", "555-555-5555", "pick up" );
customer;
Expected Output: Customer { nameOnOrder: 'bobithy', phoneNumber: '555-555-5555', pickUpOrDelivery: 'pick up', address: {}}
```
```
Describe Customer.prototype.addDeliveryAddress()

Test 1: It should add street address, city, state, zip code into address object in Customer object
Code:
let customer = new Customer();
customer.addDeliveryAddress("1119 rich stret", "queens", "NY", 41233);
customer;
Expected Output: 
Customer { nameOnOrder: undefined, phoneNumber: undefined, pickUpOrDelivery: undefined, address: { streetAddress: '1119 rich street', city: 'queens', state: 'NY', zipCode: 41233 } }
```

## Known bugs
* _No known bugs_.

## Contributing
_Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change_.  
  
Feel free to contact me through <noh24@ymail.com>.

## License
[MIT](./license.txt) License  
Copyright (c) _2022 Brian Noh_