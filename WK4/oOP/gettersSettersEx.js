class Pizza {
  constructor(size, crust, dipSauce) {
    this.size = size,
    this.crust = crust,
    this.dipSauce = dipSauce,
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return `Your pizza will be: $${basePrice + (this.toppings.length * toppingPrice)}.`;
  }

  set size(size) {
    if (size === 'small' || size === 'medium' || size === 'large') {
      console.log(`Size set to: ${size}.`);
      this._size = size;
    } else {
      console.log(`Sorry, ${size} is not a valid size.`);
    }
  }

  get size() {
    return this._size;
  }
}

const pizza1 = new Pizza('small', 'regular', 'pesto');

pizza1.size = 'medium';

pizza1.size;

pizza1.size = 'sfiosfjso';

console.log(pizza1.price);

pizza1.addTopping("peppers");
pizza1.addTopping("onions");
pizza1.addTopping("roasted garlic");

console.log(pizza1.price);
