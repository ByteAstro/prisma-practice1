import prisma from '../db/db.config.js';

// Creating a post ============================== heheDone
export const createPost = async (req, res) => {
    try {
        const { user_id, title, description } = req.body;

        const newPost = await prisma.post.create({
            data: {
                user_id: Number(user_id),
                title,
                description,
            }
        })

        return res.status(201).json({
            success: true,
            message: "Post created successfully.",
            data: newPost,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Create Post Error: ${error}`,
        })
    }
};

// updating a post ============================== heheDone
export const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, description } = req.body;

        await prisma.post.update({
            where: { id: Number(postId) },
            data: {
                title, description
            }
        });

        return res.status(200).json({
            success: true,
            message: "Post updated successfully.",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Update Post Error: ${error}`,
        })
    }
}

// fetching all posts ============================ heheDone
export const fetchPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({});

        return res.status(200).json({
            success: true,
            message: "Posts Fetched successfully.",
            data: posts,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Fetch Posts Error: ${error}`,
        })
    }
}

// fetching a single post ======================== heheDone
export const showPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await prisma.post.findFirst({
            where: { id: Number(postId) }
        });

        return res.status(200).json({
            success: true,
            message: "A post fetched successfully.",
            data: post,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Fetch A post Error: ${error}`,
        })
    }
}

// deleting a single post ========================
export const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        await prisma.post.delete({
            where: { id: Number(postId) }
        });

        return res.status(200).json({
            success: true,
            message: "Post deleted successfully.",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Deleting a Post Error: ${error}`,
        })
    }
}