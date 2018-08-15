// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver() {
 drivers.push("Ralph"); 
}
function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver() {
  drivers.pop([4])
}
function destructivelyRemoveFirstDriver() {
  drivers.pop([0])
}