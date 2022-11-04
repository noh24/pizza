# Pizza Parlor Project
By Brian Noh
Epicodus Independent Project: Pizza Parlor Project   
_Currently not deployed_: [Check out the project here](noh24.github.com/pizza/)

## Technologies Used  
* HTML
* CSS
* JavaScript
* Web API

## Description
Welcome to the New York Style Pizza Parlor!  
The owner, yours truly, traveled the whole world trying pizza in all countries.  
He was inspired to make his own pizza restaurant after trying New York-style pizza.  
Customers select from a wide variety of specialty New York-style pizzas or customize their own!  
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
const pizza = new Pizza();
Expected Output: Pizza {quantity: 1, price = 0}
```
```
Describe Pizza.prototype.addSize()

Test1: It should add a property called size to Pizza object.
Code: 
pizza.addSize(10);
pizza;
Expected Output: Pizza {quantity: 1, price = 0, size: 10}
```
```
Describe Pizza.prototype.addTopping()

Test1: It should add a property called topping to Pizza object.
Code: 
pizza.addTopping(["pepperoni", "jalapenos"]);
pizza;
Expected Output: Pizza {quantity: 1, price = 0, size: 10, topping: ['pepperoni', 'jalapenos']}
```
```
Describe Pizza.prototype.addPriceBasedOnSize()

Test1: It should add a property called price to Pizza object.
Code: 
pizza.addSize(10);
pizza.addPriceBasedOnSize(15);
pizza;
Expected Output: Pizza {quantity: 1, price = 15, size: 10, topping: ['pepperoni', 'jalapenos']}

Test2: It should adjust price based on pizza size, 10 , 14, 18.
Code:
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza;
Expected Output: Pizza {quantity: 1, price = 10, size: 10, topping: ['pepperoni', 'jalapenos']}
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
Expected Output: Pizza {quantity: 1, price = 14, size: 10, topping: ['pepperoni', 'jalapenos']}

Test2: It should not adjust price if no topping is added.
Code: 
pizza.addSize(10);
pizza.addPriceBasedOnSize();
pizza.addTopping();
pizza.addPriceBasedOnTopping();
pizza;
Expected Output: Pizza {quantity: 1, price = 10, size: 10, topping: undefined}
```
```
Describe Customer()

Test1: It should create an Customer object with property of currentId = 0;
Code: 
const customer = new Customer();
customer;
Expected Output: Customer {currentId: 0}
```

## Known bugs
* _No known bugs_.

## Contributing
_Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change_.  
  
Feel free to contact me through <noh24@ymail.com>.

## License
[MIT](./license.txt) License  
Copyright (c) _2022 Brian Noh_