import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Home",
  description: "Homepage of Geogi Chi",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/blog/track-fly' }
    ],

    sidebar: {
      'blog': {
        base: '/blog', items: [
          { text: 'Track flying animation', link: '/track-fly' },
          { text: '170 km autour de Shenzhen', link: '/170km-shenzhen' },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/szchixy' }
    ]
  }
})
