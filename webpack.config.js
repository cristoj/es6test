const commonConfig = require( './webpack.common.config' );
const path = require( 'path' );
const Webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const UglifyJsPlugin = require( "uglifyjs-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );

const { name, version } = require( './package.json' );

const dist = 'dist';

module.exports = Object.assign( commonConfig, {
  entry : './src/js/index.js',
  mode  : 'production',
  output: {
    path          : path.join( __dirname, `${dist}` ),
    filename      : `app.js`,
    library       : `${name}`,
    libraryTarget : 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use : [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin( {} )
    ]
  },

  plugins: [
    new CleanWebpackPlugin( [ dist ] ),
    new Webpack.BannerPlugin( version ),
    new HtmlWebpackPlugin( {
                             filename          : 'index.html',
                             template          : './src/index.html',
                             minify            : true,
                             hash              : true,
                             templateParameters: {
                               page: 'Inicio'
                             }
                           } ),
    new MiniCssExtractPlugin( {
                                filename: "styles.css",
                              } ),
    new UglifyJsPlugin( {
                          uglifyOptions: {
                            ecma    : 6,
                            compress: {
                              inline: 1
                            }
                          }
                        } )
  ]
} )
;
