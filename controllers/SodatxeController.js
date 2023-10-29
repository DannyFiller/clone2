const {json} = require("body-parser");
const {SoDatXe} = require("../model/model");
const { param } = require("../routes/SoDatXe");

const sodatxeController = {
    //thêm sổ đặt xe
    addSo : async(req,res) =>{
        try {
            const newSoDat = new SoDatXe(req.body);
            const saveSoDat = await newSoDat.save();
            res.status(200).json(saveSoDat);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    //lấy hết tất cả sổ xe
    getAllSo : async(req,res) =>{
        try {
            const getSo = await SoDatXe.find();
            res.status(200).json(getSo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Sửa thông sổ
    editSo : async(req,res) =>{
        try {
            const idSoDatXe = req.params.id;
            const{MaSo,BienSoXe,TenTaiKhoan,NgayThueXe,NgayTraXe,GiaThueXe,HinhAnh} = req.body;
            const updateSo = await SoDatXe.findByIdAndUpdate(idSoDatXe,{MaSo,BienSoXe,TenTaiKhoan,NgayThueXe,NgayTraXe,GiaThueXe,HinhAnh},{new : true});
            res.status(200).json(updateSo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Xóa thông tin sổ
    deleteSo : async(req,res) =>{
        try {
            const xoaSoDatXe = await SoDatXe.findByIdAndDelete(req.params.id);
            res.status(200).json(xoaSoDatXe);
        } catch (error) {
            
        }
    }
}

module.exports = sodatxeController;