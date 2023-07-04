import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const localMiddleware = (req, res, next) => {
  // console.log("I'm local middle ware", req.session);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  // console.log("******End", res.locals);
  next();
};

// 로그인 안한 사용자가 users/edit page 방문을 못하도록 하는 미들웨어
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/login");
  }
};

// 로그인 한  사용자가 users/login, users/join page를 못가도록...
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};

const multerUploader = multerS3({
  s3: s3,
  bucket: "wetube2307",
  acl: "public-read",
});
export const uploadAvatarFiles = multer({
  dest: "uploads/avatars",
  limits: {
    fileSize: 3000000,
  },
  storage: multerUploader,
});
export const uploadVideoFiles = multer({
  dest: "uploads/videos",
  limits: {
    fileSize: 150000000,
  },
  storage: multerUploader,
});
