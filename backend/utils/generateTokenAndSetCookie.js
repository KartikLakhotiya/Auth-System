import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = async (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    // localStorage.setItem('token', token);

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return token;
}