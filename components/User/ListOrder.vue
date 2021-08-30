<template>
  <main class="col-md-9">
    <article v-for="order in orders" :key="order.id" class="card mb-4">
      <header class="card-header">
        <a href="#" class="float-right"> <i class="fa fa-print"></i> Print</a>
        <strong class="d-inline-block mr-3">Mã HĐ: {{ order.id }}</strong>
        <span>Ngày tạo: {{ order.created_at }}</span>
      </header>
      <div class="card-body">
        <div class="row">
          <div class="col-md-8">
            <h6 class="text-muted">Người nhận</h6>
            <p>
              {{ order.name }} <br />
              Phone {{ order.phone }} Email: {{ order.email }} <br />
              Địa chỉ: {{ order.address }} <br />
              Ghi chú: {{ order.note }}
            </p>
          </div>
          <div class="col-md-4">
            <h6 class="text-muted">Phương thức thanh toán</h6>
            <span class="text-success">
              <i class="fab fa-lg fa-cc-visa"></i>
              <span v-if="order.payment === 0" class="badge badge-success"
                >Ship COD</span
              >
              <span v-if="order.payment === 1" class="badge badge-success"
                >Banking</span
              >
            </span>
            <p>
              Tiền sản phẩm: {{ order.total | vnd }} <br />
              Shipping fee: 0 <br />
              <span class="b">Tổng: {{ order.total | vnd }} </span>
            </p>
          </div>
        </div>
        <!-- row.// -->
      </div>
      <!-- card-body .// -->
      <div class="table-responsive">
        <table class="table table-hover">
          <tbody>
            <detail-order :idorder="order.id" />
          </tbody>
        </table>
      </div>
      <!-- table-responsive .end// -->
    </article>
    <!-- card order-item .// -->
  </main>
</template>
<script>
import DetailOrder from '@/components/User/DetailOrder.vue'
export default {
  components: {
    DetailOrder,
  },
  data() {
    return {
      orders: [],
    }
  },
  async fetch() {
    this.orders = await this.$axios.$get(
      `http://127.0.0.1:8000/api/user-order/${this.$auth.user.id}`
    )
  },
}
</script>
