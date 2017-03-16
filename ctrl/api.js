var model = require("../models/model"),
    modelTSRank = model.TSRank,
    modelBaikeRank = model.BaikeRank,
    then = require("thenjs");

exports.reportTSRank = function(req, res) {
    var name = req.body.name;
    var rank = req.body.rank;

    if(!name || name == ""){
        res.status(400).json({errCode : "err001", errMsg : "名字输入错误"})
        return;
    }

    if(!rank || rank < 20){
        res.status(400).json({errCode : "err002", errMsg : "请不要开挂"})
        return;
    }

    var rankSchema = {
        name: req.body.name,
        phone: req.body.phone || "",
        rank: req.body.rank
    };

    var retCode = "err000";
    var retMsg = "处理成功";
    var retBody = {errCode : retCode, errMsg : retMsg}

    then(function(cont){
        modelTSRank.findOne({name: req.body.name}).exec(function(err, doc){
            cont(err, doc);
        })
    }).then(function(cont, doc){
        //若数据库已存在记录，并且该成绩比本次提交的成绩更高，则不计入数据
        if(doc){
            __logger.info(doc.rank)
            __logger.info(rank)
            if(doc.rank <= rank){
                var err = new Error();
                err.code = "err003"
                err.message = "已存在更高成绩数据，不计入排行榜"
                cont(err)
            }else{
                modelTSRank.findOneAndUpdate({name: name}, {$set: {rank: rank, createTime: Date.now()}}, null, function(err, doc){
                    cont(err, doc)
                })
            }
        //若同一个姓名的本次成绩高于数据库历史数据，则更新该数据
        }else{
            new modelTSRank(rankSchema).save(function(err, doc){
                cont(err, doc)
            });
        }
    }).then(function(cont, doc){
        res.json(retBody)
    }).fail(function(cont, err){
        res.status(400).json({errCode: err.code, errMsg: err.message})
    })

}

//查询手速点击排行
exports.listTSRank = function (req, res) {

    modelTSRank.find().sort({rank: 1}).limit(10).exec(function(err, doc){
        res.json(doc)
    })
}

exports.reportBaikeRank = function(req, res) {
    var name = req.body.name;
    var rank = req.body.rank;
    var totalTime = req.body.totalTime;
    var level = req.body.level;

    var errItem;

    if(!name || name == ""){
        errItem = {errCode : "err001", errMsg : "名字输入错误"}
        __logger.error(errItem)
        res.status(400).json(errItem)
        return;
    }

    if(!rank || rank > 9999){
        errItem = {errCode : "err002", errMsg : "你答题有点太多了吧，请不要开挂"}
        __logger.error(errItem)
        res.status(400).json(errItem)
        return;
    }

    if(rank > 100 && totalTime < 50000){
        errItem = {errCode : "err002", errMsg : "你是非人类手速么？你这么牛逼应该关注并推广我们嘛!"}
        __logger.error(errItem)
        res.status(400).json(errItem)
        return;
    }

    var rankSchema = {
        name: name,
        rank: rank,
        totalTime: totalTime || "",
        level: level
    };

    var retCode = "err000";
    var retMsg = "处理成功";
    var retBody = {errCode : retCode, errMsg : retMsg}

    then(function(cont){
        modelBaikeRank.findOne({name: req.body.name}).exec(function(err, doc){
            cont(err, doc);
        })
    }).then(function(cont, doc){
        //若数据库已存在记录，并且该成绩比本次提交的成绩更高，则不计入数据
        if(doc){
            if(doc.rank >= rank){
                var err = new Error();
                err.code = "err003"
                err.message = "当前登录用户已存在更高成绩数据，不计入排行榜"
                cont(err)
            }else{
                modelBaikeRank.findOneAndUpdate({name: name}, {$set: {rank: rank, totalTime: totalTime, level: level, createTime: Date.now()}}, null, function(err, doc){
                    cont(err, doc)
                })
            }
            //若同一个姓名的本次成绩高于数据库历史数据，则更新该数据
        }else{
            new modelBaikeRank(rankSchema).save(function(err, doc){
                cont(err, doc)
            });
        }
    }).then(function(cont, doc){
        res.json(retBody)
    }).fail(function(cont, err){
        errItem = {errCode: err.code, errMsg: err.message}
        __logger.error(errItem)
        res.status(400).json(errItem)
    })

}

//装逼大百科排行
exports.listBaikeRank = function (req, res) {

    modelBaikeRank.find().sort({rank: -1}).limit(50).exec(function(err, doc){
        res.json(doc)
    })
}