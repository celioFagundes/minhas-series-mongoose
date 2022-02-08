const mongoose  = require('mongoose')
const SeriesSchema  = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    status:{
        type:String,
        enumValues: [ 'to-watch', 'watching', 'watched']
    },
    comments:[ String]
})

const Serie = mongoose.model('Serie', SeriesSchema)
module.exports = Serie