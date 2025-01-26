const number = (num) =>
{
    console.log("view", num, new Date())
}

const x = (num, callbackFunc) => 
{
    const a = 1
    const b = 2

    setTimeout(() =>
    {
        const c = a + b
        console.log(c)
        callbackFunc(num)
    }, 2000)

    setTimeout(() => 
    {
        console.log("end", new Date())
    }, 3000)

}

console.log("start", new Date())
x(12, number)