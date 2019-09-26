const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/alldata")
  .get(userController.findAll)
  .put(userController.update)

router.route("/makeuser")
  .post(userController.create)


module.exports = router;