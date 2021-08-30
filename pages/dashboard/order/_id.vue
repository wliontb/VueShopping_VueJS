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
      <h1 class="h3">Chi tiết hóa đơn</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-order' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách hóa đơn
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- detail order -->
    <div id="ui-view" data-select2-id="ui-view">
      <div>
        <div class="card">
          <div class="card-header">
            Hóa Đơn
            <strong>#{{ order.id }}</strong>
            <a
              class="btn btn-sm btn-secondary float-right mr-1 d-print-none"
              href="#"
              onclick="javascript:window.print();"
              data-abc="true"
            >
              <i class="fa fa-print"></i> In</a
            >
            <a
              class="btn btn-sm btn-danger float-right mr-1 d-print-none"
              href="#"
              data-abc="true"
            >
              <i class="fa fa-save"></i> Hủy đơn</a
            >
            <a
              v-if="order.status === 0"
              class="btn btn-sm btn-primary float-right mr-1 d-print-none"
              @click="activeorder(order.id)"
            >
              <i class="fa fa-save"></i> Duyệt đơn</a
            >
          </div>
          <div class="card-body">
            <div class="row mb-4">
              <div class="col-sm-4">
                <h6 class="mb-2"><b>Từ:</b></h6>
                <div>
                  <strong>Fahasa</strong>
                </div>
                <div>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</div>
                <div>Email: info@fahasa.com</div>
                <div>Phone: 1900636467</div>
              </div>
              <div class="col-sm-4">
                <h6 class="mb-2"><b>Tới:</b></h6>
                <div>
                  <strong>{{ order.name }}</strong>
                </div>
                <div>42, Awesome Enclave</div>
                <div>{{ order.address }}</div>
                <div>Email: {{ order.email }}</div>
                <div>Phone: {{ order.phone }}</div>
              </div>
              <div class="col-sm-4">
                <h6 class="mb-2"><b>Chi tiết:</b></h6>
                <div>
                  Hóa đơn
                  <strong>#{{ order.id }}</strong>
                </div>
                <div>{{ order.created_at }}</div>
              </div>
            </div>
            <div class="table-responsive-sm">
              <table class="table table-striped table-borded">
                <thead>
                  <tr>
                    <th class="center col-1">#</th>
                    <th class="col-2">Hình ảnh</th>
                    <th class="col-6">Tên sản phẩm</th>
                    <th class="center col-1">Số lượng</th>
                    <th class="right col-1">Giá bán</th>
                    <th class="right col-1">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td class="center">{{ product.id }}</td>
                    <td class="left">
                      <img
                        :src="product.thumbnail | img"
                        class="img-thumbnail w-50"
                      />
                    </td>
                    <td class="left">{{ product.name }}</td>
                    <td class="center">{{ product.quantity }}</td>
                    <td class="right">{{ product.current_price | vnd }}</td>
                    <td class="right">
                      {{ (product.current_price * product.quantity) | vnd }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-5">
                <b>Ghi chú:</b> {{ order.note }}
              </div>
              <div class="col-lg-4 col-sm-5 ml-auto">
                <table class="table table-clear">
                  <tbody>
                    <tr>
                      <td class="left">
                        <strong>Tiền sản phẩm</strong>
                      </td>
                      <td class="right">{{ order.total | vnd }}</td>
                    </tr>
                    <tr>
                      <td class="left">
                        <strong>Phí vận chuyển</strong>
                      </td>
                      <td class="right">0</td>
                    </tr>
                    <tr>
                      <td class="left">
                        <strong>Tổng cộng</strong>
                      </td>
                      <td class="right">
                        <strong>{{ order.total | vnd }}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  async asyncData(context) {
    const order = await context.$axios.$get(
      `http://127.0.0.1:8000/api/orders/${context.params.id}`
    )

    const products = await context.$axios.$get(
      `http://127.0.0.1:8000/api/product-order/${context.params.id}`
    )

    return {
      order,
      products,
    }
  },
  methods: {
    activeorder(id) {
      this.$axios
        .$get(`http://127.0.0.1:8000/api/activeorder/${id}`)
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.$toast.success('Duyệt đơn thành công')
          this.$router.push({ name: 'dashboard-order' })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
          this.$toast.error('Duyệt đơn thất bại')
          this.$router.push({ name: 'dashboard-order' })
        })
    },
  },
}
</script>
<style lang="css">
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #c8ced3;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #f0f3f5;
  border-bottom: 1px solid #c8ced3;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
</style>
