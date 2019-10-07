const Spot = require('../models/Spot');
const User = require('../models/User')
module.exports = {
  async store(req, res) {
    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers
    user = await User.findById(user_id);
    if (!user) {
      res.status(400).json({ message: 'this user does not exist' })
    } else {
      const spot = await Spot.create({
        thumbnail: filename,
        company,
        price,
        user: user_id,
        techs: techs.split(',').map(tech => tech.trim())
      })
      res.json(spot)
    }
  },

  async index(req, res) {
    const { techs } = req.query
    spot = await Spot.find({ techs })
    res.json(spot)
  }
}