const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

//sử dụng các lib import 
app.use(cors());
app.use(bodyParser.json({limit:"50mb"}));
app.use(morgan("common"));


//import các file
const xeRoute = require("./routes/xe");
const SoDatXeRouter = require("./routes/SoDatXe");
const adminRoutes = require("./routes/Admin");
const bangGiaRoutes = require("./routes/BangGia");
const soXeRoutes=require("./routes/SoXe");
const KhachHang=require("./routes/KhachHang");
const LoaiXe=require("./routes/LoaiXe");

//Connete database
dotenv.config();

mongoose.connect((process.env.MONGODB_URL),() =>{
    try {
        console.log("Đã kết nối database");
    } catch (error) {
        console.log("kết nối thất bại");
    }
    
});


app.use("/Xe",xeRoute);
app.use("/SoDatXe",SoDatXeRouter);
app.use("/BangGia", bangGiaRoutes);
app.use("/KhachHang",KhachHang);
app.use("/SoXe",soXeRoutes);
app.use("/LoaiXe",LoaiXe);

app.listen(8000, () => {
    console.log("server is running");
});

