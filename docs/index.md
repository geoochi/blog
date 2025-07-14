<script setup>
import { data } from './posts.data.js'
</script>

<p v-for="item in data">
  <a v-if="item.url!=='/'" :href="'/blog'+item.url" class="blog-link">{{ item.url.substr(1) }}</a>
</p>

<style scoped>
.blog-link {
  display: inline-block;
  width: 100%;
  color: #aaa;
  margin: 0.5em 0;
  padding: 1em 2em;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5em;
  box-shadow: 0 2px 8px rgba(60, 60, 60, 0.08);
}
.blog-link:hover {
  box-shadow: 0 20px 25px rgba(145, 145, 145, 0.15);
}
</style>
