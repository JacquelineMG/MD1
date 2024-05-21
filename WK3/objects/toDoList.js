// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    
    completeTask: function() {
      this.complete = true;
    },
  
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

task2.logTaskState();
task2.completeTask();
task2.logTaskState();


console.log(tasks);