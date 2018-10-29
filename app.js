var connect = require('connect');
var serveStatic = require('serve-static');
var port = process.env.PORT || 8080;

connect().use(serveStatic(__dirname+ '/wwww/')).listen(port, function(){
    console.log(__dirname+ '/wwww/');
    console.log('Server running on '+ port +'...');
});
