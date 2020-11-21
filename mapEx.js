// const { ContextExclusionPlugin } = require("webpack");

const arr=[1,2,3,4,5];
const result=arr.map(num=>num*2);
console.log(result);
console.log(arr);


const result=arr.reduce((a,n)=>a+n);
console.log(result);
