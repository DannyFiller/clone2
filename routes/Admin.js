const quanLiController=require("../controllers/QuanLiController");
const router=require("express").Router();

//Them xe
router.post("/",quanLiController.addAccount);
router.get("/",quanLiController.getAllAccount);
//update xe
router.put("/:id",quanLiController.updateAccount);
module.exports=router;
