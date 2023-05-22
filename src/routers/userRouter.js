import express from "express";
import {
  seeProfile,
  startGithubLogin,
  finishGithubLogin,
  logout,
  getEdit,
  postEdit,
  postChangePassword,
  getChangePassword,
} from "../controllers/userController";
import {
  protectorMiddleware,
  publicOnlyMiddleware,
  uploadAvatarFiles,
} from "../middlewares";
const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(uploadAvatarFiles.single("avatar"), postEdit);
userRouter
  .route("/password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id(\\d+)", seeProfile);

export default userRouter;
