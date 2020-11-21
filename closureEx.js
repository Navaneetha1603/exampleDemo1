var a=10;
function first_func(){
    var b=10;
    function second_func(){
        b++;
        var sum=a+b;
        // sum++;
        return sum;
    }
    return second_func();
}
var sum=first_func();
console.log(sum);
// console.log(sum);