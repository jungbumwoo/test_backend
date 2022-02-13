import jwt from "jsonwebtoken";

export const requireSignin = async(req, res, next) => {
    try {
        if(req.headers.authorization){
            let token = req.headers.authorization.split(" ")[1];
            const user = await jwt.verify(token, process.env.JWT_SECRET || 'jwtsecret');
            console.log("✅ user logged In");
            req.user = user;
        } else {
            console.log("header doesn't have token");
        }
    } catch(err) {
        console.log(err);
        console.log("err at Middleware");
        return res.status(400).json({ "message" : "Login Error at middlewares" });
    }
    next();
}