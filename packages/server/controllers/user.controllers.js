import User from "../models/user.js";
import bcrypt from 'bcrypt'

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
      email
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
    const isMatch  = await bcrypt.compare(passwd, user.passwd);
    if (!isMatch) {
      return res.status(400).json({
        message: "비밀번호를 확인해주세요",
      });
    }
    res.status(200).json({
      message: "로그인 성공",
      data: user.username,
    });
  } catch (e) {
    console.log(e);
  }
};

export { regist, login };
