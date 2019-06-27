const mongoose = require('mongoose')
const {Schema} = mongoose

const contentSchema = new Schema({
    text: String
})

const ContentModel = mongoose.model('content', contentSchema)
module.exports = ContentModel