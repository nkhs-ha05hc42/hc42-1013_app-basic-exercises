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
  

export const q9_7Controller =
{
    getOne9_7_1,
    getAll9_7_1,
    get9_7_2,
}