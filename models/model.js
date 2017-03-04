var mongoose = require('mongoose'),
    db = require('../db'),
    Schema = mongoose.Schema;

//手速点击排行榜
var TSRankSchema = new Schema({
    name: {type: String, unique:true},
    phone: {type: String},
    rank: {type: Number},
    createTime: {type: Date, default: Date.now}
});

exports.TSRank = db.mongoConn.model('TSRank', TSRankSchema, 'TSRank');