import express from "express"
import path from "path"

import { sample1Controller, sample2Controller } from "./api/controllers.mjs"
import { q8_1Controller } from "./api/controllers.mjs"
import { q8_2Controller } from "./api/controllers.mjs"
import { q8_3Controller } from "./api/controllers.mjs"

import { q9_7Controller } from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/sample1", sample1Controller.getSample1)

//8-1
routers.get("/api/8-1", q8_1Controller.get8_1_1)
routers.post("/api/8-1", q8_1Controller.post8_1_2)
routers.put("/api/8-1", q8_1Controller.put8_1_3)
routers.delete("/api/8-1", q8_1Controller.delete8_1_4)

//8-2
routers.get("/api/8-2", q8_2Controller.get8_2_1)
routers.post("/api/8-2", q8_2Controller.post8_2_2)
routers.put("/api/8-2", q8_2Controller.put8_2_3)
routers.delete("/api/8-2", q8_2Controller.delete8_2_4)

//8-3
routers.get("/api/8-3", q8_3Controller.get8_3_1)
routers.get("/api/8-3", q8_3Controller.get8_3_2)

//sample2
routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)
routers.put("/api/sample2/:id", sample2Controller.putSample2)
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

//9-7
routers.get("/api/9-7/:id", q9_7Controller.getOne9_7_1)
routers.get("/api/9-7", q9_7Controller.getAll9_7_1)
routers.get("/api/9-7", q9_7Controller.get9_7_2)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers