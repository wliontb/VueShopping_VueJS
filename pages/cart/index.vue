<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <main class="col-md-9">
            <div class="card">
              <table class="table table-borderless table-shopping-cart">
                <thead class="text-muted">
                  <tr class="small text-uppercase">
                    <th scope="col">Sản phẩm</th>
                    <th scope="col" width="120">Số lượng</th>
                    <th scope="col" width="120">Đơn giá</th>
                    <th scope="col" class="text-right" width="200"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.in">
                    <td>
                      <figure class="itemside">
                        <div class="aside">
                          <img :src="product.thumbnail | img" class="img-sm" />
                        </div>
                        <figcaption class="info">
                          <nuxt-link
                            :to="{
                              name: 'product-id',
                              params: { id: product.id },
                            }"
                            class="title text-dark"
                            >{{ product.name }}</nuxt-link
                          >
                          <p class="text-muted small">
                            Danh mục: {{ product.category }}
                          </p>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="form-control"
                        :value="product.quantity"
                        @change="updateQuantity(product.id)"
                      />
                    </td>
                    <td>
                      <div class="price-wrap">
                        <var class="price">{{
                          (product.price * product.quantity) | vnd
                        }}</var>
                        <small class="text-muted">
                          {{ product.price | vnd }}
                        </small>
                      </div>
                      <!-- price-wrap .// -->
                    </td>
                    <td class="text-right">
                      <a
                        data-original-title="Save to Wishlist"
                        title=""
                        href="#"
                        class="btn btn-light"
                        data-toggle="tooltip"
                      >
                        <i class="fa fa-heart"></i
                      ></a>
                      <button
                        class="btn btn-light"
                        @click="removeProduct(product.id)"
                      >
                        xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="card-body border-top">
                <nuxt-link
                  :to="{ name: 'cart-checkout' }"
                  class="btn btn-primary float-md-right"
                >
                  Thanh toán <i class="fa fa-chevron-right"></i>
                </nuxt-link>
                <nuxt-link :to="{ name: 'index' }" class="btn btn-light">
                  <i class="fa fa-chevron-left"></i> Tiếp tục mua sắm
                </nuxt-link>
              </div>
            </div>
            <!-- card.// -->

            <div class="alert alert-success mt-3">
              <p class="icontext">
                <i class="icon text-success fa fa-truck"></i> Miễn phí vận
                chuyển cho toàn bộ đơn hàng
              </p>
            </div>
          </main>
          <!-- col.// -->
          <aside class="col-md-3">
            <div class="card mb-3">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label>Có mã giảm giá?</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        placeholder="Coupon code"
                      />
                      <span class="input-group-append">
                        <button class="btn btn-primary">Áp dụng</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card .// -->
            <div class="card">
              <div class="card-body">
                <dl class="dlist-align">
                  <dt>Tạm tính:</dt>
                  <dd class="text-right">{{ total | vnd }}</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Ship:</dt>
                  <dd class="text-right">0</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Tổng:</dt>
                  <dd class="text-right h5">
                    <strong>{{ total | vnd }}</strong>
                  </dd>
                </dl>
                <hr />
                <p class="text-center mb-3">
                  <img src="images/misc/payments.png" height="26" />
                </p>
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card .// -->
          </aside>
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
      products: { ...this.$store.getters.cartProducts },
      total: this.$store.getters.cartTotal,
    }
  },
  methods: {
    removeProduct(idProduct) {
      this.$store.commit('removeProductFromCart', idProduct)
      this.products = { ...this.$store.getters.cartProducts }
      alert('Xóa thành công !')
    },
    updateQuantity(idProduct, e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value)
      // eslint-disable-next-line no-console
      console.log(idProduct)
    },
  },
}
</script>
