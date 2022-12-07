import express from "express"

let app = express();

app.get("/", async function(req: any, res: any) {
 await res.send("<h1>Hello World!</h1>");
});

app.listen(5000);
