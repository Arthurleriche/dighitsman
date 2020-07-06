process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

import AntdScssThemePlugin from 'antd-scss-theme-plugin';

const webpackConfig =  {
  // ...
  plugins: [
    new AntdScssThemePlugin('./theme.scss'),
  ],
};
