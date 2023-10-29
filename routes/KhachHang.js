const KhachHangController=require("../controllers/KhachHangController")
const router=require("express").Router();

router.post("/",KhachHangController.addKhachHang);
router.get("/",KhachHangController.getAllKhachHang);

module.exports=router;