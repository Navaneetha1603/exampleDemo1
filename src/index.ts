
import {getLuckyNumber} from './getMagicNumber';
import '../css/style.css';
// const getLuckyNumber=require("./getMagicNumber");
class Student{
    //  name:string;
    //  age:number;
    constructor(public name:string,public age:number){
        // this.name=name;
        // this.age=age;
    }
    getDetails():void{
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
}
//objects
let student1:Student=new Student("xxx",12);
student1.getDetails();
console.log(`magic number is ${getLuckyNumber()}`);