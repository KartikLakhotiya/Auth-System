import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const allusers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        console.log("All Users : \n", users)
        return res.status(200).json({ users })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
}

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error("All Fields are required")
        }

        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            return res.status(400).json({ message: "User Already Exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hrs
        })


        // jwt 
        generateTokenAndSetCookie(res, user._id);

        await user.save();
        console.log(`User created ${user.name}`)
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error, success: false })
    }
}

export const login = async (req, res) => {

}

export const logout = async (req, res) => {

}