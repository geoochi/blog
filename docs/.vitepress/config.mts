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
    aside: false
    // https://vitepress.dev/reference/default-theme-config
    // sidebar: [
    //   { text: '深圳湾无人机表演', link: '/shenzhen-bay-drone-show' },
    //   { text: '深圳湾无人机外卖', link: '/shenzhen-bay-drone-delivery' },
    //   { text: 'Yak Shaving', link: '/yak-shaving' },
    //   { text: 'VueConf 2024', link: '/vueconf-2024' },
    //   { text: '170 km tour de Shenzhen', link: '/170km-tour-de-shenzhen' },
    // ],
  },
})
