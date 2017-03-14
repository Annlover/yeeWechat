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

//装逼大百科点击排行榜
var BaikeRankSchema = new Schema({
    type: {type: String, default: '1'},     //1-装逼大百科
    name: {type: String, unique:true},
    rank: {type: Number},
    totalTime: {type: Number},
    level: {type: String},
    createTime: {type: Date, default: Date.now}
});

exports.TSRank = db.mongoConn.model('TSRank', TSRankSchema, 'TSRank');
exports.BaikeRank = db.mongoConn.model('BaikeRank', BaikeRankSchema, 'BaikeRank');