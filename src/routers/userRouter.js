import express from "express";
import {
  seeProfile,
  startGithubLogin,
  finishGithubLogin,
  logout,
  edit,
} from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id(\\d+)", seeProfile);

export default userRouter;
