const user = require("../Models/userModel");
const JWT = require("jsonwebtoken");
const JWT_SECRET = "uyjoikodofiyudk;foiuoidfi";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dyt5jqnax",
  api_key: "748127561117894",
  api_secret: "iz0jekTqRdOWiJFmiEcJvuSB4LY",
});

const registerUser = async (req, res, next) => {
  try {
    let { name, gender, password, email } = req.body;

    if (!gender || !password || !email || !name) {
      return res
        .status(400)
        .json({ message: "Bed Request: All field are required" });
    }
    let User = await user.findOne({ where: { email: email } });
    if (User) {
      return res.status(400).json({ message: "Duplicate user" });
    } else {
      const file = req.files.avatar;
      cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        // console.log(result.url);
        const Users = await user.create({
          name: name,
          gender: gender,
          password: password,
          email: email,
          avatar: result.url,
        });
        res
          .status(200)
          .json({ message: "user succesfully created ", Users: Users });
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Bed Request:All Feild Are require" });
    }
    let User = await user.findOne({ where: { username, password } });
    if (User) {
      let token = JWT.sign(
        {
          id: User.id,
          username: User.username,
          email: User.email,
          role: User.role,
        },
        JWT_SECRET
      );
      return res
        .status(200)
        .json({ message: "Login Successful", token: token });
    } else {
      return res
        .status(400)
        .json({ message: "Bed Request: Username and Password are incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const verfyToken = async (req, res, next) => {
  try {
    let { token } = req.headers;
    if (token) {
      let decoded = JWT.verify(token, JWT_SECRET);
      // console.log(decoded)
      req.decoded = decoded;
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized :Token required" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Unauthorized :Invalid token" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  verfyToken,
};
