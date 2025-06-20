const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}
// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "hungdepzai");

// Styled
// console.log('%c I am some great text', 'font-size: 50px; color: red');

// warning!
console.warn("oh noo");
// Error :|
console.error("shit!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together, what you are looking for you can find it in group
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("wes");
console.count("wes");
console.count("steve");
console.count("steve");
console.count("wes");
console.count("wes");
console.count("steve");
console.count("steve");
// timing

console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
