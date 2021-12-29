# Geotodo

A simple nodejs and mysql project

    ```javascript
        var express = require("express");
        var app = express();
        var cors = require("cors");
        var router = require("./server/routes");

        app.use(cors());
        app.use(express.json());
        const port = 5500;

        app.use("/api/todos/", router);

        app.listen(port, () => {
        console.log(`Server started on ${port}`);
        });

    ```

| Example | An example |
-----
| 1        |      Hello     |
| 2       |      Hello     |