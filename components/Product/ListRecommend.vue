<template>
  <section class="padding-bottom">
    <header class="section-heading mb-4">
      <h4 class="title-section text-capitalize">Sản phẩm gợi ý</h4>
    </header>

    <div class="row row-sm">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-xl-2 col-lg-3 col-md-4 col-6"
      >
        <nuxt-link
          :to="{ name: 'product-id', params: { id: product.id } }"
          class="card card-sm card-product-grid"
        >
          <a href="#" class="img-wrap">
            <b class="badge badge-danger mr-1"
              >{{ Math.round(product.current_price / product.old_price) }}%
              OFF</b
            >
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
          <!-- <div class="text-wrap p-3">
            <div class="form-group">
              <span class="btn btn-primary" @click="addProductToCart(product)"
                ><i class="fas fa-shopping-cart"></i
              ></span>
              <a href="#" class="btn btn-light"><i class="fas fa-heart"></i></a>
            </div>
          </div> -->
        </nuxt-link>
      </div>
      <!-- col.// -->
    </div>
    <!-- row.// -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.products = this.$store.getters.products.filter((product) => {
      return product.recommend_display === 1
    })
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    },
  },
}
</script>
<style lang="css">
.title-section {
  color: #f7941e;
  border-bottom: 1px solid #f7941e;
}
</style>
