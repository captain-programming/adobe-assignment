const { Router } = require("express");
const { totalUsers, topActiveUsers, totalPosts, topLikedPosts } = require("../controllers/analytics.controller");

const router = Router();

router.get("/users", totalUsers);
router.get("/users/top-active", topActiveUsers);
router.get("/posts", totalPosts);
router.get("/posts/top-liked", topLikedPosts);

module.exports = router;