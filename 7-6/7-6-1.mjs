const pto = (timeout) =>
    new Promise((resolve) =>
    {
        setTimeout(() => resolve(), timeout)
    })
    const pA = async () => 
    {
        await pto(10000)
        console.log("★", new Date())
    }
    const pB = async () =>
    {
        await pto(20000)
        console.log("◆", new Date())
    }

    const PA = async () => 
    {
        const [result1, result2] = await Promise.all([pA(), pB()])
    }

    console.log("start", new Date())
    pA()
    console.log("end", new Date())