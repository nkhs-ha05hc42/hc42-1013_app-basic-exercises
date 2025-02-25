const get8_1_1 = (req, res) => 
{
    const code = req.query.code;
    res.send(
    JSON.stringify(
    {
        code: code,
        name: "情報太郎"
    }),
    )
}

const post8_1_2 = (req, res) =>
{
    const { code,postcode,address } = req.body
    console.log({
        code,
        postcode,
        address
    })
    res.send(JSON.stringify({ status: "OK" ,postcode: postcode }))
}

const put8_1_3 = (req, res) =>
{
    const { code,postcode,address } = req.body
    console.log({
        code,
        postcode,
        address
    })
    res.send(JSON.stringify({ status: "OK" ,postcode: postcode }))
}

const delete8_1_4 = (req, res) => 
{
    res.send(JSON.stringify({ status: "OK", code: req.query.code }))
}

export const q8_1Controller = 
{
    get8_1_1,
    post8_1_2,
    put8_1_3,
    delete8_1_4,
}
