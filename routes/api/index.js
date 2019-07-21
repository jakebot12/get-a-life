const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const commentRoutes = require("./comments");
const bucketRoutes = require("./buckets");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/buckets", bucketRoutes);

module.exports = router;
