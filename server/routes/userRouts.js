const express = require('express')

const router = express.Router()

const connection = require("../config/db")

router.get("/",(req, res)=>{

    return res.status(200).json({message : 'Api is runing...'})
})

router.post("/addProduct", async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    const sql = `INSERT INTO cart (title, price, description, category, image) VALUES (?, ?, ?, ?, ?)`;

    await connection.execute(sql, [title, price, description, category, image]);

    return res.status(200).json({ message: 'Product added successfully...' });
  } catch (err) {
    console.error("SQL Insert Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/getProduct",async(req, res)=>{
    try{
    const result =  await connection.execute('select * from cart')
      return res.status(200).json({message : 'fetch successfully...', data : result[0], success:true})
    }catch(err){

        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
})

router.get("/SumCart",async(req,res)=>{

  try{
  var sql = `select sum(price) from cart`
  const result = await connection.execute(sql)
  return res.status(200).json({message:'fetch successfully', data : result[0],success : true})

  }catch(err){
      console.log(err)
        return res.status(500).json({message:"internal server error"})
  }
})


module.exports = router;