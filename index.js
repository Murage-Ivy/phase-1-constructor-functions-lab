function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model
}

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}
const one = new Scooter(2015, "red", "swoosh")
console.log(one.color)
