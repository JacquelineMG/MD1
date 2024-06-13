class TaskList {
  constructor() {
    this.list = [];
  }

  addNewTask(taskName) {
    this.list.push({
      taskName: taskName,
      completed: false
    });
  }

  completeTask(taskName) {
    for (let t of this.list) {
      if (t.taskName === taskName) {
        t.completed = true;
      }
    }
  }

  removeTask(taskName) {
    this.list = this.list.filter(task => task.taskName !== taskName);
  }
}

const myTask = new TaskList();

myTask.addNewTask("wash socks");
myTask.addNewTask("wash dishes");
myTask.addNewTask("read book");
myTask.addNewTask("make food");
myTask.addNewTask("wash dishes");

console.log(myTask);

myTask.completeTask("wash socks");
myTask.removeTask("wash dishes");
console.log(myTask);


////////////////////////////////////////
/*
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
*/