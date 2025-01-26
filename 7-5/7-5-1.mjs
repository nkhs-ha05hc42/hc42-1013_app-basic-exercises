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
            return pto(10000)
        })
        .then(() => 
        {
            console.log("◆", new Date())
            return pto(20000)
        })
    }

   console.log("start", new Date())
   pA()
   console.log("end", new Date())