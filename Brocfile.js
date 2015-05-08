var mergeTrees       = require('broccoli-merge-trees');
var pickFiles        = require('broccoli-static-compiler');
var autoprefixer     = require('broccoli-autoprefixer');
var compileLess      = require('broccoli-less-single');

sourceTrees = pickFiles('app', {
    srcDir:  '/',
    destDir: '/'
});

appCss = compileLess(sourceTrees, 'stylesheets/main.less', 'app.css');
appCss = autoprefixer(appCss);

vendorJs  = pickFiles('bower_components/html5shiv/dist/',{
  srcDir: '/',
  destDir: '/vendor',
  files: ['html5shiv.min.js']
});

publicFiles = 'app/public';
module.exports = mergeTrees([appCss, vendorJs, publicFiles])
