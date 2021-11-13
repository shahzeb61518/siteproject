const express = require("express");
const mysql = require("mysql");
const cors = require ("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"megapositivobd"

});

app.post("/login", (req,res ) =>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM os_accounts WHERE Username = ? AND Password =  ?",
        [username,password],
        (err, result) =>{
            if(err){console.log(err);
                res.send({err: err})
                
            }
                if (result.length > 0){
                    res.send(result)
                }else{
                    res.send({teste: "Wrong username/password !"});
                }
            
        }
    );
})

app.listen(3001,() =>{
    console.log("running server");
})