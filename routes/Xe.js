const xeController = require("../controllers/XeController");

const router = require("express").Router();

//Thêm xe
router.post("/",xeController.addXe);
//lấy tất cả xe
router.get("/",xeController.getAllXe);
//lấy 1 xe
router.get("/:tenxe",xeController.getXe);
//xóa xe
router.delete("/:id",xeController.deleteXe);
//sửa thông tin xe
router.put("/:id",xeController.updateXe);
//search theo loại xe
router.get("/LoaiXe/:loaixe",xeController.getLoaiXe);

module.exports = router;

