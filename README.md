# Object Literals & Advanced Objects 

## Lab Prompt
### Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

## ~What I learned~

### Object Literals 
* Objects store collections of key-value pairs.
* Each key-value pair is a property—when a property is a function it is known as a method.
* An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
* You can access, add or edit a property within an object by using dot notation or bracket notation.
* We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
* We can navigate complex, nested objects by chaining operators.
* Objects are mutable—we can change their properties even when they’re declared with const.
* Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
* We can iterate through objects using the For...in syntax.

### Advanced Objects
* The object that a method belongs to is called the calling object.
* The this keyword refers the calling object and can be used to access properties of the calling object.
* Methods do not automatically have access to other internal properties of the calling object.
* The value of this depends on where the this is being accessed from.
* We cannot use arrow functions as methods if we want to access other internal properties.
* JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
* The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
* Setters and getter methods allow for more detailed ways of accessing and assigning properties.
* Factory functions allow us to create object instances quickly and repeatedly.
* There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
* As with any concept, it is a good skill to learn how to use the documentation with objects!