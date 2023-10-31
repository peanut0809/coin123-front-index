const hostUrl = 'http://127.0.0.1:8126/'

module.exports = {
  // 设置代理（开发环境）
  devServer: {
    proxy: hostUrl
  },
  // 
  chainWebpack: config => {
    // 图片压缩
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
        disable: process.env.NODE_ENV == 'development' ? true : false, // 开发环境不启用压缩，提升开发速度
        mozjpeg: {
          progressive: true,
          quality: 50
        },
        optipng: {
          enabled: true,
        },
        pngquant: {
          quality: [0.5, 0.65],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        }
      })
      .end()
  },
  configureWebpack: config => {
    // 开启测试环境下的sourcemap
    config.devtool = process.env.NODE_ENV !== 'production' ? 'source-map' : ''
  },
  // 查看css属于哪个css文件
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}