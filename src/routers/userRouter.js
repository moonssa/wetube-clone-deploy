import express from "express";
import {
  handleEditUser,
  handleDeleteUser,
  seeProfile,
  handleLogout,
} from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/logout", handleLogout);
userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDeleteUser);
userRouter.get("/:id", seeProfile);

export default userRouter;
