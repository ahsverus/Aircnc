const User = require('../models/User')
module.exports = {
  async store(req, res) {
    const { email } = req.body
    user = await User.create({ email });
    res.json(user)
  }
}