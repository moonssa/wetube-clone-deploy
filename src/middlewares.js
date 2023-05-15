export const localMiddleware = (req, res, next) => {
  console.log("I'm local middle ware", req.session);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  next();
};
