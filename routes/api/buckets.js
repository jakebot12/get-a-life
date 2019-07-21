const router = require("express").Router();
const bucketController = require("../../controllers/bucketController");

// Matches with "/api/books"
router.route("/")
  .get(bucketController.findAll)
  .post(bucketController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bucketController.findById)
  .put(bucketController.update)
  .delete(bucketController.remove);

module.exports = router;
