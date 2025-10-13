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
    aside: false,
    // https://vitepress.dev/reference/default-theme-config
    // sidebar: [
    // ],
  },
})
