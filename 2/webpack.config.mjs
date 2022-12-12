import path from "path";

export default{
    entry:"./2.3.mjs",
    output:{
        filename :"webpack.bundle.js",
        path: path.resolve(".")
    },
}