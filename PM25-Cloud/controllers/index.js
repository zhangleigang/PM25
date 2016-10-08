/* jshint node: true */
'use strict';

var models = {};

models.buckets = require('../models/buckets');

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.redirect('/buckets');
    });

    router.get('/bucket/create', function(req, res) {
        res.render('bucket-create', {});
    });

    router.get('/bucket/:bucket/:public_key', function(req, res) {
        res.render('index', {
            servertime: new Date().getTime(),
            uuid: 'zhangleigang',
            bucket: req.params.bucket,
            public_key: req.params.public_key
        });
    });

    router.get('/buckets', async function(req, res) {
        var userAllBucketsResult = await models.buckets.getUserAllBucketsByUUID('zhangleigang');

        if(userAllBucketsResult) {
            res.render('buckets', {
                buckets: userAllBucketsResult
            });
        }
    });

    router.get('/transactions/server/:public_key/:server_name', function(req, res) {
        res.render('transactions', {
            public_key: req.params.public_key,
            server_name: req.params.server_name
        });
    });

    router.get('/graph/sunburst/:filename', function(req, res) {
        res.render('sunburst', {
            filename: req.params.filename
        });
    });
};
