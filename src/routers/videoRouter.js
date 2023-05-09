import express from "express";

import {
  handleWatchVideo,
  handleEditVideo,
  handleUploadVideo,
  handleDeleteVideo,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/upload", handleUploadVideo);
videoRouter.get("/:id", handleWatchVideo);
videoRouter.get("/:id/edit", handleEditVideo);
videoRouter.get("/:id/delete", handleDeleteVideo);

export default videoRouter;
