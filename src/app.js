const express = require("express");
const cors = require('cors')
const app = express();
const growthstocksRouter = require("./growthstocks/growth.router")

app.use(cors({Origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/stocks", growthstocksRouter);

/*Error Handler*/
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
  });
  
  app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });

module.exports = app;
