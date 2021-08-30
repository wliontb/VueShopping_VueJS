<template>
  <section class="padding-bottom">
    <header class="section-heading heading-line">
      <h4 class="title-section text-uppercase h5">{{ category.name }}</h4>
    </header>

    <div class="card card-home-category">
      <div class="row no-gutters">
        <div class="col-md-3 bg-light-orange">
          <div class="col-heading content-body">
            <header class="section-heading">
              <h3 class="section-title">{{ category.name }}</h3>
              <p>{{ category.cate_desc }}...</p>
              <nuxt-link
                :to="{ name: 'category-id', params: { id: category.id } }"
                class="btn btn-outline-primary rounded-pill"
                >xem thêm</nuxt-link
              >
            </header>
          </div>
        </div>

        <!-- col.// -->
        <div class="col-md-9">
          <div class="row no-gutters items-wrap">
            <div
              v-for="product in products"
              :key="product.id"
              class="col-md-3 col-6"
            >
              <figure class="card-product-grid card-sm">
                <nuxt-link
                  :to="{ name: 'product-id', params: { id: product.id } }"
                  class="img-wrap"
                >
                  <img :src="product.thumbnail | img" />
                </nuxt-link>
                <div class="text-wrap p-3">
                  <nuxt-link
                    :to="{ name: 'product-id', params: { id: product.id } }"
                    class="title"
                    >{{ product.name }}
                    <span class="badge badge-danger">
                      -{{
                        Math.round(product.current_price / product.old_price)
                      }}%
                    </span></nuxt-link
                  >
                  <ul class="rating-stars mb-1">
                    <li style="width: 80%" class="stars-active">
                      <img src="/images/icons/stars-active.svg" alt="" />
                    </li>
                    <li>
                      <img src="/images/icons/starts-disable.svg" alt="" />
                    </li>
                  </ul>
                </div>
                <div class="price-wrap p-3">
                  <span class="price">{{ product.current_price | vnd }}</span>
                  <del class="price-old">{{ product.old_price | vnd }}</del>
                </div>
                <div class="text-wrap p-3">
                  <div class="form-group">
                    <span
                      class="btn btn-primary"
                      @click="addProductToCart(product)"
                      ><i class="fas fa-shopping-cart"></i>Thêm vào giỏ</span
                    >
                    <a href="#" class="btn btn-light"
                      ><i class="fas fa-heart"></i
                    ></a>
                  </div>
                </div>
              </figure>
            </div>
            <!-- col.// -->
          </div>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
    <!-- card.// -->
  </section>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    cateid: {
      type: Number,
    },
  },
  data() {
    return {
      products: [],
      category: {},
    }
  },
  created() {
    this.products = this.$store.getters.products
      .filter((product) => {
        return product.category_id === this.cateid
      })
      .slice(0, 4)
    this.category = this.$store.getters.category(this.cateid)
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    },
  },
}
</script>
<style lang="css">
span.btn-primary {
  color: #fff;
}
</style>
