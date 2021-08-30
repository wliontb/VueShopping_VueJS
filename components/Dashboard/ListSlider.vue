<template>
  <div class="card">
    <div class="card-header">Danh sách hóa đơn</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1 text-center" scope="col">#</th>
            <th class="col-2 text-center" scope="col">Tên slider</th>
            <th class="col-3 text-center" scope="col">Mô tả</th>
            <th class="col-4 text-center" scope="col">Ảnh slide</th>
            <th class="col-2 text-center" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slider in sliders" :key="slider.id" class="d-flex">
            <th class="col-1" scope="row">{{ slider.id }}</th>
            <td class="col-2">{{ slider.name }}</td>
            <td class="col-3">{{ slider.description }}</td>
            <td class="col-4">
              <img :src="slider.image_path | img" class="img-thumbnail" />
            </td>
            <td class="col-2">
              <nuxt-link
                :to="{
                  name: 'dashboard-slider-edit-id',
                  params: { id: slider.id },
                }"
                class="btn btn-warning"
                title="xem chi tiết"
                >Sửa slider</nuxt-link
              >
              <a href="#" class="btn btn-danger" title="xóa slider"
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
import { Trash2Icon } from 'vue-feather-icons'
export default {
  components: {
    Trash2Icon,
  },
  data() {
    return {
      sliders: [],
    }
  },
  async fetch() {
    this.sliders = await this.$axios.$get('http://127.0.0.1:8000/api/sliders')
  },
}
</script>
