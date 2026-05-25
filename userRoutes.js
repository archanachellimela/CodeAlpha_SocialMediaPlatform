const router = require("express").Router();

const User = require("../models/User");


// GET USER
router.get("/:id", async(req, res) => {

    const user = await User.findById(req.params.id);

    res.json(user);
});

module.exports = router;