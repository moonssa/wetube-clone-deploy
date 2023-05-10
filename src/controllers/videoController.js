export const handleHome = (req, res) =>
  res.render("home", { pageTitle: "Home" });
export const handleWatchVideo = (req, res) =>
  res.render("watch", { pageTitle: "Watch" });

export const handleEditVideo = (req, res) => res.send("Edit Video");
export const handleSearch = (req, res) => res.send("Search Video");
export const handleUploadVideo = (req, res) => res.send("Upload Video");
export const handleDeleteVideo = (req, res) => res.send("Delete Video");
