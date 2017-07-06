# muex

> 基于VUE的前端UI框架

## 项目中使用

### 安装
``` bash
npm install muex --save
npm install less less-loader vux-loader --save-dev
```

### 创建默认theme.less
请参考muex/src/theme.less文件在自己的工程src目录下创建一个theme.less作为默认皮肤

### 修改webpack配置
在webpack.base.conf.js中新增修改如下
``` bash
...原来的引入
const vuxLoader = require('vux-loader')

const webpackConfig = {
    ...原来的配置
}

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: [
    {
      name: 'less-theme',
      path: 'src/theme.less'
    }
  ]
})
```

## 本地调试

``` bash
git clone https://github.com/LuLuCodes/muex.git
npm install
npm run dev
```