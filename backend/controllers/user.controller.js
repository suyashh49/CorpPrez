const { User } = require("../models/postgres");

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { fullName, phone, title } = req.body;
  const user = await User.findByPk(req.user.id);
  user.fullName = fullName;
  user.phone = phone;
  user.title = title;
  user.role = "registered";
  await user.save();
 // Generate a new token with updated info
 const token = jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      fullName: user.fullName, 
      role: user.role,
      organization: user.organization
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '24h' }
  );
  
  // Return both updated user and new token
  res.json({ user, token });

};
