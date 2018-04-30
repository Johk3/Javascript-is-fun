let myApp = angular.module("myApp", []);

myApp.controller("mainController", ($scope)=>{

});
var searchPeople = function(firstName, lastName, height, age, occupation){
	return "jane doe";
}
console.log(searchPeople)
/*var Person = function(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

function logPerson(person){
	console.log(person)
}
var john = new Person("john", "doe");
logPerson(john);*/