function createPromise()
{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("resolved");
        }, 1000);
    });
}
// function display()
// {
//     createPromise().then((msg)=>console.log(msg))
//     .catch((err)=>console.log(err));
// }
async function display(){
    try{
        let result=await createPromise();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
display();