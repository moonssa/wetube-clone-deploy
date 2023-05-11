import express from "express";

import {
  handleWatchVideo,
  handleDeleteVideo,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", handleWatchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", handleDeleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
