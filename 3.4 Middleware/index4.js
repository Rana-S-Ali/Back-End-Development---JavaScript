import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

console.log(`dir name: ${__dirname}`);

app.post("/submit",(req,res)=>{
  const streetName = req.body.street;
  const petName = req.body.pet;
  const bandName = `${streetName}${petName}`;

  res.send(`<h1>Band Name is:<h1/> <h2> ${bandName}<h2>`);
  //console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
