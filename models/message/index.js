exports = module.exports = function(collection, mongoose, validators) {
    var schema = mongoose.Schema({
        receiver: {
            type: String,
            validate: [validators.email, 'email is not valid'],
            required: true,
            index: true
        },
        subject: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        deliveryDate: {
            type: Date,
            required: true,
            default: Date.now
        }
    });

    return mongoose.model(collection, schema);
};
