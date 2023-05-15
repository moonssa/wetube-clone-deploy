// require("dotenv").config();

import "dotenv/config";
import "./db";

import app from "./server";

const PORT = 4000;

const handleListening = () => console.log(`Server listening on PORT ${PORT}`);
app.listen(PORT, handleListening);
