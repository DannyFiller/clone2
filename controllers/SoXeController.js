const {SoXe}=require('../model/model');

const SoXeController={
    addSoXe:async(req,res)=>{
        try{
            const newSoXe=new SoXe(req.body);
            const saveSoXe=await newSoXe.save();
            res.status(200).json(saveSoXe);
        }catch(err){
            res.status(500).json(err);
        }    
    },
    getAllSoXe:async(req,res)=>{
        try{
            const SoXes=await SoXe.find().populate(["KhachHang","Xe"]); //pupulate lấy tất các thông khách hàng và xe
            res.status(200).json(SoXes);
        }catch(err){
            res.status(500).json(err);
        }
    },
    updateSoXe:async(req,res)=>{
        try{
            const Soxe=await SoXe.findById(req.params.id);
            await Soxe.updateOne({$set:req.body});
            res.status(200).json("updateSuccess");
        }catch(err){
            res.status(500).json(err);
        }    
    },
    
}
module.exports=SoXeController;