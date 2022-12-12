import path from "path";
export default {
    entry: "./3.3.mjs",
    output: {
        filename: "output.js",
        path: path.resolve(".")
    },

    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                ie: "1",
                                chrome: "50"
                            }
                        }]
                    ]
                }
            }
        }]
    }
}