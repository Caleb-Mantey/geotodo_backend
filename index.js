var express = require('express')
var app = express()
var cors = require('cors')
var router = require("./server/routes")

app.use(cors())
app.use(express.json());
const port = 3001

app.use("/api/todos", router);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});