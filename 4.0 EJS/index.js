import express  from "express";
import {dirname} from "path";
import bodyParser from "body-parser";
import  {fileURLToPath} from "url";

const app=express();
const port=3000;
// const port=process.env.PORT||3000;

app.use(bodyParser.urlencoded({extended:true}));
function checkDay(){
    var date = new Date();
    var day = date.getDay();

    if ((day==="Sunday")||(day==="Saturday")){
        return "Hey! It's Weekend, it's time to relax and have fun!";
    }
    else {return "Hey! It's Weekday, it's time to work hard!";}
}


app.get("/",(req,res)=>{
    
   var msg;
//    res.send(`<h1>${msg}<h1/>`);
   res.render(`${dirname(fileURLToPath(import.meta.url))}/views/index.ejs`,
    {msg:checkDay()});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});