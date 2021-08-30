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
      <h1 class="h3">Sửa danh mục</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-category' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách danh mục
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
    <form enctype="multipart/form-data" @submit.prevent="editCategory">
      <div class="form-group">
        <label for="name">Danh mục cha:</label>
        <select v-model="form.parent_id" class="form-control">
          <option value="0">Chọn danh mục</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Tên danh mục:</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="nhập tên danh mục"
          class="form-control"
          maxlength="190"
        />
      </div>
      <div class="form-group">
        <label for="name">Mô tả:</label>
        <textarea
          v-model="form.cate_desc"
          class="form-control"
          rows="5"
          maxlength="190"
          placeholder="nhập mô tả cho danh mục"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="name">Ảnh đại diện:</label>
        <img :src="image" alt="" />
        <input type="file" class="form-control" @change="onFileChange" />
      </div>
      <div class="form-group">
        <label for="name">Hiển thị ngoài trang chủ:</label>
        <select v-model="form.home_display" class="form-control">
          <option value="0">Không</option>
          <option value="1">Có</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Danh mục nổi bật:</label>
        <select v-model="form.hot_display" class="form-control">
          <option value="0">Không</option>
          <option value="1">Có</option>
        </select>
      </div>
      <button type="submit" class="btn btn-warning">Sửa</button>
    </form>
    <toast />
  </div>
</template>
<script>
import Toast from '@/components/BootstrapComponent/Toast.vue'
export default {
  components: {
    Toast,
  },
  layout: 'admin',
  data() {
    return {
      current_category: this.$store.getters.category(this.$route.params.id),
      categories: this.$store.getters.categories,
      form: {
        name: '',
        cate_desc: '',
        thumbnail: '',
        home_display: 0,
        hot_display: 0,
        parent_id: 0,
      },
      image: '',
      success: false,
    }
  },
  created() {
    this.form = { ...this.current_category }
    this.image = `http://127.0.0.1:8000${this.current_category.thumbnail}`
    delete this.form.created_at
    delete this.form.updated_at
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      const reader = new FileReader()
      const vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    editCategory() {
      this.$axios
        .$post(
          `http://127.0.0.1:8000/api/categories/${this.$route.params.id}?_method=PUT`,
          { ...this.form, ...{ image: this.image } }
        )
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.success = true
          this.$toast.success('Sửa danh mục thành công')
          this.$router.push({ name: 'dashboard-category' })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>
