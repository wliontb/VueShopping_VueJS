<template>
  <div>
    <tr v-for="product in products" :key="product.id">
      <td width="65">
        <img :src="product.thumbnail | img" class="img-xs border" />
      </td>
      <td>
        <p class="title mb-0">{{ product.name }}</p>
        <var class="price text-muted">{{ product.current_order }}</var>
      </td>
      <td>
        <b>x {{ product.quantity }}</b>
      </td>
      <td width="250">
        <a href="#" class="btn btn-outline-primary">Xem chi tiết</a>
        <div class="dropdown d-inline-block">
          <a
            href="#"
            data-toggle="dropdown"
            class="dropdown-toggle btn btn-outline-secondary"
            >Tác vụ</a
          >
          <div class="dropdown-menu dropdown-menu-right">
            <a href="#" class="dropdown-item">Xóa</a>
          </div>
        </div>
        <!-- dropdown.// -->
      </td>
    </tr>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['idorder'],
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    this.products = await this.$axios.$get(
      `http://127.0.0.1:8000/api/detail-order/${this.idorder}`
    )
  },
}
</script>
