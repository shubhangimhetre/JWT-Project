const data = require('../model/datamodel');
const user = require('../model/usermodel');

exports.all_blogs = async (req, res) => {
    try {
        const blogs = await data.find();
        res.status(200).send(blogs);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.user_blogs = async (req, res) => {
    const user_id = req.params.user_id;
    const found = await user.findOne({ _id: user_id });

    if (!found) return res.send("user not registered.")

    const blogdata = await data.find({ user_id: user_id })
    res.status(200).send(blogdata);

}

exports.create_blog = async (req, res) => {
    const user_id = req.params.user_id;
    const found = await user.findOne({ _id: user_id });

    if (!found) return res.send("user not registered.")
    try {
        const blogdata = new data({
            blogName: req.body.blogName,
            blogDescription: req.body.blogDescription,
            user_id: user_id
        })
        await blogdata.save();
        res.status(200).send("Blog Created.");
    } catch (err) {
        res.status(400).send(err)
    }


}



exports.delete_blog = async (req, res) => {
    try {
        const blog_id = req.params.blog_id;
        await data.deleteOne({ _id: blog_id });
        res.status(200).send("Blog deleted..");
    } catch (err) {
        res.status(400).send(err);
    }
}