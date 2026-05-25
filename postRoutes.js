const router = require("express").Router();

const Post = require("../models/Post");

const auth = require("../middleware/authMiddleware");


// CREATE POST
router.post("/", auth, async (req, res) => {

    try {

        const newPost = new Post({

            userId: req.user.id,

            content: req.body.content
        });

        await newPost.save();

        res.json({
            msg: "Post Created",
            post: newPost
        });

    } catch(err) {

        console.log(err);

        res.status(500).json({
            msg: "Post failed"
        });
    }
});


// GET POSTS
router.get("/", async(req, res) => {

    try {

        const posts = await Post.find()
        .populate("userId", "username");

        res.json(posts);

    } catch(err) {

        console.log(err);

        res.status(500).json({
            msg: "Error loading posts"
        });
    }
});

// LIKE POST
router.put("/like/:id", auth, async(req, res) => {

    const post = await Post.findById(req.params.id);

    if(!post.likes.includes(req.user.id)) {

        post.likes.push(req.user.id);

    } else {

        post.likes = post.likes.filter(
            id => id != req.user.id
        );
    }

    await post.save();

    res.json(post);
});

module.exports = router;