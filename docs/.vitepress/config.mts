import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GeooChi's Blog",
  base:'/blog/',
  // assetsDir: 'assets',
  // outDir: '../dist/',
  lastUpdated: false,
  markdown: { math: true },
  cleanUrls: true,
  themeConfig: {
    // aside: false,
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      { text: '深圳湾无人机表演', link: '/20240803' },
      { text: '深圳湾无人机外卖', link: '/20240721' },
      { text: 'Yak Shaving', link: '/20240708' },
      { text: 'VueConf 2024', link: '/20240707' },
      { text: '170 km tour de Shenzhen', link: '/20190421' },
    ],
  },
})
