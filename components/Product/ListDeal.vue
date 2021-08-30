<template>
  <!-- =============== SECTION 2 =============== -->
  <section class="padding-bottom">
    <header class="section-heading mb-4">
      <h4 class="title-section text-capitalize">Sản phẩm mới</h4>
    </header>

    <div class="row row-sm">
      <div
        v-for="product in products.slice().reverse().slice(0, 6)"
        :key="product.id"
        class="col-xl-2 col-lg-3 col-md-4 col-6"
      >
        <nuxt-link
          :to="{ name: 'product-id', params: { id: product.id } }"
          class="card card-sm card-product-grid"
        >
          <a href="#" class="img-wrap">
            <b class="badge badge-danger mr-1">NEW</b>
            <img :src="product.thumbnail | img" />
          </a>
          <figcaption class="info-wrap">
            <nuxt-link
              :to="{ name: 'product-id', params: { id: product.id } }"
              class="title"
              >{{ product.name }}</nuxt-link
            >
            <div class="price-wrap">
              <span class="price">{{ product.current_price | vnd }}</span>
              <del class="price-old">{{ product.old_price | vnd }}</del>
            </div>
            <!-- price-wrap.// -->
          </figcaption>
        </nuxt-link>
      </div>
      <!-- col.// -->
    </div>
    <!-- row.// -->
  </section>
  <!-- =============== SECTION 2 END =============== -->
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.getters.products,
    }
  },
}
</script>
<style lang="css">
.title-section {
  color: #f7941e;
  border-bottom: 1px solid #f7941e;
}
</style>
