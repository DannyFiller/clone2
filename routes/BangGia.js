const bangGiaController=require("../controllers/BangGiaController")
const router=require("express").Router();

router.get("/",bangGiaController.getBangGia);
router.get("/locTheoLoai/:loai/:ngay",bangGiaController.locTheoLoai);
module.exports=router;