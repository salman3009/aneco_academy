const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoute")

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT,DELETE, OPTIONS"
    );
    next();
  });

userRoute(app);

app.listen(PORT, ()=>{console.log(`listning at port ${PORT}`)})