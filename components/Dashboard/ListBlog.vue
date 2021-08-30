<template>
  <div class="card">
    <div class="card-header">Danh sách tin tức</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1" scope="col">#</th>
            <th class="col-2" scope="col">Ảnh mô tả</th>
            <th class="col-3" scope="col">Tiêu đề</th>
            <th class="col-4" scope="col">Mô tả</th>
            <th class="col-2" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="blogs.length === 0">
            Chưa có bài viết nào !
          </tr>
          <tr v-for="blog in blogs" :key="blog.id" class="d-flex">
            <th scope="row" class="col-1">{{ blog.id }}</th>
            <td class="col-2">
              <img :src="blog.thumbnail | img" class="mw-100" />
            </td>
            <td class="col-3">{{ blog.title }}</td>
            <td class="col-4">{{ blog.blog_desc }}...</td>
            <td class="col-2">
              <nuxt-link
                :to="{
                  name: 'dashboard-blog-edit-id',
                  params: { id: blog.id },
                }"
                class="btn btn-primary"
                ><edit-3-icon size="1.5x"></edit-3-icon
              ></nuxt-link>
              <a href="#" class="btn btn-danger"
                ><trash-2-icon size="1.5x"></trash-2-icon
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'
export default {
  components: {
    Edit3Icon,
    Trash2Icon,
  },
  data() {
    return {
      blogs: [],
    }
  },
  async fetch() {
    this.blogs = await this.$axios.$get('http://127.0.0.1:8000/api/blogs')
    this.$store.dispatch('fetchBlogs')
  },
}
</script>
