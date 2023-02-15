/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinius.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */
const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

function filterDogOwners(users) {
  console.log("Filtering dog owners");
  return users.filter((user) => user.hasDog);
}

function filterAdults(users) {
  console.log("Filtering adults");
  return users.filter((user) => user.age >= 18);
}

function showDogOwners() {
  console.log("Showing dog owners");
  const dogOwners = filterDogOwners(users);
  const dogOwnersList = document.getElementById("dogOwnersList");
  dogOwnersList.innerHTML = "";
  for (let i = 0; i < dogOwners.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogOwners[i].name;
    dogOwnersList.appendChild(li);
  }
  console.log("Dog owners:", dogOwners);
}

function showAdults() {
  console.log("Showing adults");
  const adults = filterAdults(users);
  const adultsList = document.getElementById("adultsList");
  adultsList.innerHTML = "";
  for (let i = 0; i < adults.length; i++) {
    const li = document.createElement("li");
    li.textContent = adults[i].name;
    adultsList.appendChild(li);
  }
  console.log("Adults:", adults);
}
