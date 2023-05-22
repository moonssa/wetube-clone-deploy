import multer from "multer";

export const localMiddleware = (req, res, next) => {
  console.log("I'm local middle ware", req.session);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

// 로그인 안한 사용자가 users/edit page 방문을 못하도록 하는 미들웨어
export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/login");
  }
};

// 로그인 한  사용자가 users/login, users/join page를 못가도록...
export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/");
  }
};

export const uploadAvatarFiles = multer({
  dest: "uploads/avatars",
  limits: {
    fileSize: 3000000,
  },
});
export const uploadVideoFiles = multer({
  dest: "uploads/videos",
  limits: {
    fileSize: 50000000,
  },
});
