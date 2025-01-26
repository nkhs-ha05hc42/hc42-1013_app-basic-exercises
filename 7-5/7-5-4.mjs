const pt = (num) =>
    new Promise((resolve) => {
    resolve("Test1")
    })
   const pA = () => {
    pt()
    .then((num) => {
    console.log(num)
    return pt(num)
    })
    .then((num) => {
    console.log("New" + num)
    return pt(num)
    })
   }
   pA()