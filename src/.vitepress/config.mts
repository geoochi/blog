import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "Homepage of Geogi Chi",
  lastUpdated: true,
  markdown: { math: true },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/blog/170km-shenzhen' },
    ],

    sidebar: {
      'blog': {
        base: '/blog', items: [
          {
            text: 'City Log', collapsed: false, items: [
              { text: '20240803 无人机表演', link: '/clog-20240803' },
              { text: '20240721 无人机外卖', link: '/clog-20240721' },
            ]
          },
          { text: 'Yak Shaving', link: '/yak-shaving' },
          { text: 'VueConf 2024', link: '/vueconf-2024' },
          { text: 'Track Fly', link: '/track-fly' },
          { text: '170 km autour de Shenzhen', link: '/170km-shenzhen' },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geogichi' },
    ]
  }
})
