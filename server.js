const express = require("express");
const app = express();
const PORT = 4000;
//Following lines are to make sure our app can parse the json data
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const db = require("./models");

// const authRoute = require("./routes/auth.routes");
// const userRoute = require("./routes/user.routes");
// const contactRoute = require("./routes/contact.routes");
// const addressRoute = require("./routes/address.routes");

// app.use("/api/auth", authRoute);
// app.use("/api/user", userRoute);
// app.use("/api/contact", contactRoute);
// app.use("/api/address", addressRoute);

db.sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });