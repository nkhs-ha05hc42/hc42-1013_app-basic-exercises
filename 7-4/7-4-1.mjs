const number = (num) =>
{
    console.log("view", num, new Date())
}
const x = (num, callbackFunc) => 
{
    setTimeout(() => 
    {
        console.log("★")
        callbackFunc(num)
    }, 10000)
    
    setTimeout(() =>
    {
        console.log(" ◆ ")
        callbackFunc(num)
    }, 20000)
}

console.log("start", new Date())
x(12, number)
console.log("end", new Date())