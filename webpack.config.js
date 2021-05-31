const path = require('path')

module.exports = {
    entry: './src/js/index.js',

    output:{
        path: path.resolve(__dirname, 'lib/js'),
        filename:'./dist/js/index.js',
    },
    mode : 'production'
}