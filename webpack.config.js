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
    watch: true
};