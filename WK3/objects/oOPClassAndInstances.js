class Pizza {

  constructor(size, crust, dipSauce) {
    this.size = size,
    this.crust = crust,
    this.dipSauce = dipSauce,
    this.toppings = ["tomato sauce"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizza1 = new Pizza("large", "thin", "ranch");
let pizza2 = new Pizza("medium", "regular", "none");

// console.log(`Pizza is a`, typeof Pizza);
// console.log(`pizza is an`, typeof pizza1);
// console.log(pizza1 !== pizza2);

console.log(`pizza1:`, pizza1);
console.log(`pizza2:`, pizza2);

pizza1.addTopping("onions");
pizza1.addTopping("peppers");

pizza2.addTopping("mushrooms");
pizza2.addTopping("pine nuts");
pizza2.addTopping("spinach");

console.log("----------------------------------");
console.log(`pizza1:`, pizza1);
console.log(`pizza2:`, pizza2);