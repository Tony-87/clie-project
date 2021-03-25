const { resolve } = require('path')
module.exports = {
  chainWebpack (config) {
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        elementUI: {
          name: 'chunk-elementUI', // split vantUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element(.*)/ // in order to adapt to cnpm
        },
        rtcSdk: {
          name: 'chunk-rtcsdk', // split vantUI into a single package
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]tools[\\/]_?jdrtc-websdk.js/ // in order to adapt to cnpm
        },
        // vantUI: {
        //     name: 'chunk-vantUI', // split vantUI into a single package
        //     priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
        //     test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
        // },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'), // can customize your rules
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
  }
}
