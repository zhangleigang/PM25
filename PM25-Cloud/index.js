'use strict';

require('babel-register');

var debug = require('debug')('PM2.5');
var app = require('./app');

app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
