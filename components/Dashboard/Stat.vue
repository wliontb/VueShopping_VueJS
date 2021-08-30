<template>
  <div class="row">
    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="
                  text-xs
                  font-weight-bold
                  text-primary text-uppercase
                  mb-1
                "
              >
                Đơn hàng
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ order_count }}
              </div>
            </div>
            <div class="col-auto">
              <file-text-icon size="4x" class="text-gray"></file-text-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-success shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="
                  text-xs
                  font-weight-bold
                  text-success text-uppercase
                  mb-1
                "
              >
                Sản phẩm
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ product_count }}
              </div>
            </div>
            <div class="col-auto">
              <shopping-cart-icon
                size="4x"
                class="text-gray"
              ></shopping-cart-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Earnings (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-info shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="text-xs font-weight-bold text-info text-uppercase mb-1"
              >
                Bài viết
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    {{ blog_count }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <book-icon size="4x" class="text-gray"></book-icon>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pending Requests Card Example -->
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-left-warning shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class="
                  text-xs
                  font-weight-bold
                  text-warning text-uppercase
                  mb-1
                "
              >
                Thành viên
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {{ user_count }}
              </div>
            </div>
            <div class="col-auto">
              <users-icon size="4x" class="text-gray"></users-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  FileTextIcon,
  ShoppingCartIcon,
  BookIcon,
  UsersIcon,
} from 'vue-feather-icons'

export default {
  components: {
    FileTextIcon,
    ShoppingCartIcon,
    BookIcon,
    UsersIcon,
  },
  data() {
    return {
      order_count: 0,
      product_count: this.$store.getters.products.length,
      blog_count: 0,
      user_count: 0,
    }
  },
  async fetch() {
    const ordercount = await this.$axios.$get(
      'http://127.0.0.1:8000/api/orders'
    )
    this.order_count = ordercount.length

    const usercount = await this.$axios.$get('http://127.0.0.1:8000/api/users')

    this.user_count = usercount.length
  },
}
</script>
<style lang="css">
.border-left-primary {
  border-left: 0.25rem solid #4e73df !important;
}
.border-left-success {
  border-left: 0.25rem solid #1cc88a !important;
}
.border-left-info {
  border-left: 0.25rem solid #36b9cc !important;
}
.border-left-warning {
  border-left: 0.25rem solid #f6c23e !important;
}
.text-gray {
  color: #dddfeb !important;
}
.text-gray-800 {
  color: #5a5c69 !important;
}
</style>
