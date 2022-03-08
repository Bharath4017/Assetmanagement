require('dotenv').config()
const express =require("express")
const cors =require("cors")
const morgan = require('morgan');
const db = require('./db')
const app =express();

app.use(cors());
app.use(express.json());

//get All Assets  

app.get("/api/v1/assets", async (req,res)=>{

    try{
        const results= await db.query("select * from assets")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                assets: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});


app.get("/api/v1/assetsquery", async (req,res)=>{

    try{
        const {name} = req.query;

        const results= await db.query("select * from assets where assetname ilike $1",[`%${name}%`]);
        res.status(200).json({
            status:"success",
            data:{
                assets: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});
//http://localhost:3001/api/v1/assetstatus"


app.get("/api/v1/assetstatus", async (req,res)=>{

    try{
        const {status} = req.query;

        const results= await db.query("select * from assets where assetstatus ilike $1",[`${status}`]);
        res.status(200).json({
            status:"success",
            data:{
                assets: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});
app.get("/api/v2/assets", async (req,res)=>{

    try{
        const results= await db.query("select * from leasedassets")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                leasedassets: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});

//http://localhost:3001/api/v2/assets"
//get An Asset 

app.get("/api/v1/assets/:id",async (req,res)=>{
    console.log(req.params.id)

    try{
        const results =await db.query("select * from assets where id=$1",[req.params.id])
        res.status(200).json({
            status:"success",
            data:{
                 assets:results.rows[0],
            },
        });
    }catch(err){
      console.log(err)
    }   
});
//http://localhost:3001/api/v1/assets/:assetid


//create an Asset

app.post("/api/v1/assets", async (req,res)=>{
    console.log(req.body)

    try{
     const results= await db.query("INSERT INTO assets (serialnumber,assetname,specifications,category,manufacturer,received_on_date,purchased_on_date,price,assetstatus,warrenty) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *",
     [req.body.serialnumber,req.body.assetname,req.body.specifications,req.body.category
        ,req.body.manufacturer,req.body.received_on_date,req.body.purchased_on_date,req.body.price,req.body.assetstatus,req.body.warrenty])
     console.log(results)
     res.status(201).json({
        status:"success", 
        data:{
             assets:results.rows[0],
        },
    });
    }catch(err){
      console.log(err)
    }
});
//http://localhost:3001/api/v1/assets"

//post to user selection 
   app.post('api/v1/userselection',async (req,res)=>{

    try {
        const results =await db.query("INSERT INTO userselection (id,associatename,associaterole,dateofjoining,associatestatus,email,contactnumber,adress) values($1,$2,$3,$4,$5,$6,$7,$8) returning *",
        [req.body.id,req.body.associatename,req.body.associaterole,req.body.dateofjoining,req.body.associatestatus,req.body.email,req.body.contactnumber,req.body.adress])
        req.status(201).json({
            status:"success",
            data:{
                userselection:results.rows[0],
            },
        });
    } catch (err){
             console.log(err)
    }
   });

   //http://localhost:3001/api/v1/userselection

app.post("/api/v2/assets", async (req,res)=>{
    console.log(req.body)

    try{
     const results= await db.query("INSERT INTO leasedassets (serialnumber,assetname,specifications,category,manufacturer,received_on_date,purchased_on_date,price) values($1,$2,$3,$4,$5,$6,$7,$8) returning *",
     [req.body.serialnumber,req.body.assetname,req.body.specifications,req.body.category
        ,req.body.manufacturer,req.body.received_on_date,req.body.purchased_on_date,req.body.price])
     console.log(results)
     res.status(201).json({
        status:"success", 
        data:{
             assets:results.rows[0],
        },
    });
    }catch(err){
      console.log(err)
    }
});
//http://localhost:3001/api/v2/assets"
//Update Asset
app.put("/api/v1/assets/:id",async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)

    try{
       const results= await db.query("UPDATE assets SET serialnumber=$1,assetname=$2,specifications=$3,category=$4,manufacturer=$5,received_on_date=$6,purchased_on_date=$7,price=$8 where id=$9 returning * ",
       [req.body.serialnumber,req.body.assetname,req.body.specifications,req.body.category,req.body.manufacturer
        ,req.body.received_on_date,req.body.purchased_on_date,req.body.price,req.params.id]);
       console.log(results)
       res.status(201).json({
        status:"success",
        data:{
             assets:results.rows[0],
        },
    });
    }catch(err){
     console.log(err)
    }
});
//http://localhost:3001/api/v1/assets/:id"

//Delete an Asset

app.delete("/api/v1/assets/:id",async(req,res)=>{

    try{
       const results = await db.query("DELETE from assets where id=$1",[req.params.id]);
       res.status(200).json({
        status:"success",
    });

    }catch(err){
      console.log(err)
    }
});

app.delete("/api/v2/assets/:id",async(req,res)=>{

    try{
       const results = await db.query("DELETE from leasedassets where id=$1",[req.params.id]);
       res.status(200).json({
        status:"success",
    });

    }catch(err){
      console.log(err)
    }
});

//Truncate an Asset 
app.delete("/api/v1/assets",async(req,res)=>{
     try{
      const results =await db.query("TRUNCATE TABLE assets");
      res.status(200).json({
          status:"success",
      });
        
     }catch(err){
         console.log(err)
     }
});

const port =process.env.PORT || 3001;

console.log("test")

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
// ASSET ALLOTMENT 
app.get("/api/v1/users", async (req,res)=>{

    try{
        const results= await db.query("select * from users")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                users: results.rows,
            },
        });  
        
    } catch (err){
      console.log(err);
    }
});

//http://localhost:3001/api/v1/users"

app.get("/api/v1/users/:id",async (req,res)=>{
    
   
    try{
        const results =await db.query("select * from users where id=$1",[req.params.id])
        res.status(200).json({
            status:"success",
            data:{
                 users:results.rows[0],
            },
        });
    }catch(err){
      console.log(err)
    }   
});
//assign assets

app.get("/api/v1/assignassets", async (req,res)=>{

    try{
        const results= await db.query("select * from testing")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                testing: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});
//http://localhost:3001/api/v1/assignassets"

//for updating users  

app.post("/api/v1/mappingassets", async (req,res)=>{
    console.log(req.body)
    try{
     const results= await db.query("INSERT INTO mappingassets (users_id,username,userrole,date_of_joining,assetserielnumber,assetstatus) values($1,$2,$3,$4,$5,$6) returning *",
     [req.body.users_id,req.body.username,req.body.userrole,req.body.date_of_joining,req.body.assetserielnumber,req.body.assetstatus
        ])
     console.log(results)
     res.status(201).json({
        status:"success", 
        data:{
             mappingassets:results.rows[0],
        },
    });
    }catch(err){
      console.log(err)
    }
});
//http://localhost:3001/api/v1/mappingassets

app.get("/api/v1/mappingassets", async (req,res)=>{

    try{
        const results= await db.query("select * from mappingassets")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                mappingassets: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});
//http://localhost:3001/api/v1/mappingassets
app.get("/api/v1/assignProjects", async (req,res)=>{

    try{
        const results= await db.query("select * from projects")
        res.status(200).json({
            status:"success",
            results:results.rows.length,
            data:{
                projects: results.rows,
            },
        });  
    } catch (err){
      console.log(err);
    }
});
//http://localhost:3001/api/v1/assignProjects


