import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account" });
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, location } = req.body;
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.render("join", {
      pageTitle: "Create Account",
      errorMessage: error._message,
    });
  }

  return res.redirect("/");
};
export const login = (req, res) => res.send("Handle Login");
export const handleEditUser = (req, res) => res.send("Edit User");
export const handleDeleteUser = (req, res) => res.send("Delete User");

export const seeProfile = (req, res) => res.send("My profile");
export const handleLogout = (req, res) => res.send("Logout");
