<template>
  <div class="card">
    <div class="card-header">Danh mục sản phẩm</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1" scope="col">#</th>
            <th class="col-2" scope="col">Ảnh đại diện</th>
            <th class="col-3" scope="col">Tên danh mục</th>
            <th class="col-4" scope="col">Mô tả</th>
            <th class="col-2" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id" class="d-flex">
            <th scope="row" class="col-1">{{ category.id }}</th>
            <td class="col-2">
              <img :src="category.thumbnail | img" class="mw-100" />
            </td>
            <td class="col-3">{{ category.name }}</td>
            <td class="col-4">{{ category.cate_desc }}...</td>
            <td class="col-2">
              <nuxt-link
                :to="{
                  name: 'dashboard-category-edit-id',
                  params: { id: category.id },
                }"
                class="btn btn-primary"
                ><edit-3-icon size="1.5x"></edit-3-icon
              ></nuxt-link>
              <a class="btn btn-danger" @click="remove(category.id)"
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
      categories: [],
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get(
      'http://127.0.0.1:8000/api/categories'
    )
    this.$store.dispatch('fetchCategories')
  },
  methods: {
    remove(id) {
      this.$axios
        .$post(`http://127.0.0.1:8000/api/categories/${id}?_method=DELETE`)
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.$toast.success('Xóa thành công')
          this.$router.push({ name: 'dashboard-category' })
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
