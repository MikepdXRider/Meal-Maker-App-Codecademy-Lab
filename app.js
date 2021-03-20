//Declare an object as menu.
const menu = {
    //Nest an object within menu.
    _courses: {
      //Nest three arrays within courses.
      appetizers:[],
      mains:[],
      desserts:[]
    },
    //Get and Set for each course array.
    get appetizers(){
      return this._courses.appetizers
    },  
    set appetizers(appetizerIn){
      this._courses.appetizers.push(appetizerIn);
    },
    get mains(){
      return this._courses.mains
    },
    set mains(mainIn){
      this._courses.mains.push(mainIn);
    },
    get desserts(){
      return this._courses.desserts
    },
    set desserts(dessertIn){
     this._courses.mains.push(dessertIn);
    },
    //Get for courses.
    get courses() {
      //Step 6
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    //Method to add a Dish to the arrays nested within the courses object.
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        dishName,
        dishPrice,
      }
     this._courses[courseName].push(dish);
    },
    //Method to retrieve a random dish from a provided course arguement.
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return this._courses[courseName][randomIndex];
    },
    //Method to generate a random meal, providing arguements to getRandomDishFromCourse for each array within courses. Method accesses object prices within arrays. Returns a three course meal with priceing.
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse("appetizers");
      const main = this.getRandomDishFromCourse("mains");
      const dessert = this.getRandomDishFromCourse("desserts");
      const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return `Tonight's three course meal: ${appetizer.dishName} appetizer, featuring a ${main.dishName} entree, and ${dessert.dishName} for dessert. The total will be $${totalPrice} dollars.`
    }
  };
  
  //TESTS!!
  /*
  menu.addDishToCourse("appetizers", "Grilled Asparagus", 8); // Add an object to appetizers array.
  console.log(menu._courses.appetizers); // Tests addDishToCourse method. Should return [ { dishName: 'Grilled Asparagus', dishPrice: 8 } ]
  
  console.log(menu.getRandomDishFromCourse("mains")); // Tests getRandomDishFromCourse should return an object within the mains array. Should return undefined
  
  menu.appetizers = "applesauce"; //pushes an appetizers array property using the setter method.
  console.log(menu.appetizers); //confirm applesauce push to array.
  menu.appetizers.pop(); //removes applesauce using pop method
  console.log(menu.appetizers); //confirm applesauce pop from array
  */
  
  //Step 12
  menu.addDishToCourse("appetizers", "Grilled Asparagus", 8)
  menu.addDishToCourse("appetizers", "Fried Zuchini", 7);
  menu.addDishToCourse("appetizers", "Chicken Nuggets", 5);
  menu.addDishToCourse("mains", "Beef Wellington", 11);
  menu.addDishToCourse("mains", "Pasta Agolio", 13);
  menu.addDishToCourse("mains", "Black Bean Soup", 15);
  menu.addDishToCourse("desserts", "Apple Pie", 15);
  menu.addDishToCourse("desserts", "Chocolate Cake", 13);
  menu.addDishToCourse("desserts", "Tiramisu", 14);
  
  // console.log(menu.courses); // Test lines 72 thru 80.
  
  //Invoke the generateRandomMeal method within a variable. Log the variable to console.
  const meal = menu.generateRandomMeal();
  console.log(meal); 
  