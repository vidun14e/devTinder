const adminAuth = (req, res, next) => {
    const token = "xyz";
    const isAdmin = token === "xyz"
    if (isAdmin) {
        next();
    }
}

module.exports = {
    adminAuth,
}