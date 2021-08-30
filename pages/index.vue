<template>
  <div>
    <!-- Menu -->
    <home-menu />

    <!-- Deal -->
    <list-deal />

    <!-- Product On Category -->
    <list-product
      v-for="category in home_categories"
      :key="category.id"
      :cateid="category.id"
    />

    <!-- Recommend -->
    <list-recommend />

    <!-- Blog -->
    <list-blog-home />

    <!-- List Logo -->
    <list-logo />

    <!-- Banner Bottom -->
    <article class="my-4">
      <img src="images/banners/banner_bottom.png" class="w-100" />
    </article>
  </div>
</template>
<script>
import ListBlogHome from '@/components/Blog/ListBlogHome'
import ListLogo from '@/components/Logo/ListLogo'
import ListDeal from '@/components/Product/ListDeal'
import ListRecommend from '@/components/Product/ListRecommend'
import ListProduct from '@/components/Category/ListProduct'
import HomeMenu from '~/components/Menu/HomeMenu.vue'

export default {
  components: {
    ListBlogHome,
    ListRecommend,
    ListProduct,
    ListLogo,
    ListDeal,
    HomeMenu,
  },
  layout: 'home',
  data() {
    return {
      categories: this.$store.getters.categories,
      home_categories: this.$store.getters.categories.filter((category) => {
        return category.home_display === 1
      }),
    }
  },
  head() {
    return {
      title: 'Nhà sách trực tuyến Fahasa',
    }
  },
}
</script>
