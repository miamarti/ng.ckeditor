var path    = require('path');
var webpack = require('webpack');

var dist_dir_path = path.resolve(__dirname, './dist');
module.exports = {
    entry: {
        'ng-ckeditor'    : './src/ng-ckeditor.js',
        'ng-ckeditor.min': './src/ng-ckeditor.js'
    },
    output: {
        path         : dist_dir_path,
        filename     : '[name].js',
        library      : 'ngCkeditor',
        libraryTarget: 'umd'
    },
    externals: {
        'angular': {
            commonjs : 'angular',
            commonjs2: 'angular',
            amd      : 'angular',
            root     : 'angular'
        },
        'ckeditor': {
            commonjs : 'ckeditor',
            commonjs2: 'ckeditor',
            amd      : 'ckeditor',
            root    : 'CKEDITOR'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
