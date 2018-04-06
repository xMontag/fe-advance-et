//console.log("ss");
let user1 = {
  name  : "petro",
  age   : 30,
  speed : 12,
  run(s) { return s / this.speed; },
  add   : (a, b) => a+b
}


let {name : k, ag = "kk"} = user1;

console.log(k, ag);

console.log('speed' in user1);
console.log(user1.speed);
console.log(user1.add(2,4));

function Human(name, age) {
  this.name = name || "unemed";
  this.age = age;
}

let john = new Human("John", 30);

console.log(john.name);

petro = Object.create(john);

console.log(petro.name);

//petro.name = 'Petro';

console.log(petro.name);

//delete john.name;

console.log(petro.name);

console.log(Object.keys(petro));
console.log(Date.now());

date = new Date();
console.log(date.getTime());
console.log(date.getTime());
console.log(date.getTime());
