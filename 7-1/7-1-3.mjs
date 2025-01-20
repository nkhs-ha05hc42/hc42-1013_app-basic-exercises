const ar = ["A", "B"]
const x = (a,b) => 
{
    // a[2] = b
    a.push(b)
}

x(ar, "C")
console.log(ar)