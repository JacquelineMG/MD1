class Pizza {
  constructor() {
    this.toppings = [];
  }

  addTopping(topping) {
    if (this.toppings.indexOf(topping) > -1) {
      return false;
    }
    this.toppings.push(topping);
    return true;
  }
}


const myPizza = new Pizza();

console.log(myPizza);

console.log(myPizza.addTopping("mushrooms"));
console.log(myPizza.addTopping("onions"));
console.log(myPizza.addTopping("spinach"));
console.log(myPizza.addTopping("mushrooms"));

console.log(myPizza);

