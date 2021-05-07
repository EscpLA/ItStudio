// const CompressionPlugin = require("compression-webpack-plugin")
// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new CompressionPlugin({
//                 test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
//                 threshold: 10240,//文件大小大于这个值时启用压缩
//                 deleteOriginalAssets: false//压缩后保留原文件
//             })
//         ]
//       },
//  }

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new CompressionPlugin({
//                 filename: "[path][base].gz",
//                 algorithm: "gzip",
//                 test: /\.js$|\.css$|\.html$/,
//                 threshold: 10240,
//                 minRatio: 0.8,
//             }),
//         ],
//     }
// };
//NPM默认会进行压缩\
// module.exports = {
//     configureWebpack: config => {
//       if (isProduction) {
//         config.externals = {
//           'vue': 'Vue',
//           'vue-router': 'VueRouter',
//           'moment': 'moment'
//         }
//       }
//     }
//   }