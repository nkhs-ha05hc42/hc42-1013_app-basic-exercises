import { q9_7model } from "./q9_7Model.mjs"

const getOne9_7_1= async (req, res) => 
{
    const id = req.params.id
    if (!id) 
    {
        return res.send(JSON.stringify({ status: "error" }))
    }

    const result = await q9_7model.selectOne(id)
    
    if (!result)
    {
        return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
}
    
const getAll9_7_1 = async (req, res) =>  
{
    const result = await q9_7model.selectAll()
    res.send(JSON.stringify({ status: "success", list: result }))
}

export const q9_7Controller =
{
    getOne9_7_1,
    getAll9_7_1,
}