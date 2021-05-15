const express=require("express");
const cors=require("cors");
const app=express();
const authRoutes=require("./routes/auth.js");
app.use(express.json());
app.use(cors());

const port=process.env.PORT || 8000;

app.get("/", (req,res)=>{
    res.status(200).send("server is upp and running");
});

app.use("/auth", authRoutes);

app.listen(port,()=>{
    console.log("hello");
})