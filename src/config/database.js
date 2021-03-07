const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/todo', {
    useNewUrlParser: true
})