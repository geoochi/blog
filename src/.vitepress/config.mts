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
    sidebar: {
      'blog': {
        base: '/blog', items: [
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geoochi' },
    ]
  }
})
