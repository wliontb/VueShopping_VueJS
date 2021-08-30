<template>
  <div class="card">
    <div class="card-header">Danh sách hóa đơn</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1 text-center" scope="col">#</th>
            <th class="col-2 text-center" scope="col">Tên khách hàng</th>
            <th class="col-2 text-center" scope="col">Số điện thoại</th>
            <th class="col-2 text-center" scope="col">Địa chỉ</th>
            <th class="col-1 text-center" scope="col">Tổng sản phẩm</th>
            <th class="col-1 text-center" scope="col">Tổng tiền</th>
            <th class="col-1 text-center" scope="col">Trạng thái</th>
            <th class="col-2 text-center" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="d-flex">
            <th class="col-1" scope="row">{{ order.id }}</th>
            <td class="col-2">{{ order.name }}</td>
            <td class="col-2">{{ order.phone }}</td>
            <td class="col-2">{{ order.address }}</td>
            <td class="col-1">{{ order.quantity }}</td>
            <td class="col-1">{{ order.total | vnd }}</td>
            <td v-if="order.status === 1" class="col-1">
              <span class="badge badge-success">Đã duyệt</span>
            </td>
            <td v-else class="col-1">
              <span class="badge badge-danger">Chờ duyệt</span>
            </td>
            <td class="col-2">
              <nuxt-link
                :to="{ name: 'dashboard-order-id', params: { id: order.id } }"
                class="btn btn-success"
                title="xem chi tiết"
                >Chi tiết</nuxt-link
              >
              <a href="#" class="btn btn-danger" title="xóa hóa đơn"
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
      orders: [],
    }
  },
  async fetch() {
    this.orders = await this.$axios.$get('http://127.0.0.1:8000/api/orders')
  },
}
</script>
