import express from "express";
import {dirname} from "path";
import  {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

console.log("Current working directory:", process.cwd());
app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  // res.render(`${__dirname}/views/index.ejs`,data);
  // res.send(process.cwd());
  // res.render("views/index.ejs",data);
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
