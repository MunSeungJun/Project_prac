import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const regist = async (req, res) => {
  try {
    const { username, passwd, phone, email } = req.body;
    const exisUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (exisUser) {
      return res.status(400).json({
        message: "존재하는 사용자 입니다",
      });
    }
    const newUser = new User({
      username,
      passwd,
      phone,
      email,
    });
    await newUser.save();
    res.status(201).json({
      message: "신규 사용자 등록 성공",
      data: req.body,
    });
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res) => {
  const { email, passwd } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "이메일 또는 비밀번호를 확인해주세요",
      });
    }
    const isMatch = await bcrypt.compare(passwd, user.passwd);
    if (!isMatch) {
      return res.status(400).json({
        message: "비밀번호를 확인해주세요",
      });
    }
    const SECRET_KEY = process.env.SECRET_KEY;
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax"
    });
    res.status(200).json({
      message: "로그인 성공",
      data: user.username,
    });
  } catch (e) {
    console.log(e);
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "로그아웃 완료",
  });
};

const check = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "로그인 필요" });

  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    jwt.verify(token, SECRET_KEY);
    res.json({ loggedIn: true });
  } catch (error) {
    res.status(403).json({ message: "유효하지 않은 토큰" });
  }
};

export { regist, login, logout, check };
