# Pizza Palace
### Independent Project for Epicodus, 04.01.2017
### By **Jessica Robertson**
## Description
This is a HTML document created for an independent project used as practice under the guidance of Epicodus.  It serves as a pizza order form that uses JavaScript and JQuery with arrays and looping to add up the number of toppings and uses branching to determine the price of the pizza.

## Behavior Driven Specs

**The program will add $5 to the order total when a medium-sized pizza is selected.**

- Example Input: Medium
- Example Output: "5"

**The program will add $7 to the order total when a large-sized pizza is selected.**

- Example Input: Large
- Example Output: "7"

**The program will add $10 to the order total when a family-sized pizza is selected.**

- Example Input: Family-Size
- Example Output: "10"

**The program will "charge" the base price of the pizza if no toppings are ordered.**

- Example Input: Large, no toppings selected
- Example Output: "7"

**The program will recognize all meat toppings ordered and add 2 dollars to the total price for each.**

- Example Input: Pepperoni, Black Forest Ham
- Example Output: 2+2 = "4"

**The program will recognize all veggie toppings ordered and add 1 dollar to the total price for each.**

- Example Input: Pineapple
- Example Output: "1"

**The program will recognize all veggie toppings and meat toppings ordered and add the correct dollar amount (2 for meat, 1 for veggie) to the total price for each.**

- Example Input: Spinach, Black Olives, Capicola Salami, Bacon
- Example Output: 1+1+2+2 = "6"

**The program will total the toppings with the price of the pizza size and return the total pizza price when the form is submitted.**

- Example Input: Medium, Spinach, Black Olives, Capicola Salami, Bacon
- Example Output: 5+6 = "11"

**The program will use a prototype to display a summary of the ordered pizza.**

- Example Input: Medium, Spinach, Black Olives, Capicola Salami, Bacon
- Example Output: "Based off of the information you've given us, you've ordered a Medium Pizza with the following toppings: Black Olives, Spinach, Capicola Salami, Bacon"


## Setup
Clone this repository from [GitHub] (https://jessica-wabbit.github.io/pizza-palace/), then open the index.html file in your browser.
## Technology
HTML, CSS, Bootstrap, JavaScript, and JQuery-3.2.0.js
## Legal
Copyright (c) 2017 Jessica Robertson
This software is licensed under the GPL license.
