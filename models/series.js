const mongoose  = require('mongoose')
const SeriesSchema  = mongoose.Schema({
    name: String,
    status:{
        type:String,
        enumValues: [ 'to-watch', 'watching', 'watched']
    },
    comments:[ String]
})

const Serie = mongoose.model('Serie', SeriesSchema)
module.exports = Serie