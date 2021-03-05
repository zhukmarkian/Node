const { Schema, model } = require('mongoose');

const { constants } = require('../../constan');

const oAuthSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: 'USER' },
}, { timestamps: true });

module.exports = model(constants.O_Auth, oAuthSchema);
