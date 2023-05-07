import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  return res.send("Welcome express");
};
const handleLogin = (req, res) => {
  return res.send("Login");
};

const handleProtected = (req, res) => {
  return res.send("Protected");
};
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1> Not Allowed </h1>");
  }
  console.log("Allow !!  continue!!");
  next();
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on PORT ${PORT}`);
app.listen(4000, handleListening);
