<template>
  <aside class="col-md-3">
    <nav class="list-group">
      <nuxt-link :to="{ name: 'user' }" class="list-group-item">
        Tổng quan
      </nuxt-link>
      <nuxt-link :to="{ name: 'user-order' }" class="list-group-item">
        Đơn hàng của tôi
      </nuxt-link>
      <nuxt-link :to="{ name: 'user-whishlist' }" class="list-group-item">
        Danh sách ưa thích
      </nuxt-link>
      <nuxt-link :to="{ name: 'user-setting' }" class="list-group-item">
        Thiết lập tài khoản
      </nuxt-link>
      <a class="list-group-item" @click="logOut"> Đăng xuất </a>
    </nav>
  </aside>
</template>
<script>
export default {
  methods: {
    logOut() {
      this.$toast.success('Đã đăng xuất')
      this.$auth.logout()
    },
  },
}
</script>
