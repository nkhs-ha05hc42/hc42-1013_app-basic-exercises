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

export const q8_1Controller = 
{
    get8_1_1,
}
