// const videos = [1, 2, 3, 4, 5, 6];
let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: "excellent",
    createdAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: "nice",
    createdAt: "3 minutes ago",
    views: 3,
    id: 3,
  },
];
export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const handleWatchVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  videos[id - 1].title = req.body.title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  console.log(req.body);
  const id = videos.length + 1;
  console.log(id);
  const { title, rating, comments } = req.body;
  const newVideo = {
    id: id,
    title,
    rating,
    comments,
    createdAt: "now",
  };
  videos.push(newVideo);
  return res.redirect("/");
};
export const handleSearch = (req, res) => res.send("Search Video");
export const handleUploadVideo = (req, res) => res.send("Upload Video");
export const handleDeleteVideo = (req, res) => res.send("Delete Video");
