const {QuanLi}=require("../model/model")

const quanLiController={
    addAccount:async(req,res)=>{
        try{
            const newAccount=new QuanLi(req.body);
            const saveAccount=await newAccount.save();
            res.status(200).json(saveAccount);
        }catch(err){
            res.status(500).json(err);
        }    
    },
    getAllAccount:async(req,res)=>{
        try{
            const Accounts=await QuanLi.find();
            res.status(200).json(Accounts);
        }catch(err){
            res.status(500).json(err);
        }
    },
    updateAccount:async(req,res)=>{
        try{
            const xe=await QuanLi.findById(req.params.id);
            await xe.updateOne({$set:req.body});
            res.status(200).json("updateSuccess");
        }catch(err){
            res.status(500).json(err);
        }    
    },
}

module.exports=quanLiController;