import mongoose from 'mongoose';

/**
 * HitApi Schema
 * @private
 */
const hitApiSchema = new mongoose.Schema({
  api: {
    type: String,
  },
  count: { type: Number, default: 0 },
}, { timestamps: true });

const HitApi = mongoose.model('HitApi', hitApiSchema);

export default HitApi;
