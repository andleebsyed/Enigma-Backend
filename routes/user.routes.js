const express = require("express");
const { UserSignIn, UserSignUp, GuestAccess } = require("../controllers/users");
const UserRouter = express.Router();

UserRouter.route("/signin").post(UserSignIn);
UserRouter.route("/signup").post(UserSignUp);
UserRouter.route("/guest").post(GuestAccess);
module.exports = { UserRouter };
