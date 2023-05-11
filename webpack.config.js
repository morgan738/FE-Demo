const path = require('path')

module.exports = {
    entry: './client/components/Main.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      ],
    },
  };
  