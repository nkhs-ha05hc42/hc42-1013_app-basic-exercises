export * from "./sample1/controller.mjs"
export * from "./8-1/q8_1Controller.mjs"

const get8_1_1 = (req, res) => 
{
    const code = req.query.code;
    res.send(
    JSON.stringify(
    {
        code: req.query.code,
        "name": "情報太郎"
    }),
    )
}
    
export const q8_1Controllers = 
{
    get8_1_1,
}