<template>
  <section class="padding-bottom">
    <header class="section-heading heading-line">
      <h4 class="title-section text-uppercase">Tin Tức</h4>
    </header>

    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-md-3 col-sm-6">
        <article class="card card-post">
          <img :src="blog.thumbnail | img" class="card-img-top" />
          <div class="card-body">
            <nuxt-link
              :to="{ name: 'blog-id', params: { id: blog.id } }"
              class="h6 title"
              >{{ blog.title }}</nuxt-link
            >

            <p class="small text-muted">{{ blog.blog_desc }}</p>
          </div>
        </article>
        <!-- card.// -->
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
      blogs: this.$store.getters.blogs,
    }
  },
}
</script>
