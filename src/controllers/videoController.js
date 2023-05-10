export const handleHome = (req, res) => res.send("Home page Videos");
export const handleWatchVideo = (req, res) => {
  console.log(req.params.id);
  res.send(`Watch Video #${req.params.id}`);
};
export const handleEditVideo = (req, res) => res.send("Edit Video");
export const handleSearch = (req, res) => res.send("Search Video");
export const handleUploadVideo = (req, res) => res.send("Upload Video");
export const handleDeleteVideo = (req, res) => res.send("Delete Video");
