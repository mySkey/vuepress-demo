# 使用vuePress来建设文档<a href="http://caibaojian.com/vuepress/" target="_blank">官方文档</a>

* <a href="http://caibaojian.com/vuepress/" target="_blank">GIT仓库demo地址</a>

### 一、入门搭建

* 1、 安装yarn，vuepress，使用npm安装vuepress的话会出现这种，当将 VuePress 安装到以 webpack 3.x 作为依赖项的已有项目中时，推荐使用Yarn 而不是 npm。因为在这种情况下，Npm 无法生成正确的依赖关系树。

```
npm install -g yarn
yarn global add vuepress
```

* 2、创建一个项目

```
mkdir vuepress-demo
cd vuepress-demo
npm init -y
```

* 3、安装本地vuepress依赖，构建目录

```
yarn add -D vuepress # 或 npm install -D vuepress
```

然后，给 package.json 添加一些 scripts 脚本：

```javascript
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

* 4、构建项目目录

4.1 在vuepress-demo> 执行

```
mkdir docs
mkdir .vuepress
```

4.2 在.vuepress文件夹下面创建config.js，public文件夹

```
touch config.js
mkdir public
```

config.js是VuePress必要的配置文件，它导出一个javascript对象

```javascript
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

4.3 将vuepress官网的logo图片放到public文件夹下，此时目录结构为：

```
vuepress-demo
├── docs
└── .vuepress
      └── public
      │   └──hero.png
      └──config.js
├── node_modules
└── package.json
```

4.4 开始首页

在docs文件夹下面创建一个README.md。默认的主题提供了一个首页，像下面一样设置home:true即可，可以把下面的设置放入README.md中，待会儿你将会看到跟VuePress一样的主页。

```markdown
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

4.5 就可以看到一个和vuepress官网一样的首页了

### 二、配置

.vuepress文件夹下的config.js就是整个项目的配置文件

```javascript
module.exports = {
  title: 'VuePress中文网',
  description: 'Vue 驱动的静态站点生成工具',
  host: '0.0.0.0',    // 配置主机名
  port: 9999,         // 配置端口

  themeConfig: {      // 主题配置
    nav: [            // 顶栏导航配置
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'http://www.22family.com' },
      { text: 'Language', items: [
        {
          text: 'Chinese', link: '/zh/'
        },
        {
          text: 'English', link: '/en/'
        }
      ]}
    ],
    sidebar: {        // 侧边栏配置
      '/guide/': getSlider('Guide', ['', 'advanced'])
    },
    lastUpdated: 'Last Updated'
  },

  configureWebpack: {  // webpack配置
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },

  markdown: {         // makdown配置
    lineNumbers: true
  },
  
}

function getSlider(title, children) {
  return [
    {
      title,
      collapsable: false,
      children
    }
  ]
}
```

### 三、参考文献

<a href="https://blog.csdn.net/weixin_38318244/article/details/80162782" target="_blank">搭建静态博客文档</a>