<template>
  <div class="widget-header dropdown">
    <a href="#" class="widget-view" data-toggle="dropdown">
      <div class="icon-area">
        <shopping-cart-icon size="3x" class="custom-class"></shopping-cart-icon>
        <span class="notify">{{ products.length }}</span>
      </div>
      <span class="custom-class text"> Giỏ hàng </span>
    </a>
    <div class="dropdown-menu dropdown-menu-right">
      <li v-for="product in products" :key="product.id" class="dropdown-item">
        <nuxt-link
          :to="{ name: 'product-id', params: { id: product.id } }"
          tag="a"
          :title="product.name"
        >
          {{ product.name.substr(0, 20) }}...
        </nuxt-link>
        <b>x {{ product.quantity }}</b>
      </li>
      <div class="dropdown-divider"></div>
      <li class="dropdown-item">Tổng : {{ total }}</li>
      <div class="dropdown-divider"></div>
      <li class="dropdown-item">
        <nuxt-link :to="{ name: 'cart' }">Xem giỏ hàng</nuxt-link>
      </li>
    </div>
  </div>
</template>
<script>
import { ShoppingCartIcon } from 'vue-feather-icons'
export default {
  components: {
    ShoppingCartIcon,
  },
  computed: {
    products() {
      return this.$store.getters.cartProducts
    },
    total() {
      return this.$store.getters.cartTotal
    },
  },
}
</script>
<style lang="css">
.notify {
  color: #fff !important;
}
</style>
