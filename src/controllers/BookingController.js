const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id, spot_id } = req.headers;
    const { data } = req.body
    const booking = await Booking.create({ user_id, spot_id, data })

    await booking.populate('user_id').populate(spot_id)
    return res.json(booking)
  }
}