const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production", //"production",
    devtool: "source-map",
    watch: true,
    watchOptions: {
        aggregateTimeout: 2000,
        poll: 1000,
    },
    performance: {
        maxEntrypointSize: 1000000000000,
        maxAssetSize: 300000000000000,
    },
    entry: {
        index: "./src/index.js",
        // index: {
        //     import: "./src/index.js",
        //     dependOn: "shared",
        // },
        // another: {
        //     import: "./src/another-module.js",
        //     dependOn: "shared",
        // },
        // shared: "lodash",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        chunkFilename: "[name].[contenthash].js",
        filename: "[name].[contenthash].js",
        clean: true,
    },
    optimization: {
        runtimeChunk: "single",
        // splitChunks: { chunks: "all" },
    },
    devServer: {
        static: "./dist",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //主要给js文件直接引入的图片资源使用，css文件中的图片资源css-loader已经解决
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: "asset/resource",
            },
            //主要给js文件直接引入的font资源使用，css文件中的font资源css-loader已经解决
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "资源管理",
        }),
    ],
};
