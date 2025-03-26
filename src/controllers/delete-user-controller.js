export const deleteUserController = (req, res, next) => {
    res.cookie("refreshToken", undefined, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        expires: new Date(0),
    });

    res.status(200).json({ message: "Cookie deleted" });
};
