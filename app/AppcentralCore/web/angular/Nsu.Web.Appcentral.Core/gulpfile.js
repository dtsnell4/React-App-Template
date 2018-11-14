'use strict';
var gulp = require('gulp');
require('gulp-help')(gulp);
require('require-dir')('./gulp_tasks');
var plug = require('gulp-load-plugins')();
var config = require('./gulp.config.json');


var colors = plug.util.colors;
var env = plug.util.env;
var log = plug.util.log;




gulp.task('default', "Default Task", function () {

});