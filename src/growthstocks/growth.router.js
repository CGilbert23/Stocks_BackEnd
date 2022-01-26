const router = require("express").Router({ mergeParams: true });
const controller = require("./growth.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).get(controller.list).all(methodNotAllowed);


router.route("/max").get(controller.max).all(methodNotAllowed)

router.route("/:stock_id").put(controller.update).get(controller.read).delete(controller.delete).all(methodNotAllowed)



module.exports = router;
