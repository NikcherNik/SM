/**
 * Created by Nikcher on 20.12.2016.
 */

module.exports = {
    //context: __dirname+ '/app',
    entry: "./app/index.js",
    output:{
        path: "./app",
        filename: "bundle.js",
        //library: "home"
    },
    watch: true,
    module:{
        loaders:[
            { test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,

            },
            { test: /\.(less|css)$/, loader: "style-loader!css-loader!less-loader" },
            { test: /.(jpg|png|svg)$/, use: 'url-loader?limit=8192&name=./img/[hash].[ext]'},
            { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
            { test: /\.svg$/, loader: "file" }
        ]

    }
};