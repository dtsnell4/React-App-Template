'use strict';

var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var colors = plug.util.colors;
var env = plug.util.env;
var log = plug.util.log;
var config = require('../gulp.config.json');
var del = require('del');

config.build = config.build + config.version +'/';

/**
 * Create $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', 'Create $templateCache from the html templates', function () {
    log('Creating an AngularJS $templateCache');

    return gulp
        .src(config.htmltemplates)
        .pipe(plug.minifyHtml({
            empty: true
        }))
        .pipe(plug.angularTemplatecache('templates.js', {
            module: config.appname + '.layout',
            standalone: false,
            root: 'app'
        }))
        .pipe(gulp.dest(config.build));
});

gulp.task('copy', 'Copy config files', function () {
    log('copy Config files');

    return gulp.src(config.copy).pipe(gulp.dest(config.build));

});

gulp.task('copyFroalaCss', 'Copy froala to css', function () {
    log('copy froall css');

    return gulp.src(config.copyFroalaCss).pipe(gulp.dest(config.build + "css"));

});


/**
 * Minify and bundle the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', 'Bundld, minify, and copy the app\'s JavaScript', ['templatecache'], function () {
    log('Bundling, minifying, and copying the app\'s JavaScript');

    var source = [].concat(config.js, config.build + 'templates.js');
    return gulp
        .src(source)
        .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
        .pipe(plug.replace(/{{analytics}}/g, config.analytics))
        .pipe(plug.concat(config.appname + '.min.js'))
        .pipe(plug.ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(plug.bytediff.start())
        //.pipe(plug.uglify({
        //    mangle: false
        //}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(plug.sourcemaps.write('./'))        
        .pipe(gulp.dest(config.build));
});

/**
 * Copy the Vendor JavaScript
 * @return {Stream}
 */
gulp.task('vendorjs', 'Bundle, minify, and copy the Vendor JavaScript', ['ie9js'], function () {
    log('Bundling, minifying, and copying the Vendor JavaScript');

    return gulp.src(mainBowerFiles({ filter: '**/*.js' }))
        .pipe(plug.concat('vendor.min.js'))
        .pipe(plug.bytediff.start())
        //.pipe(plug.cache(plug.uglify()))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(config.build));
    
});

/**
 * Minify and bundle the CSS
 * @return {Stream}
 */
gulp.task('css', 'create app css',function () {
    log('Bundling, minifying, and copying the app\'s CSS');

    return gulp.src(config.css)
        .pipe(plug.concat(config.appname + '.min.css')) // Before bytediff or after
        .pipe(plug.autoprefixer('last 2 version', '> 5%'))
        .pipe(plug.bytediff.start())
        .pipe(plug.minifyCss({}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        //        .pipe(plug.concat('all.min.css')) // Before bytediff or after
        .pipe(gulp.dest(config.build+"css"));
});

gulp.task('cleancss', 'create app css',function () {
    log('Bundling, minifying, and copying the app\'s CLEAN CSS');

    return gulp.src(config.cleancss)
        .pipe(plug.concat(config.appname + '.clean.min.css')) // Before bytediff or after
        .pipe(plug.autoprefixer('last 2 version', '> 5%'))
        .pipe(plug.bytediff.start())
        .pipe(plug.minifyCss({}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        //        .pipe(plug.concat('all.min.css')) // Before bytediff or after
        .pipe(gulp.dest(config.build+"css"));
});

/**
 * Minify and bundle the Vendor CSS
 * @return {Stream}
 */
gulp.task('vendorcss','create vendor.css', function () {
    log('Compressing, bundling, copying vendor CSS');

    return gulp.src(mainBowerFiles({ filter: '**/*.css' }))
        .pipe(plug.concat('vendor.min.css'))
        .pipe(plug.bytediff.start())
        .pipe(plug.cache(plug.minifyCss({})))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(config.build+'css'));
});

/**
 * Copy fonts
 * @return {Stream}
 */
gulp.task('fonts', 'copy fonts',function () {
    log('Copying fonts');
    var bowerfiles = mainBowerFiles(['**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']);	
    gulp.src(bowerfiles).pipe(gulp.dest(config.build+'fonts'));
	
	return gulp.src(['./app/style/fonts/*'])
	.pipe(gulp.dest(config.build+'fonts'));		
   
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', "Minify and copy images",function () {
    var dest = config.build + 'images';
    log('Compressing, caching, and copying images');
    return gulp
        .src(config.images)
        /*.pipe(plug.cache(plug.imagemin({
            optimizationLevel: 3
        })))*/
        .pipe(gulp.dest(dest));
});


gulp.task('ie9js','ie9', function () {
    log('Copying ie9 files...');
    return gulp.src(config.ie9jsfiles)
                .pipe(gulp.dest(config.build));

});

gulp.task('build', 'Build App for prod', [ 'lint',
    'vendorjs', 'vendorcss', 'js', 'css', 'cleancss', 'images', 'fonts', 'copy', 'copyFroalaCss'], function () {
    log('Build is Done');
    //cb();
});

gulp.task('clean', function (cb) {
    log('Cleaning: ' + plug.util.colors.blue(config.build));

    var delconfig = [].concat(config.build);
    return plug.cache.clearAll(function() {
        del(delconfig, cb);
    });

});

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}
/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted percentage
 */
function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}