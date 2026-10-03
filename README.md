# DGL 113 2026WI Assignment #3

Create a new file in the `docs` folder called `app.js`.

At the top of the `docs/app.js` file, add the `use strict` directive:

```javascript
'use strict';
```

Add a `<script>` element to the `index.html` file to include the `app.js` script.
Place the `<script>` element just before the closing `</body>` tag just like
the script element that is used to include the `main.js` script.

In your `app.js`, create the following global variables:

- `quantities`: this will be an array of all of the quantities
  for each item in the list
- `unitPrices`: this will be an array of all the unit prices
  for each item in the list
- `descriptions` this will be an array of all the descriptions
  for each item in the list
- `totalCost` this will be the total cost of the items currently
  in the list

Create the following functions:

- `addItem(quantity,unitPrice,description)`: adds an item to the grocery list.
  You will have to add an element to the end of each array and
  to update the value in `totalCost`. HINT: all parameter values are extracted directly from the webpage textfields as strings. When they are added to arrays, proper data types are expected.
- `deleteItem(index)`: deletes the item at position `index` in the grocery list.
  `index` is 0-based, so 0 means the first item, 1 means the second item, and
  so on. You will have to update all the arrays accordingly as well as
  updating the value in `totalCost`.

NOTE: Only modify the `docs/app.js` and `docs/index.html` files. Do not make changes to any other files.
