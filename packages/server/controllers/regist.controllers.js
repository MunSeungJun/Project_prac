import User from "../models/user.js";

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
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({
      message: "success",
    });
  } catch (e) {
    console.log(e);
  }
};

export default regist;
