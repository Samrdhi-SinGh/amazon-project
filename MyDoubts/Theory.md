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