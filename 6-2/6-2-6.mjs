const arrayTexts = ['A','Test','Array']

arrayTexts[1] = 'NewTexts'
const arrayTexts2 = [ ...arrayTexts ]

console.log(arrayTexts2[0])
console.log(arrayTexts2[1])
console.log(arrayTexts2[2])