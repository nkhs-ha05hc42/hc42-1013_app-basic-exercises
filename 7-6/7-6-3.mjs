const pto = (timeout) =>
    new Promise((resolve) => 
    {
        setTimeout(() => resolve(), timeout)
    })
    const ptA = async () => 
    {
        await pto(2000)
        console.log("★", new Date())
    }
    const pB = async () =>
    {
        await pto(5000)
        console.log("◆", new Date())
    }
    const pC = async () =>
    {
        await pto(5100)
        console.log("end", new Date())
    }
    const pA = async () => 
    {
        const [result1, result2, result3] = await Promise.all([ptA(), pB(), pC()])
        console.log(result1,result2,result3)
    }
    console.log("start", new Date())
    pA()