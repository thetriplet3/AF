var mongoose = require("../../dbSchema/dbConfig");
var UserSchema =  mongoose.model("User");


exports.createUser = function(user) {
    return new Promise((resolve, reject) => {
        var newUser = new UserSchema({
            name: user.name,
            address: user.address,
            password: user.password
        })

        newUser.save().then((data) => {
            resolve({
                status: 200,
                message: 'User created!'    
            })
        }).catch((error) => {
            reject({
                status: 501,
                message: 'An error has occured' + error})
        })
    })
}

exports.getAllUsers = function() {
    return new Promise((resolve, reject) => {
        UserSchema.find().exec().then((data) => {
            resolve({
                status: 200,
                message: 'Fetching all users',
                data: data
            })
        }).catch((error) => {
            reject({
                status: 404,
                message: 'An error has occured' + error})
        })
    })
}

exports.getUser = function(id) {
    return new Promise((resolve, reject) => {
        UserSchema.find({_id: id}).exec().then((data) => {
            resolve({
                status: 200,
                message: 'Fetching user',
                data: data
            })
        }).catch((error) => {
            reject({
                status: 404,
                message: 'An error has occured' + error})
        })
    })
}

exports.updateUser = function(id, user) {
    return new Promise((resolve, reject) => {
        UserSchema.update({_id: id}, user).then(() => {
            resolve({
                status: 200,
                message: 'User updated!'
            })
        }).catch((error) => {
            reject({
                status: 500,
                message: 'An error has occured' + error})
        })
    })
}

exports.deleteUser = function(id) {
    return new Promise((resolve, reject) => {
        UserSchema.remove({_id: id}).then(() => {
            resolve({
                status: 200,
                message: 'User deleted!'
            })
        }).catch((error) => {
            reject({
                status: 500,
                message: 'An error has occured' + error})
        })
    })
}