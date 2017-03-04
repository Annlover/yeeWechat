//mongodb数据库连接
var mongoose = require('mongoose'),
    uri = 'mongodb://localhost/yeeWechat',
    conn = exports.mongoConn = mongoose.createConnection(uri);

    conn.on('error', function(e) {
        __logger.error("mongodb连接错误:" + e.message)
    });