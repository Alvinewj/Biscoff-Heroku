const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        max: 100,
    },
    last_name: {
        type: String,
        required: true,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100,
    },
    pwsalt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    addresses: [{

        addr_line_1: {
            type: String,
            required: true,
        },
        addr_line_2: {
            type: String,
        },
        unit: {
            type: String,
        },
        postal: {
            type: String,
            required: true,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    }],
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    
})

const UsersModel = mongoose.model('Users', userSchema)

module.exports = UsersModel
