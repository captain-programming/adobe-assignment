const { Router } = require("express");
const { createNewUser, retriveUserById, updateUsers, deleteUsers } = require("../controllers/users.controller");

const router = Router();

router.post("/", createNewUser);
router.get("/:id", retriveUserById);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;

