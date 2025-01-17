import jwt from "jsonwebtoken";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.authorization, process.env.JWT);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
