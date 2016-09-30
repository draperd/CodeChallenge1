module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.less$/,
              loader: "style!css!less"
            },
            {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               loader: "babel",
               query: {
                 presets: ["es2015"]
               }
             }
        ]
    }
};
