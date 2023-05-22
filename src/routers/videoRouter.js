import express from "express";

import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";
import { protectorMiddleware, uploadVideoFiles } from "../middlewares";
const videoRouter = express.Router();

videoRouter.get("/:id([a-f0-9]{24})", watch);
videoRouter
  .route("/:id([a-f0-9]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter.get("/:id([a-f0-9]{24})/delete", protectorMiddleware, deleteVideo);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(uploadVideoFiles.single("video"), postUpload);

export default videoRouter;
