import userModel from "../model/userModel.js";
import { hashPassword, compairePassword } from "../utils/authUtils.js";
import jwt from "jsonwebtoken";
export const RegistrationController = async (req, res) => {
  try {
    const { name, email, dob, password } = req.body;

    // validationns

    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!dob) {
      return res.send({ message: "dob is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }

    // check existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.send({ message: "User Already Registered, Please login" });
    }

    // hashing password

    const hashedPassword = await hashPassword(password);

    // user creation

    const user = await new userModel({
      name,
      email,
      dob,
      password: hashedPassword,
    });

    // user save in database

    user.save();

    res.status(200).send({
      success: true,
      message: "Regisration successful",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// for user login

export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.send({ message: "This email is not registerd" });
    }

    const match = await compairePassword(password, user.password);

    if (!match) {
      return res.send({ message: "email and password Invalid" });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT, {
      expiresIn: "1d",
    });

    res.status(200).send({
      success: true,
      message: "Loggedin",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        dob: user.dob,
      },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
