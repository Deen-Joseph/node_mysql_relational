const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs'); 

const SECRET_KEY = "batmansmells";

var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use( bodyParser.urlencoded({  extended: false, }));



const db = require("./models");



const authRoute = require("./routes/auth.routes")
const userRoute = require("./routes/user.routes");
// const contactRoute = require("./routes/contact.routes");
// const addressRoute = require("./routes/address.routes");

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
// app.use("/api/contact", contactRoute);
// app.use("/api/address", addressRoute);



app.get("/", (req, res) => {
  res.json({ message: "Welcome to sequ application." });
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });