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

<div v-for="year in years" :key="year" class="year-group">
  <div class="year-watermark">{{ year }}</div>
  <div v-for="item in groups[year]" :key="item.url" class="post-row">
    <a v-if="item.url!=='/'" :href="'/blog'+item.url" class="blog-link">
      <span class="post-title">{{ item.frontmatter.title }}</span>
      <span class="post-date">{{ formatDate(item.frontmatter.date) }}</span>
    </a>
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
.year-group {
  margin: 6em 0em 8em;
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
  top: -0.6em;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}
.post-row {
  position: relative;
  z-index: 1;
}

@media (max-width: 640px) {
  .blog-link {
    flex-direction: column;
  }
}

.blog-link {
  display: flex;
  /* width: 100%; */
  color: #888;
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
  color: #444
  /* box-shadow: 0 20px 25px rgba(145, 145, 145, 0.15); */
  /* background: #f7f7f7; */
}
.post-title {
  flex: 1;
  font-weight: 500;
  /* color: #222; */
}
.post-date {
  /* color: #aaa; */
  font-size: 0.7em;
  font-weight: 300;
}
</style>
