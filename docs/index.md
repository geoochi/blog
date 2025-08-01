---
sidebar: false
aside: false
next: false
---

<script setup>
import { data } from './posts.data.js'
// 按日期倒序排序
const sorted = [...data].filter(item => item.frontmatter?.date).sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date))
// 按年份分组
const groups = sorted.reduce((acc, item) => {
  const year = item.frontmatter.date.slice(0, 4)
  if (!acc[year]) acc[year] = []
  acc[year].push(item)
  return acc
}, {})
const years = Object.keys(groups).sort((a, b) => b - a)
</script>

<div class="container">
  <div>
    <div v-for="year in years" :key="year" class="year-group">
      <div class="year-watermark">{{ year }}</div>
      <div v-for="item in groups[year]" :key="item.url" class="post-row">
        <a v-if="item.url!=='/'" :href="''+item.url" class="blog-link">
          <span class="post-title">{{ item.frontmatter.title }}</span>
          <span class="post-date">{{ formatDate(item.frontmatter.date) }}</span>
        </a>
      </div>
    </div>
  </div>
</div>

<script>
// 日期格式化：2024-07-08 => Jul 8
export function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric' })
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.year-group {
  margin: 8em auto 4em auto;
  position: relative;
}
.year-watermark {
  font-size: 8em;
  color: transparent;
  -webkit-text-stroke-color: rgb(127, 127, 127, 0.1);
  -webkit-text-stroke-width: 4px;
  font-weight: 700;
  position: absolute;
  left: -0.4em;
  top: -0.5em;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}
.post-row {
  position: relative;
  z-index: 1;
}

@media (max-width: 400px) {
  .blog-link {
    flex-direction: column;
  }
}

.blog-link {
  display: flex;
  /* width: 100%; */
  color: #999;
  margin: 1em 0;
  /* padding: 0em 2em 0em 4em; */
  border-radius: 10px;
  text-decoration: none;
  /* font-weight: 500; */
  font-size: 1.3em;
  /* background: #fff; */
  /* box-shadow: 0 2px 8px rgba(60, 60, 60, 0.08); */
  /* transition: box-shadow 0.2s; */
}
.blog-link:hover {
  color: #000;
  /* box-shadow: 0 20px 25px rgba(145, 145, 145, 0.15); */
  /* background: #f7f7f7; */
}

/* 移除 prefers-color-scheme 媒体查询，改为 .dark 类控制 */
.dark .blog-link {
  color: #777;
}
.dark .blog-link:hover {
  color: #fff;
}
.post-title {
  /* flex: 1; */
  padding-right: 8px;
  font-weight: 500;
  /* color: #222; */
}
.post-date {
  /* color: #aaa; */
  font-size: 0.7em;
  font-weight: 400;
}
</style>
