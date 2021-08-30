<template>
  <div>
    <div
      class="
        d-flex
        justify-content-between
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      "
    >
      <h1 class="h3">Thêm tin tức mới</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-blog' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách tin tức
          </nuxt-link>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            In
          </button>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
    <!-- list table -->
    <form @submit.prevent="editBlog">
      <div class="form-group">
        <label for="name">Tiêu đề:</label>
        <input
          v-model="form.title"
          type="text"
          placeholder="nhập tiêu đề tin tức"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Ảnh hiển thị:</label>
        <div v-if="form.thumbnail" class="row">
          <div class="col-3">
            <img :src="form.thumbnail | imagePreview" class="img-thumbnail" />
          </div>
        </div>
        <input type="file" class="form-control" @change="onFileChange" />
      </div>
      <div class="form-group">
        <label for="name">Mô tả:</label>
        <textarea
          v-model="form.blog_desc"
          class="form-control"
          rows="3"
          placeholder="nhập mô tả cho tin tức"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="name">Nội dung:</label>
        <textarea
          v-model="form.content"
          class="form-control"
          rows="5"
          placeholder="nhập nội dung cho tin tức"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-warning">Sửa</button>
    </form>
  </div>
</template>
<script>
export default {
  filters: {
    imagePreview: (value) => {
      if (!value.includes('base64')) {
        return 'http://127.0.0.1:8000' + value
      } else {
        return value
      }
    },
  },
  layout: 'admin',
  data() {
    return {
      form: {
        title: '',
        blog_desc: '',
        content: '',
        thumbnail: '',
      },
    }
  },
  created() {
    const curblog = this.$store.getters.blogs.find((blog) => {
      return blog.id === this.$route.params.id
    })
    this.form = { ...curblog }
  },
  methods: {
    editBlog() {
      this.$axios
        .$post(
          `http://127.0.0.1:8000/api/blogs/${this.$route.params.id}?_method=PUT`,
          {
            title: this.form.title,
            blog_desc: this.form.blog_desc,
            content: this.form.content,
            thumbnail: this.form.thumbnail,
            user_id: this.$auth.user.id,
          }
        )
        .then((result) => {
          this.$toast.success('Sửa tin tức thành công!')
          this.$router.push('/dashboard/blog')
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
          this.$toast.error('Sửa tin tức thất bại!')
        })
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      const reader = new FileReader()
      const vm = this
      reader.onload = (e) => {
        vm.form.thumbnail = e.target.result
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>
