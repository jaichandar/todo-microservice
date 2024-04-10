const mongoose = require('mongoose')

module.exports.connectDb = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.mongo_url).then(() => {
            resolve({ message: 'DB Connected Successfully' })
        }).catch((err) => {
            reject({ error: err.message || 'Something Went Wrong' })
        })
    })
}