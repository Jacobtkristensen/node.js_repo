export const requireAuth = (req, res, next) => {
    if (req.session.user) {
        next();
    }
    else {
        res.status(401).send({ error: "Not authorized" });
    }
};