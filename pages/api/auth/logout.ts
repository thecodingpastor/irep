import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

import connectDB from "../../../utils/connectDB";

import User from "../../../models/userModel";
import { CookieOptions } from "../../../utils/cookieOptions";
import applyRateLimit from "../../../utils/applyRateLimiting";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(403).json({ message: "Invalid request" });

  try {
    await applyRateLimit(req, res);
  } catch {
    return res.status(429).json({ message: "Too many requests" });
  }

  try {
    await connectDB();
    const user = await User.findOneAndUpdate(
      { refreshToken: req.cookies.irep },
      { refreshToken: "" }
    );

    if (!user)
      return res.status(500).json({ message: "Could not log out user" });
    const cookies = new Cookies(req, res, {
      secure: process.env.NODE_ENV === "production" /* request is secure */,
    });

    // Set cookies to expired
    cookies.set("irep", "", CookieOptions);

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
