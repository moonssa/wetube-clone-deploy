import Video from "../models/Video";

export const handleHome = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const handleWatchVideo = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watching ` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Edit:` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  console.log(title, description, hashtags);
  await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  return res.redirect("/");
};
export const handleSearch = (req, res) => res.send("Search Video");
export const handleUploadVideo = (req, res) => res.send("Upload Video");
export const handleDeleteVideo = (req, res) => res.send("Delete Video");
