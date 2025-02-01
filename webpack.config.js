const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    mode: 'development',
  };
};