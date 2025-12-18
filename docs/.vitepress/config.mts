import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GeooChi's Blog",
  base:'https://singfor-live-9gizzbuc59a85fe6-1314828645.tcloudbaseapp.com/space/blog/',
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
