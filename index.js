// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
 drivers.push(name); 
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver() {
  drivers.pop([4])
}
function destructivelyRemoveFirstDriver() {
  drivers.shift([0])
}
function appendDriver(name) {
  return [...drivers, name]
}
function prependDriver(name) {
  return [name,...drivers]
}
function prependDriver(name) {
  return [name,...drivers]
}