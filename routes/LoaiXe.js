const LoaiXeController=require("../controllers/LoaiXeController");

const router=require("express").Router();

router.get("/",LoaiXeController.getAllLoaiXe);
module.exports = router;
