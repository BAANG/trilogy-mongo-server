const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/alldata")
    .get(userController.findAll)

// router.route("/makeuser")
//     .post(userController.create)

// router.route("/update")
//     .put(userController.update)
module.exports = router;