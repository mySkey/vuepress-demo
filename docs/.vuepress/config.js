module.exports = {
  title: 'VuePress中文网',
  description: 'Vue 驱动的静态站点生成工具',
  host: '0.0.0.0',
  port: 9999,

  themeConfig: {
    nav: [
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
    sidebar: {
      // 侧边栏
      '/guide/': getSlider('Guide', ['', 'advanced'])
    },
    lastUpdated: 'Last Updated'
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },

  markdown: {
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