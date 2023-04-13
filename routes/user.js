const { Router } = require("express");
const { getController } = require("../controllers/user");

const router = Router();

router.get("/", getController);
router.post("/", (req, res) => {
   res.send("Hello World");
});

module.exports = router;
