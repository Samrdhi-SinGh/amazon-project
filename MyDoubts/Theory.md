toFixed(): Used in numbers, we use it to get the number of digitd we want after decimal in a number.
Like; there is 10.9 and we want 10.90. So we do
((10.9).toFixed(2)) -> 10.90

- 2 here is for 2 digits after decimal.

Benefit of Generating the HTML in JS:
If we want to add new product in the page, we don't have to rewrite all the html code, we just have to add ṭhe product in array in js and it will be generated.

Data Attribute: is another HTML attribute which allows us to attach any information to an element.

Syntax of data attribute:
- is just an HTML attribute.
- have to start with "data-" always
- then give it any name.

Like: data-product-name = "${product.name}"
         name(kebab case)      v alue

Element.dataset property: Gives all the data attribute attached to the element.

**Modules**: *A better way to organise our code.*

Using script tag their is a problem: naming conflict.
Means, if we wanna create a variable or anything which is same to something in another variable, then it causes an error and the website to break.

When we use model, we import a file into another would be no error. Because model will contain all the names or variables inside the file not letting have name conflicts happen.

**Create a module:**
1. Create a file.
2. Don't load the file with <script>

  - Any variables we create inside the file, will be contained inside the file.

  **Get a Variable Out of a file:**

  1. Add type="module" attribute: Let's the file which contains this attribute get variables out of other files.
  2. Export
  3. Import

  **About modules:**
  1. Put all imports at the top of the file.
  2. We need to use Live server in order for the modules to work.

**Benefits of  odules:**
1. Avoid naming conflicts.
2. Don't have to worry about orders of files.

- The name conflict will happen if we use same variable name we imported.
To solve this problem, modules have another feature, just do,
import {cart as myCart} from ......;  

So here the cart will be taken as myCart in this file its imported.