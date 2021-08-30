<template>
  <main role="main" class="container padding-y">
    <div class="row card mb-3">
      <div class="card-body">
        <ol class="breadcrumb float-left">
          <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
          <li class="breadcrumb-item"><a href="#">Tin tức</a></li>
          <li class="breadcrumb-item active">Tiêu đề tin tức</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 blog-main bg-white">
        <h3 class="py-4 mb-4 font-italic border-bottom">
          {{ cur_blog.title }}
        </h3>

        <div class="blog-post">
          <p class="blog-post-meta">
            {{ cur_blog.blog_desc }} <br />
            <img :src="cur_blog.thumbnail | img" alt="" /> <br />
            {{ cur_blog.created_at }} by <a href="#">{{ cur_blog.user_id }}</a>
          </p>
          <hr />
          <p>{{ cur_blog.content }}</p>
        </div>
        <!-- /.blog-post -->

        <nav class="blog-pagination">
          <a class="btn btn-outline-primary" href="#">Cũ hơn</a>
          <a
            class="btn btn-outline-secondary disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Mới hơn</a
          >
        </nav>
      </div>
      <!-- /.blog-main -->

      <aside class="col-md-4 blog-sidebar">
        <div class="p-4">
          <h4>Tin tức mới</h4>
          <ol class="list-unstyled mb-0">
            <li v-for="blog in blogs" :key="blog.id">
              <a href="#">{{ blog.title }}</a>
            </li>
          </ol>
        </div>

        <div class="p-4">
          <h4>Chia sẻ</h4>
          <ol class="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
      </aside>
      <!-- /.blog-sidebar -->
    </div>
    <!-- /.row -->
  </main>
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
      cur_blog: this.$store.getters.blogs.find((blog) => {
        return blog.id === this.$route.params.id
      }),
      blogs: this.$store.getters.blogs,
    }
  },
}
</script>
