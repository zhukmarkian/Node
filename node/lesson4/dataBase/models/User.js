const { Schema, model } = require('mongoose');

const userScheme = new Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 15 },

    cars: [{ type: Schema.Types.Mixed }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userScheme.virtual('full_name').get(function() {
    const lastName = 'Heroku';
    return `${this.name} ${lastName}`;
});

userScheme.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id',
});

userScheme
    .pre('find', function() {
        console.log('PRE FIND HOOK');
        this.populate('userCars');
    })
    .pre('findOne', function() {
        console.log('PRE FIND ONE HOOK');

        this.populate('userCars');
    });

module.exports = model('User', userScheme);
