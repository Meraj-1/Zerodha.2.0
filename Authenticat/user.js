const User = require("./schema")

function verification(req, res, next) {
    if(req.User.role !== "admin") {
        return res.status(401).json({message : "Access denied . You need an Admin role to get access"})
    }
    next();
}

module.exports = verification;