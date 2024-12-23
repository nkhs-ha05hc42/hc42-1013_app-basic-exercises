let a = 0,b = 0

for (let num = 1; num <= 100; num++)
{
    if(b > 50)
    {
        break
    }
    if(num % 2 === 0)
    {
        b = b + num
    }
    a++
}
console.log(a + "回,合計" + b)