const {Xe}=require("../model/model");

const bangGiaController={
    locTheoLoai: async (req, res) => {
      try {
        const { loai, ngay } = req.params;
    
        const BangGia = await Xe.aggregate([
          { $match: { LoaiXe: loai } }, // Thêm điều kiện LoaiXe
          {
            $addFields: {
              GiaThue: {
                $cond: [
                  { $eq: [ngay, ""] }, // Kiểm tra nếu ngay không có giá trị
                  "$GiaThue", // Giữ nguyên GiaThue nếu ngay không có giá trị
                  { $add: ["$GiaThue", { $multiply: [parseInt(ngay), 200000] }] } // Cộng thêm ngay * 200 nếu ngay có giá trị
                ]
              }
            }
          },
          {
            $group: {
              _id: {
                LoaiXe: "$LoaiXe",
                HangXe: "$HangXe",
                DoiXe: "$DoiXe",
                GiaThue: "$GiaThue",
              },
            },
          },
        ]);
    
        res.status(200).json(BangGia);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    getBangGia:async(req,res)=>{
      try{
          const BangGia=await Xe.aggregate([
              {
                $group: {
                  _id: {
                    LoaiXe: "$LoaiXe",
                    HangXe: "$HangXe",
                    DoiXe: "$DoiXe",
                    GiaThue: "$GiaThue",
                  },
                },
              },
            ])
          res.status(200).json(BangGia);
      }catch(err){
          res.status(500).json(err);
      }
    },
};


module.exports=bangGiaController;