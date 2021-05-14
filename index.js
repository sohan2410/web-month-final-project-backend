const express=require("express");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

const port=process.env.port || 8000;

app.get("/", (req,res)=>{
    res.status(200).send("server is upp and running");
});

app.listen()