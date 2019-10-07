const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot_id: {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot'
    },
  },
  data: String,
  approved: Boolean

})

module.exports = mongoose.model('Booking', BookingSchema)