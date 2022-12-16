const express = require("express");
require("dotenv").config();
const postRouter = require("./routes/post");
const authRouter = require("./routes/auth");
const lessonPlanRouter = require("./routes/lesson");
const schemaRouter = require("./routes/workschem");
const imageUpload = require("./routes/imageUpload");
const connectDB = require("./db/connect");
//error handler
const notFoundMiddleware = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const auth = require("./middleware/authMiddleware");
const path = require("path");

// initialise express app
const app = express();

app.use(express.json());
// require route
app.use("/auth", authRouter);
app.use("/post", auth, postRouter);
app.use("/plan", lessonPlanRouter);
app.use("/schema", schemaRouter);
app.use("/image", imageUpload);

app.use(express.static(path.join(__dirname, "/frontend")));
app.get("*", (req, res) => {
  res.sendFile(path.join, "/frontend/build", "index.html");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = 5000;
//connect to the db
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(console.log("connected"));
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
