module.exports = config => {
  config.module.rules.push(
    {
      test: /\.tsx$/,
      loader: "ts-loader"
    },
    {
      test: /\.s?css$/,
      use: [
        {
          loader: "style-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "css-loader",
          options: {
            root: ".",
            modules: true,
            importLoaders: 1,
            localIdentName: "[path]_[local]_[hash:base64:5]"
          }
        },
        {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {}
        }
      ]
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
