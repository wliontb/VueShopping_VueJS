<template>
  <div class="col-md d-none d-lg-block flex-grow-1">
    <aside class="special-home-right">
      <h6 class="bg-blue text-center text-white mb-0 p-2">Danh mục nổi bật</h6>

      <div
        v-for="category in categories"
        :key="category.id"
        class="card-banner border-bottom"
      >
        <div class="py-3" style="width: 80%">
          <h6 class="card-title">{{ category.name }}</h6>
          <nuxt-link
            :to="{ name: 'category-id', params: { id: category.id } }"
            class="btn btn-secondary btn-sm"
          >
            Xem
          </nuxt-link>
        </div>
        <img :src="category.thumbnail" height="80" class="img-bg" />
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: this.$store.getters.categories
        .filter((cate) => {
          return cate.hot_display === 1
        })
        .slice(0, 3),
    }
  },
}
</script>
