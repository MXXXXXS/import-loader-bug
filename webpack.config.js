const { resolve, join } = require("path")

const workspace = resolve(__dirname)

module.exports = {
  entry: {
    app: join(workspace, "src/app.js"),
  },
  target: "node",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "imports-loader",
            options: {
              imports: "default path path",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}
