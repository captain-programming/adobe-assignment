const { Router } = require("express");
const { createPost, retrivePostById, updatePost, deletePosts, postIncrementLike, postDecrementLike } = require("../controllers/posts.controller");

const router = Router();

router.post("/", createPost);
router.get("/:id", retrivePostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePosts);
router.put("/:id/like", postIncrementLike);
router.put("/:id/unlike", postDecrementLike);

module.exports = router;