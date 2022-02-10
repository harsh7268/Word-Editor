const path = require("path");
module.exports = {
    devServers:{
        contentBase:path.resolve(__dirname, './src'),
        historyApiFallback:true
    },
    entery:path.resolve(__dirname, './src/index.js'),
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            }
        ]
    },
    output:{
        filename:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
    }

}