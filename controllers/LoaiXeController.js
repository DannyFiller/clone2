const {Xe}=require("../model/model");

const LoaiXeController={
    getAllLoaiXe:async(req,res)=>{
        try{
            const xe=await Xe.distinct("LoaiXe");
            res.status(200).json(xe);
        }catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports=LoaiXeController;