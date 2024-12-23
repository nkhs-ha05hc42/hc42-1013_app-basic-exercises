const arrayNums = [10,-2,101,76]

console.log(arrayNums.some(value => value < 0))

const arrayNums2 = arrayNums.map(array => array + 110)

console.log(arrayNums2.some(value => value < 0))