const SoXeController=require("../controllers/SoXeController");
const router=require("express").Router();

//Them xe
router.post("/",SoXeController.addSoXe);
router.get("/",SoXeController.getAllSoXe);
router.put("/:id",SoXeController.updateSoXe);
module.exports=router;
