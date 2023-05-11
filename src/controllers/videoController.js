// const videos = [1, 2, 3, 4, 5, 6];
const videos = [
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
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: "nice",
    createdAt: "3 minutes ago",
    views: 59,
    id: 1,
  },
];
export const handleHome = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const handleWatchVideo = (req, res) =>
  res.render("watch", { pageTitle: "Watch" });

export const handleEditVideo = (req, res) => res.send("Edit Video");
export const handleSearch = (req, res) => res.send("Search Video");
export const handleUploadVideo = (req, res) => res.send("Upload Video");
export const handleDeleteVideo = (req, res) => res.send("Delete Video");
