
const { src, dest, watch, series, parallel, task } = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    compileSass = require('gulp-dart-sass'),
    minifyCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    include = require('gulp-html-tag-include'),
    nunjucksRender = require("gulp-nunjucks-render"),
    gls = require("gulp-live-server"),
    image = require('gulp-imagemin')
;

const processors = [
    autoprefixer({
        overrideBrowserslist: [
            '>= 1%',
            'last 1 major version',
            'Chrome >= 45',
            'Firefox >= 38',
            'Edge >= 12',
            'Explorer >= 10',
            'iOS >= 9',
            'Safari >= 9',
            'Android >= 4.4',
            'Opera >= 30'
        ],
        map: false
    })
];

function sass() {
    return src("src/assets/sass/*.scss")
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(postcss(processors))
        .pipe(dest("dist/assets/css/"))
        .pipe(minifyCss({
            level: { 1: { specialComments: 0 } }
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest("dist/assets/css/"));
}

function css(){
    return src("src/assets/css/**/*.*")
        .pipe(dest("dist/assets/css/"))

        ;
}

function fonts() {
    return src("src/assets/fonts/**/*.*")
        .pipe(dest("dist/assets/fonts/"));
}

function images() {
    return src("src/assets/img/**/*.*")
        .pipe(image())
        .pipe(dest("dist/assets/img/"))
        ;
}

function media() {
    return src("src/assets/media/**/*.*")
        .pipe(dest("dist/assets/media/"))
        ;
}

function plugins() {
    return src("src/assets/plugins/**/*.*")
        .pipe(dest("dist/assets/plugins/"))
        ;
}

function svg() {
    return src("src/assets/svg/**/*.*")
        .pipe(image())
        .pipe(dest("dist/assets/svg/"))
        ;
}

function js() {
    return src("src/assets/js/**/*.js")
        .pipe(include())
        .pipe(uglify())
        .pipe(dest('dist/assets/js'));
}

function vendors() {
    return src("src/vendors/**/*.*")
        .pipe(dest("dist/vendors/"))
        ;
}

function html() {
    return src("src/*.html")
        .pipe(include())
        .pipe(nunjucksRender({
            path: [
                'src/',
                'src/templates/',
                'src/templates/components',
            ] // String or Array
        }))
        .pipe(dest('dist'));
}


function htmlSubSite(){
    return src("src/subSite/*.html")
        .pipe(include())
        .pipe(nunjucksRender({
            path: [
                'src/',
                'src/templates/',
                'src/templates/components',
            ] // String or Array
        }))
        .pipe(dest('dist/subSite'))
        ;
}

function htmlPages(){
   return src("src/pages/*.html")
       .pipe(include())
       .pipe(nunjucksRender({
           path: [
               'src/',
               'src/templates/',
               'src/templates/components',
           ] // String or Array
       }))
       .pipe(dest('dist/pages'))
       ;
}

function watchSaaS(){
    return watch("src/assets/sass/**/*.scss", series(sass))
}

function watchCSS(){
    return watch("src/assets/css/*.*", series(css))
}

function watchHTML(){
    return watch("src/**/*.html", series(html,htmlSubSite,htmlPages))
}

function watchImages(){
    return watch("src/assets/img/**/*.*", series(images))
}

function watchSVG(){
    return watch("src/assets/svg/**/*.*", series(svg))
}

function watchJS(){
    return watch("src/assets/js/**/*.*", series(js))
}

function watchMedia(){
    return watch("src/assets/media/**/*.*", series(media))
}

function watchPlugins(){
    return watch("src/assets/plugins/**/*.*", series(plugins))
}


function watchFiles() {
    return watch("src/**/*.*", series(sass, html, htmlSubSite , htmlPages, fonts, js,css, vendors, media, plugins))
}

function serve(){
    var server = gls.static("dist",4545);
    server.start();
    watchSaaS();
    watchCSS();
    watchHTML();
    watchImages();
    watchSVG();
    watchJS();
    watchMedia();
    watchPlugins();
}


exports.default = series(sass, fonts, js, vendors, html, svg, image, htmlSubSite,htmlPages, css, media, plugins);
exports.lite = series(sass, fonts, js, vendors, html, htmlSubSite,htmlPages, css, media, plugins);
exports.serve = series(serve);