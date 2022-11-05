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
The owner, yours truly, traveled the whole world trying pizza in all countries.  
He was inspired to make his own pizza restaurant after trying New York-style pizza.  
Customers can select from a wide variety toppings to customize their very own NY-style pizza. 
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

Test1: It should return a Pizza object with two property: quantity and price.
Code: 
let pizza = new Pizza();
Expected Output: Pizza {quantity: 0, price = 0}
```
```
Describe Pizza.prototype.addSize()

Test1: It should add a property called size to Pizza object.
Code: 
pizza.addSize(10);
pizza;
Expected Output: Pizza {quantity: 0, price = 0, size: 10}
```
```
Describe Pizza.prototype.addTopping()

Test1: It should add a property called topping to Pizza object.
Code: 
pizza.addTopping(["pepperoni", "jalapenos"]);
pizza;
Expected Output: Pizza {quantity: 0, price = 0, topping: ['pepperoni', 'jalapenos']}
```
```
Describe Pizza.prototype.addPriceBasedOnSize()

Test1: It should add a property called price to Pizza object.
Code: 
pizza.addPriceBasedOnSize(15);
pizza;
Expected Output: Pizza {quantity: 0, price = 15}

Test2: It should adjust price based on pizza size, 10 , 14, 18.
Code:
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza;
Expected Output: Pizza {quantity: 0, price = 10, size: 10, topping: ['pepperoni', 'jalapenos']}
```
```
Describe Pizza.prototype.addPriceBasedOnTopping()

Test1: It should adjust price based on amount of pizza topping array length after size is declared. Each topping cost 2
Code: 
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza.addTopping(["pepperoni", "jalapenos"]);
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza {quantity: 0, price = 14, size: 10, topping: ['pepperoni', 'jalapenos']}

Test2: It should not adjust price if no topping is added.
Code: 
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza.addTopping();
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza {quantity: 0, price = 10, size: 10, topping: undefined}
```
```
Describe Pizza.prototype.addQuantity(quantityToAdd)

Test1: It should add to the quantity
Code: 
pizza.addQuantity(1);
pizza;
Expected Output: Pizza {quantity: 1, price = 0,}
```
```
Describe Pizza.prototype.addPriceBasedOnQuantity()

Test1: It should adjust the price based on quantity
Code: 
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza.addTopping(["pepperoni", "jalapenos"]);
pizza.addPriceBasedOnTopping();
pizza.addQuantity(2);
pizza.addPriceBasedOnQuantity();
pizza;
Expected Output: Pizza {quantity: 2, price = 28, size: 10, topping: ['pepperoni', 'jalapenos']}
```
```
Describe Customer()

Test1: It should create an Customer object;
Code: 
let customer = new Customer();
customer;
Expected Output: Customer {}
```
```
Describe Customer.prototype.pickUpOrDelivery()

Test 1: It should add property pickUpOrDelivery with value of string "pick up"
Code:
customer.pickUpOrDelivery("pick up");
customer;
Expected Output: Customer {pickUpOrDelivery: "pick up"}
```
```
Describe Customer.prototype.nameAndCallBack()

Test 1: It should add property nameOnOrder and phoneNumber with string values
Code:
customer.nameAndCallBack("bobithy", "555 555 5555");
customer;
Expected Output: Customer {nameOnOrder: "bobithy", phoneNumber: "555 555 5555"}
```
```
Describe Customer.prototype.addDeliveryAddress()

Test 1: It should add address object to Customer Object and add street address, city, state, zip code into address object
Code:
customer.addDeliveryAddress("1119 Rich People Street", "Queens", "NY", 41233);
customer;
Expected Output: 
Customer {address: {streetAddress: '1119 Rich People Street', city: 'Queens', state: 'NY', zipCode: 41233}}
```
```
Describe Pizza.prototype.addPizza()

Test1: It should add a property called customerPizza to Customer object.
Code: 
customer.addPizza(pizza);
customer;
Expected Output: Customer {customerPizza: Pizza{quantity: 1, price: 0}}
```
```
Describe Order()

Test1: It should create an Order object with totalNumberOfOrders property set to 0 and orderNumber = {}
Code: 
let order = new Order();
order;
Expected Output: Order {orderNumber: {}, totalNumberOfOrders: 0}
```
```
Describe Order.prototype.addCustomer()

Test1: It should add customer object into order.orderNumber property
Code: 
order.addCustomer(customer);
order;
Expected Output: Order {orderNumber: Customer {}, totalNumberOfOrders: 0 }

Test2: It should assign incremented totalNumberOfOrders to each customer each time we add customer
Code: 
order.addCustomer(customer);
order;
Expected Output: Order {orderNumber: {1: Customer{}}, totalNumberOfOrders: 1 }
```
```
Describe Order.prototype.assignOrderNumber()

Test1: It should increment totalNumberOfOrders property by 1 and return it
Code: 
order.assignOrderNumber();
order;
Expected Output: Order {orderNumber: Customer {}, totalNumberOfOrders: 1}
```
```
Describe Order.prototype.addPizza()

Test1: It should increment totalNumberOfOrders property by 1 and return it
Code: 
order.addPizza(pizza);
order;
Expected Output: Order {orderNumber: Customer {}, totalNumberOfOrders: 1}
```
## Known bugs
* _No known bugs_.

## Contributing
_Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change_.  
  
Feel free to contact me through <noh24@ymail.com>.

## License
[MIT](./license.txt) License  
Copyright (c) _2022 Brian Noh_