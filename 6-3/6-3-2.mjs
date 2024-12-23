const arrayNums = [10,-2,101,76]

console.log(arrayNums.every(value => value >= 50))

const arrayNums2 = arrayNums.map(array => array + 100)

console.log(arrayNums2.every(value => value >= 50))