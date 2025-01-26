const pto = (timeout) =>
    new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve()
        }, timeout)
    })

    const pA = () => 
    {
        pto(2000)
        .then(() => 
        {
            console.log("★", new Date())
            return pto(3000)
        })
        .then(() => 
        {
            console.log("◆", new Date())
            return pto(5000)
        })
        .then(() => 
        {
            console.log("end", new Date())
            return pto(1000)
        })
   }

   console.log("start", new Date())
   pA()