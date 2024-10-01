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
      { text: 'Blog', link: '/blog/run-shenzhen-talent-park' },
    ],

    sidebar: {
      'blog': {
        base: '/blog', items: [
          { text: '第一次跑完人才公园', link: '/run-shenzhen-talent-park' },
          { text: '深圳湾无人机表演', link: '/shenzhen-bay-drone-show' },
          { text: '深圳湾无人机外卖', link: '/shenzhen-bay-drone-delivery' },
          { text: 'Yak Shaving', link: '/yak-shaving' },
          { text: 'VueConf 2024', link: '/vueconf-2024' },
          { text: '170 km tour de Shenzhen', link: '/170km-tour-de-shenzhen' },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geoochi' },
    ]
  }
})
