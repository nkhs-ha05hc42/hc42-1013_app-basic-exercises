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

const get9_7_2 = async (req, res) => 
{
    const { id } = req.params;
  
    try
    {
      const exam = await q9_7model.get9_7_2(id);
  
      if (!exam)
    　{
        return res.status(404).json({ status: "not found" });
      }
  
      res.json({ status: "success", data: exam });
    } catch (error) 
    {
      res.status(500).json({ status: "error", message: error.message });
    }
}
  
const post9_7_3 = async (req, res) => 
{
    const { user_id,year,month,day,name,score } = req.body;
    if (!user_id || !year || !month || !day || !name || score === undefined) 
    {
        return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7model.post9_7_3(user_id,year,month,day,name,score)
    res.send(JSON.stringify({ status: "success", data: result }))
}

const put9_7_4 = async (req, res) => 
{
    const id = req.params.id
    const { user_id,year,month,day,name,score } = req.body;
    if (!user_id || !year || !month || !day || !name || score === undefined) 
    {
        return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7model.update9_7_4(id, user_id,year,month,day,name,score )
    if (!result)
    {
        return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
}

export const q9_7Controller =
{
    getOne9_7_1,
    getAll9_7_1,
    get9_7_2,
    post9_7_3,
    put9_7_4,
}