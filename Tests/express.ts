import express from "express";

let app = express();

app.get("/", async function(req: any, res: any) {
 await res.send("<h3>Hello World!</h3>");
});

app.listen(5000);
