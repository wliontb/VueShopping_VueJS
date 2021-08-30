<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="">
          <form class="row" @submit.prevent="sendOrder">
            <main class="col-md-6 card">
              <div class="card-body">
                <div class="form_checkout">
                  <div class="form-group">
                    <label>Họ và tên :</label>
                    <input
                      v-model="order.name"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Nhập họ tên người nhận"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email :</label>
                    <input
                      v-model="order.email"
                      type="email"
                      class="form-control"
                      required
                      placeholder="Nhập email người nhận"
                    />
                  </div>
                  <div class="form-group">
                    <label>Số điện thoại :</label>
                    <input
                      v-model="order.phone"
                      type="number"
                      class="form-control"
                      required
                      placeholder="Nhập số điện thoại người nhận"
                    />
                  </div>
                  <div class="form-group">
                    <label>Địa chỉ :</label>
                    <input
                      v-model="order.address"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Nhập địa chỉ người nhận"
                    />
                  </div>
                  <div class="form-group">
                    <label>Chú thích đơn hàng :</label>
                    <textarea
                      v-model="order.note"
                      class="form-control"
                      placeholder="Nhập chú thích cho đơn hàng"
                    ></textarea>
                  </div>
                </div>
              </div>
            </main>
            <!-- col.// -->
            <aside class="col-md-6">
              <table class="table table-bordered mn-3">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }} x {{ product.quantity }}</td>
                    <td>{{ (product.price * product.quantity) | vnd }}</td>
                  </tr>
                </tbody>
              </table>
              <!-- card .// -->
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Tạm tính:</dt>
                    <dd class="text-right">{{ order.total | vnd }}</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Ship:</dt>
                    <dd class="text-right">0</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Tổng:</dt>
                    <dd class="text-right h5">
                      <strong>{{ order.total | vnd }}</strong>
                    </dd>
                  </dl>
                  <hr />
                  <div class="mb-3">
                    <div
                      class="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label class="btn btn-secondary active">
                        <input
                          v-model="payment"
                          type="radio"
                          name="payment"
                          value="1"
                          autocomplete="off"
                          checked
                        />
                        Thanh toán khi nhận hàng
                      </label>
                      <label class="btn btn-secondary">
                        <input
                          v-model="payment"
                          type="radio"
                          name="payment"
                          value="2"
                          autocomplete="off"
                        />
                        Thanh toán online
                      </label>
                    </div>
                  </div>
                  <p class="mb-3">
                    Chấp nhận :<img
                      src="/images/misc/payments.png"
                      height="26"
                    />
                  </p>
                  <button class="btn btn-primary" type="submit">
                    Thanh Toán
                  </button>
                </div>
                <!-- card-body.// -->
              </div>
              <!-- card .// -->
            </aside>
          </form>
          <!-- col.// -->
        </div>
      </div>
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->

    <!-- ========================= SECTION  ========================= -->
    <section class="section-name border-top padding-y">
      <div class="container">
        <h6>Chính sách đổi trả và hoàn tiền</h6>
        <p>
          Fahasa.com hỗ trợ đổi/ trả sản phẩm cho quý khách nếu: <br />

          - Sản phẩm còn nguyên bao bì như hiện trạng ban đầu. <br />

          - Sản phầm còn đầy đủ phụ kiện, quà tặng khuyến mãi kèm theo. <br />

          - Hóa đơn GTGT ( nếu có)
        </p>
      </div>
      <!-- container // -->
    </section>
    <!-- ========================= SECTION  END// ========================= -->
  </div>
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
      carts: this.$store.getters.cart,
      products: this.$store.getters.cartProducts,
      order: {
        name: '',
        email: '',
        phone: '',
        address: '',
        note: '',
        payment: 1,
        total: this.$store.getters.cartTotal,
        quantity: this.$store.getters.cartQuantity,
        user_id: '',
      },
      result: {},
    }
  },
  created() {
    if (this.$auth.loggedIn) {
      this.name = this.$auth.user.name
    }
  },
  methods: {
    sendOrder() {
      const cart = { cart: [...this.carts] }
      this.order = { ...this.order, ...cart }
      this.$axios
        .$post('http://127.0.0.1:8000/api/orders', this.order)
        .then((result) => {
          this.result = {
            isError: false,
            message: 'Đặt đơn hàng thành công !',
          }
          this.$store.dispatch('removeCart')
          this.$toast.success('Đặt đơn thành công')
          this.$router.push({ name: 'cart' })
          // eslint-disable-next-line no-console
          console.log(result)
        })
        .catch((e) => {
          this.result = {
            isError: true,
            message: 'Đặt đơn hàng thất bại !',
          }
          this.$toast.error('Đặt đơn thất bại')
          // eslint-disable-next-line no-console
          console.log(e)
        })
    },
  },
}
</script>
