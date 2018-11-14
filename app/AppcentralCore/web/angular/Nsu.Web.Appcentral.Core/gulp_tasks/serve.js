var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var colors = plug.util.colors;
var env = plug.util.env;
var log = plug.util.log;
var config = require('../gulp.config.json');
var port = env.port || config.port;



/**
 * serve
 
 */
gulp.task('serve', ['build'], function () {
    log('Starting BrowserSync on port ' + port);
    var browserSync = require("browser-sync").create("appcentralcore");

    browserSync.init(['./dist/**/*.*'], {
        server: {
            baseDir: './dist',
            directory: true,
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', '*');
                res.setHeader('Access-Control-Allow-Headers', '*');
                next();
            }
        },
        port: port
    });

    log('Watching all files');
    var js = ['gulpfile.js'].concat(config.js);
    var css = config.css;
	var cleancss = config.cleancss;



    gulp.watch(js, ['js']).on('change', browserSync.reload);
    gulp.watch(css, ['css']).on('change', browserSync.reload);
	gulp.watch(cleancss, ['cleancss']).on('change', browserSync.reload);
    gulp.watch(config.htmltemplates, ['js']).on('change', browserSync.reload);

});