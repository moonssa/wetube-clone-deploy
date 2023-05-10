import express from "express";

import {
  handleWatchVideo,
  handleEditVideo,
  handleUploadVideo,
  handleDeleteVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", handleWatchVideo);
videoRouter.get("/:id(\\d+)/edit", handleEditVideo);
videoRouter.get("/:id(\\d+)/delete", handleDeleteVideo);
videoRouter.get("/upload", handleUploadVideo);

export default videoRouter;
