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
      <h1 class="h3">Sửa sản phẩm mới</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            to="dashboad/product"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách sản phẩm
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
    <div class="form_product">
      <div v-if="result.isError" class="alert alert-success">
        Sửa sản phẩm thành công
      </div>
      <div
        v-if="typeof result.isError !== 'undefined' && !result.isError"
        class="alert alert-danger"
      >
        Sửa sản phẩm thất bại
      </div>
      <div class="form-group">
        <label for="name">Danh mục sản phẩm:</label>
        <select v-model="form.category_id" class="form-control">
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
        <label for="name">Tên sản phẩm:</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          maxlength="191"
        />
      </div>
      <div class="form-group">
        <label for="name">Tóm tắt:</label>
        <textarea
          v-model="form.product_desc"
          class="form-control"
          rows="3"
          maxlength="191"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="name">Mô tả chi tiết:</label>
        <textarea
          v-model="form.detail_desc"
          class="form-control"
          rows="5"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="thumbnail">Ảnh đại diện:</label>
        <div class="row">
          <div v-if="form.thumbnail" class="col-2">
            <img
              :src="form.thumbnail | imagePreview"
              class="img-thumbnail"
              alt=""
            />
          </div>
          <div v-if="imagethumbnail" class="col-2">
            <img :src="imagethumbnail" class="img-thumbnail" alt="" />
          </div>
        </div>
        <input type="file" class="form-control" @change="onThumbnailChange" />
      </div>
      <div class="form-group">
        <label for="name">Ảnh sản phẩm:</label>
        <div class="row">
          <div v-for="(image, key) in images" :key="key" class="col-2">
            <img :src="image | imagePreview" class="img-thumbnail" />
          </div>
        </div>

        <input
          type="file"
          multiple
          class="form-control"
          @change="onImagesChange"
        />
      </div>
      <div class="form-group">
        <label for="name">Giá cũ:</label>
        <input v-model="form.old_price" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Giá mới:</label>
        <input
          v-model="form.current_price"
          type="number"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="name">Số lượng trong kho:</label>
        <input v-model="form.inventory" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Tác giả:</label>
        <input v-model="form.author" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Nhà xuất bản:</label>
        <input v-model="form.publisher" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Series:</label>
        <input v-model="form.series" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Tập:</label>
        <input v-model="form.chap" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Số trang:</label>
        <input v-model="form.page_number" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="name">Loại bìa:</label>
        <select v-model="form.cover_form" class="form-control">
          <option value="0">Mềm</option>
          <option value="1">Cứng</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Ngôn ngữ:</label>
        <input
          v-model="form.language"
          type="text"
          class="form-control"
          maxlength="191"
        />
      </div>
      <div class="form-group">
        <label for="name">Sản phẩm gợi ý:</label>
        <select v-model="form.recommend_display" class="form-control">
          <option value="0">Không</option>
          <option value="1">Có</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Sản phẩm giảm giá:</label>
        <select v-model="form.deal_display" class="form-control">
          <option value="0">Không</option>
          <option value="1">Có</option>
        </select>
      </div>
      <button class="btn btn-success" @click="editProduct">Sửa</button>
    </div>
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
      result: {},
      categories: this.$store.getters.categories,
      form: {
        name: '',
        thumbnail: '',
        product_desc: '',
        detail_desc: '',
        old_price: '',
        current_price: '',
        inventory: 100,
        author: '',
        publisher: '',
        series: '',
        chap: 1,
        page_number: '',
        cover_form: 0,
        language: '',
        star: '',
        recommend_display: 0,
        deal_display: 0,
        category_id: 1,
      },
      images: [],
      imagethumbnail: '',
    }
  },
  async fetch() {
    this.images = await this.$axios.$get(
      `http://127.0.0.1:8000/api/image-product/${this.$route.params.id}`
    )
  },
  created() {
    const currentproduct = this.$store.getters.products.find((product) => {
      return product.id === this.$route.params.id
    })
    this.form = { ...currentproduct }
  },
  methods: {
    onThumbnailChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImageThumbnail(files[0])
    },
    createImageThumbnail(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.imagethumbnail = e.target.result
        this.form.thumbnail = ''
      }
      reader.readAsDataURL(file)
    },
    onImagesChange(e) {
      this.images.length = 0
      const selectedFiles = e.target.files
      for (let i = 0; i < selectedFiles.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.images.push(e.target.result)
        }
        reader.readAsDataURL(selectedFiles[i])
      }
    },
    editProduct() {
      this.$axios
        .$post(
          `http://127.0.0.1:8000/api/products/${this.$route.params.id}?_method=PUT`,
          {
            ...this.form,
            ...{ imagethumbnail: this.imagethumbnail },
            ...{ images: this.images },
          }
        )
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.success = true
          this.$toast.success('Sửa sản phẩm thành công')
          this.$router.push({ name: 'dashboard-product' })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>
