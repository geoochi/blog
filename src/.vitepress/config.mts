import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "Homepage of Geoo Chi",
  lastUpdated: false,
  markdown: { math: true },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/blog/20240930-run-shenzhen-talent-park' },
    ],

    sidebar: {
      'blog': {
        base: '/blog', items: [
          { text: '第一次跑完人才公园', link: '/20240930-run-shenzhen-talent-park' },
          { text: '深圳湾无人机表演', link: '/20240803-shenzhen-bay-drone-show' },
          { text: '深圳湾无人机外卖', link: '/20240721-shenzhen-bay-drone-delivery' },
          { text: 'Yak Shaving', link: '/20240708-yak-shaving' },
          { text: 'VueConf 2024', link: '/20240707-vueconf-2024' },
          { text: '170 km autour de Shenzhen', link: '/20190421-170km-shenzhen' },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geoochi' },
    ]
  }
})
