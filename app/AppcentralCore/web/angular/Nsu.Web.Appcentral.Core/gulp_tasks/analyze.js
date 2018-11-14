'use strict';

var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var colors = plug.util.colors;
var env = plug.util.env;
var log = plug.util.log;
var config = require('../gulp.config.json');



/**
 * Lint the code, create coverage report, and a visualizer
 * @return {Stream}
 */
gulp.task('analyze', 'Analyze source with JSHint, JSCS, and Plato', function () {
    log('Analyzing source with JSHint, JSCS, and Plato');
    var merge = require('merge');
    //var jshint = analyzejshint([].concat(config.js));
    //var jscs = analyzejscs([].concat(config.js));

    startPlatoVisualizer();

    //return merge(jshint, jscs);
});
gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    return gulp.src(['App/**/*.js','!node_modules/**'])
        .pipe(eslint({ 'extends': 'angular' }))
        .pipe(eslint.format())
        //.pipe(eslint.failAfterError())
        ;
});


gulp.task('jscs', 'Analyze source with JSCS', function () {
    log('Analyzing source with JSCS');
   

    return gulp.src(config.js)
        .pipe(plug.jscs({
            fix: true
        }))
        .pipe(gulp.dest(config.client));
});




/**
 * Execute JSHint on given source files
 * @param  {Array} sources
 * @param  {String} overrideRcFile
 * @return {Stream}
 */
function analyzejshint(sources, overrideRcFile) {
    var jshintrcFile = overrideRcFile || './.jshintrc';
    log('Running JSHint');
    log(sources);
    return gulp
        .src(sources)
        .pipe(plug.jshint(jshintrcFile))
        .pipe(plug.jshint.reporter('jshint-stylish'));
}

/**
 * Execute JSCS on given source files
 * @param  {Array} sources
 * @return {Stream}
 */
function analyzejscs(sources) {
    log('Running JSCS');
    return gulp
        .src(sources)
        .pipe(plug.jscs('./.jscsrc'));
}

/**
 * Start Plato inspector and visualizer
 */
function startPlatoVisualizer() {
    log('Running Plato');
    var plato = require('plato');
    var glob = require('glob');

    var files = glob.sync('./app/**/*.js');
    var excludeFiles = /\/app\/.*\.spec\.js/;

    var options = {
        title: 'Plato Inspections Report',
        exclude: excludeFiles
    };
    var outputDir = './report/plato';

    plato.inspect(files, outputDir, options, platoCompleted);

    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);
        log(overview.summary);
    }
}