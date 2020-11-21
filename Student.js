"use strict";
exports.__esModule = true;
var getMagicNumber_1 = require("./getMagicNumber");
var Student = /** @class */ (function () {
    //  name:string;
    //  age:number;
    function Student(name, age) {
        this.name = name;
        this.age = age;
        // this.name=name;
        // this.age=age;
    }
    Student.prototype.getDetails = function () {
        console.log("name is " + this.name + " and age is " + this.age);
    };
    return Student;
}());
//objects
var student1 = new Student("xxx", 12);
student1.getDetails();
console.log("magic number is " + getMagicNumber_1.getLunckyNumber());
