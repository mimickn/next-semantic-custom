const withCSS = require('@zeit/next-css')
const path = require('path')
const withLess = require('@zeit/next-less')

module.exports = withLess(withCSS({
  target: 'serverless',
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    config.resolve.alias['../../theme.config$'] = path.join(__dirname, '/src/semantic-ui/theme.config')

    return config
  }
})
)