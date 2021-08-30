<template>
  <div class="card">
    <div class="card-header">Danh sách sản phẩm</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1 text-center" scope="col">#</th>
            <th class="col-2 text-center" scope="col">Ảnh đại diện</th>
            <th class="col-3 text-center" scope="col">Tên sản phẩm</th>
            <th class="col-2 text-center" scope="col">Danh mục</th>
            <th class="col-1 text-center" scope="col">Đã bán</th>
            <th class="col-1 text-center" scope="col">Trong kho</th>
            <th class="col-2 text-center" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id" class="d-flex">
            <th class="col-1" scope="row">{{ product.id }}</th>
            <td class="col-2">
              <img :src="product.thumbnail | img" class="img-thumbnail" />
            </td>
            <td class="col-3">{{ product.name }}</td>
            <td class="col-2">
              {{
                categories.find((category) => {
                  return category.id === product.category_id
                }).name
              }}
            </td>
            <td class="col-1">{{ product.sold }}</td>
            <td class="col-1">{{ product.inventory }}</td>

            <td class="col-2">
              <nuxt-link
                :to="{
                  name: 'dashboard-product-detail-id',
                  params: { id: product.id },
                }"
                class="btn btn-success"
                title="xem chi tiết"
                ><plus-square-icon size="1.5x"></plus-square-icon
              ></nuxt-link>
              <nuxt-link
                :to="{
                  name: 'dashboard-product-edit-id',
                  params: { id: product.id },
                }"
                class="btn btn-primary"
                title="sửa"
                ><edit-3-icon size="1.5x"></edit-3-icon
              ></nuxt-link>
              <a class="btn btn-danger" title="xóa" @click="remove(product.id)"
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
import { PlusSquareIcon, Edit3Icon, Trash2Icon } from 'vue-feather-icons'
export default {
  components: {
    PlusSquareIcon,
    Edit3Icon,
    Trash2Icon,
  },
  data() {
    return {
      products: '',
      categories: this.$store.getters.categories,
    }
  },
  async fetch() {
    this.products = await this.$axios.$get('http://127.0.0.1:8000/api/products')
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    remove(id) {
      this.$axios
        .$post(`http://127.0.0.1:8000/api/products/${id}?_method=DELETE`)
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.$toast.success('Xóa thành công')
          this.$router.push({ name: 'dashboard-product' })
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
          this.$toast.error('Xóa thất bại')
        })
    },
  },
}
</script>
