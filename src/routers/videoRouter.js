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

videoRouter.get("/:id([a-f0-9]{24})", handleWatchVideo);
videoRouter.route("/:id([a-f0-9]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([a-f0-9]{24})/delete", handleDeleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
