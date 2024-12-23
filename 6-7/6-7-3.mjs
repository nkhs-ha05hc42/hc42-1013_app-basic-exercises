const values = ["A", "B", "A", "C", "A"]
const valueSet = new Set(values)
const num = []
for (const value of valueSet) 
{
    num.push(value)
}
console.log(num)