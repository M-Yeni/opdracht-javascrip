// 1
const person = {
  name: "Mustafa",
  age: 18,
  hobbies: ["voetbal", "slapen", "eten"],
};

const personJSON = JSON.stringify(person);
console.log(personJSON);

// 2

const jsonString =
  '{"name": "Mustafa", "age":17, "hobbies": ["slapen","voetballen"]}';
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);

console.log(parsedPerson.name);
console.log(parsedPerson.hobbies[1]);

// 3
localStorage.setItem("person", personJSON);

// 4

const storedPersonJSON = localStorage.getItem("person");
console.log(storedPersonJSON);

const storedperson = JSON.parse(storedPersonJson);
console.log(storedperson);

console.log(storedPerson.name);
console.log(storedPersonJSON.hobbies);

// 5

const tasks = [
  {
    id: 1,
    description: "Boodschappen doen",
    completed: false,
  },
  {
    id: 2,
    description: "Code schrijven",
    completed: true,
  },
  {
    id: 3,
    description: "Sporten",
    completed: false,
  },
];

const tasksJSON = JSON.stringify(tasks);
localStorage.setItem("tasks", tasksJSON);

const storedTasksJSON = localStorage.getItem("tasks");
const storedTasks = JSON.parse(storedTasksJSON);
console.log(storedTasks);

storedTasks.forEach(task => console.log(task.description));