const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello World! My Name Is Shiva");
});
app.listen(3000,()=>
{
    console.log("server is starting ")
});