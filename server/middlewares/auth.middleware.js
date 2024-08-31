import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    // Check if the authorization header exists
    const authHeader = req.headers.authorization;

    // If no authorization header is present
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    // Split the header to get the token
    const token = authHeader.split(" ")[1];

    // If no token is present in the header
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    // Verify the token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user id to request object
    req.userId = decodedData?.id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log the error and send a response
    console.log(error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default auth;
