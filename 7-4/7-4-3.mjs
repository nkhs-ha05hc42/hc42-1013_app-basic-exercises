const number = (num) => 
{
    console.log("view", num, new Date())
}
const x = (num, callbackFunc) => 
{
    setTimeout(() => {
    console.log("★")
    callbackFunc(num)
}, 2000)

setTimeout(() => 
{
    console.log(" ◆ ")
    callbackFunc(num)
}, 5000)

setTimeout(() => 
{
    console.log("end", new Date())
},10000)

}

console.log("start", new Date())
x(12, number)