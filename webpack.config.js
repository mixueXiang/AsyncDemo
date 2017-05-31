//webpack.config.js
  var webpack = require("webpack");
  var path = require('path');
  var host = 'localhost';
  var port = '8080';
  
  var devConfig = {
      host: host,
      port: port,
      entry: './client/src/main.js',
      output: {
          path: __dirname + '/client/src/build',
          filename: 'bundle.js',
          publicPath: '/'
      },
      resolve: {
          // require时省略的扩展名，如：require('module') 不需要module.js
          extensions: ["", ".js","jsx"],
      },

      plugins: [
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin(),
      ],

      module: {
        loaders: [
          {
            test: /\.jsx?$/, // .js .jsx
            loader: "react-hot",
          },
          {
            test: /\.jsx?$/, // .js .jsx
            loader: "babel", // 'babel-loader' is also a legal name to reference
            query: {
              presets: ["react", "es2015", "stage-0"]
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },

          {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader!autoprefixer-loader',
          }, 

          {
            test: /\.svg/,
            loader: 'svg-url-loader'
          }
        ]
      },
      url: {
         dataUrlLimit: 1024
      }
  };

  module.exports = devConfig;