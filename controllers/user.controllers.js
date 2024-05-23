import prisma from '../db/db.config.js';

// Creating user ================================
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (findUser) {
            return res.json({
                status: 400,
                message: "Email Already Taken. please use another email."
            });
        }

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })

        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: newUser,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Create User Error: ${error}`,
        })
    }
};

// updating user =================================
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, password } = req.body;

        await prisma.user.update({
            where: { id: Number(userId) },
            data: {
                name, email, password
            }
        });

        return res.status(200).json({
            success: true,
            message: "User updated successfully.",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Update User Error: ${error}`,
        })
    }
}

// fetching all user =============================
export const fetchUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                Post: {
                    select: {
                        title: true,
                        comment_count: true,
                    }
                },
            }
        });

        return res.status(200).json({
            success: true,
            message: "Users Fetched successfully.",
            data: users,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Fetch Users Error: ${error}`,
        })
    }
}

// fetching a single user ========================
export const showUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await prisma.user.findFirst({
            where: { id: Number(userId) }
        });

        return res.status(200).json({
            success: true,
            message: "A user fetched successfully.",
            data: user,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Fetch A user Error: ${error}`,
        })
    }
}

// deleting a single user ========================
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        await prisma.user.delete({
            where: { id: Number(userId) }
        });

        return res.status(200).json({
            success: true,
            message: "User deleted successfully.",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Deleting a User Error: ${error}`,
        })
    }
}