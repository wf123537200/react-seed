# React Redux Seed 2

这个种子项目用于快速的搭建起一个基于 react redux 的项目，种子项目基于当前的实践沉淀而来，后续可根据需要不断扩展
轻量级，如需使用重量级框架，则可以使用 [http://git.code.oa.com/fd-base-js/react-redux-seed]

## 目录
1. [模块](#模块)
1. [环境要求](#环境要求)
1. [入门](#入门)
1. [应用结构](#应用结构)
1. [开发](#开发)
  1. [开发工具](#开发工具)
  1. [路由](#路由)
1. [构建系统](#构建系统)
  1. [配置](#配置)
  1. [全局变量](#全局变量)
  1. [样式](#样式)
1. [Webpack](#Webpack)
1. [学习资源](#学习资源)
1. [常见问题](#常见问题)

## 模块
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack2](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [eslint](http://eslint.org)

## 环境要求
* node `^4.5.0`
* npm `^3.0.0`

## 入门

确认你的开发环境满足[环境要求](#环境要求)后，可以按照以下步骤启动和运行项目
首先进行下载
```bash
$ git clone http://git.code.oa.com/fd-base-js/react-seed2.git
```

然后修改项目名并进入项目目录
```bash
$ mv react-redux-seed <my-project-name>
$ cd <my-project-name>
$ rm .git -rf
```

### 安装模块依赖，并检查是否可以正常运行
```bash
$ npm install                     # 安装项目依赖
$ npm run dev                     # 编译并启动开发模式
```

如果一切正常的话，你将会看到以下的输出：
```
Project is running at http://localhost:8080/
webpack output is served from /
Content not from webpack is served from /Users/wufeng/workspace/txwork/tbd-design/react-seed2/src
```

在开发的过程中，你最常用的命令为 `npm run dev`；另外也有一些其它命令：

|`npm run...`|描述|
|------------|----|
|`dev`|在 `localhost:8080` 启动应用，并在开发环境启动热重载。|
|`prd`|创建生产发布包，会自动启用md5进行缓存处理 |
|`lint`|检测所有 `.js/jsx` 文件。|
|`test`|运行测试代码，打印出测试结果|

## 应用结构

当前应用程序结构是 **分组的**，由功能分组而不是文件类型。

```
.
├── build                           所有构建相关的配置
├── src                             应用源代码目录
│   ├── components                  全局可重用的展示组件
│   │   └── _template.jsx           不使用redux的组件模板，可以直接复制
│   │   └── _template_redux.jsx     使用redux的组件模板，可以直接复制
│   ├── assets                      资源目录，用于存放图片等目录
│   ├── pages                       每个页面的相关代码
│   │   ├── home                    页面目录示例
│   │   │   └── components          页面中复用组件
│   │   │   └── servieces           页面业务服务类
│   │   │   └── utils               页面工具类
│   │   │   └── actions.js          当前页面的actions入口，如果复杂，可以使用文件夹做集合
│   │   │   └── constants.js        当前页面的常量类
│   │   │   └── index.jsx           页面入口
│   │   │   └── interface.js        页面接口配置，默认增加前缀/api
│   │   │   └── reducers.js         当前页面的reducer入口，如果复杂，可以使用文件夹做集合
│   │   └── interface.js            页面公共接口配置，比如登录等接口
│   ├── services                    全局公共服务类
│   ├── styles                      重构页面
│   │   └── pages                   各页面不同的重构目录
│   │   └── index.scss              页面入口的scss文件
│   ├── utils                       utils目录
│   │   ├── ajax.js                 jquery ajax模块扩展后，可以适应项目需求
│   │   ├── store.js                提供create方法，插入中间件等
│   ├── config.js                   全局配置，比如版本号等
│   ├── index.html                  应用的html模板
│   ├── index-css.js                应用的css集成入口
│   └── index.jsx                   应用启动文件，主入口
└── test                            测试目录
```

## 开发

### 开发工具

**我们建议使用 [Redux DevTools Chrome 插件](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)**。
使用这个 Chrome 扩展可以让你的监控器在另外一个分离的线程里面运行，并提供了更好的性能和功能。
它配备了几个最流行的监控器，很容易配置、过滤，并且不需要安装任何软件包。

#### ESLint
使用编辑器进行 ESLint

安装
```bash
npm install -g eslint babel-eslint eslint-plugin-babel eslint-plugin-react eslint-plugin-promise eslint-plugin-standard eslint-config-standard-react eslint-config-standard
```

### 路由
可以通过router.jsx的路由配置进行配置

## 构建系统
### 配置
可以通过命令prd进行构建，构建后，将生成dist目录，生成后可以直接将包发布

### 样式
支持 `.css` `.scss` 文件。将通过 index-css.js进行引入，引入后统一使用webpack进行打包

## Webpack
### Vendor 打包
待提供

## 学习资源
* [如何用react+redux+webpack快速构建出一个web页面](http://km.oa.com/group/20145/articles/show/272284)

## 常见问题
### 编译后 CPU 使用率、内存负载很高
这是一个常见的问题，一般都是因为 IDE 创建索引导致，请告诉你的编辑器不要处理部分目录。
比如，PhpStorm 中你可以右键 `node_modules` 目录，`Mark Directory As` - `Excluded`。
