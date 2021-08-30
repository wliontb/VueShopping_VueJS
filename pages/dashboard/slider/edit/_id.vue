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
      <h1 class="h3">Sửa slide</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-slider' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách slide
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
    <form @submit.prevent="addSlider">
      <div class="form-group">
        <label for="name">Tên slide:</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="nhập tên slider"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Ảnh hiển thị:</label>
        <div v-if="form.image_path" class="row">
          <div class="col-6">
            <img :src="form.image_path | imagePreview" class="img-thumbnail" />
          </div>
        </div>
        <input type="file" class="form-control" @change="onFileChange" />
      </div>
      <div class="form-group">
        <label for="name">Mô tả:</label>
        <textarea
          v-model="form.description"
          class="form-control"
          rows="3"
          placeholder="nhập mô tả cho tin tức"
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
        name: '',
        description: '',
        image_path: '',
      },
    }
  },
  created() {
    const curslide = this.$store.getters.sliders.find((slide) => {
      return slide.id === this.$route.params.id
    })
    this.form = { ...curslide }
  },
  methods: {
    addSlider() {
      this.$axios
        .$post(
          `http://127.0.0.1:8000/api/sliders/${this.$route.params.id}?_method=PUT`,
          {
            name: this.form.name,
            description: this.form.description,
            image_path: this.form.image_path,
          }
        )
        .then((result) => {
          this.$store.dispatch('fetchSliders')
          this.$toast.success('Sửa slide thành công!')
          this.$router.push({ name: 'dashboard-slider' })
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
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
        vm.form.image_path = e.target.result
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>
