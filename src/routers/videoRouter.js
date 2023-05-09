import express from "express";

import {
  handleWatchVideo,
  handleEditVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);

export default videoRouter;
