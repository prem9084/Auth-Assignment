import express from "express";
import {
  RegistrationController,
  userLoginController,
} from "../controller/authController.js";
import { requireSignIn } from "../middleware/authMididdleware.js";

const router = express.Router();

router.post("/register", RegistrationController);
router.post("/login", userLoginController);
// protected routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
