<template>
  <div>
    <img src="/images/banners/banner_top.jpg" class="w-100" alt="banner top" />
    <header class="section-header">
      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-3 col-md-12">
              <nuxt-link :to="{ path: '/' }" class="brand-wrap">
                <img class="logo" src="~/assets/images/logo.png" />
              </nuxt-link>
              <!-- brand-wrap.// -->
            </div>
            <div class="col-xl-6 col-lg-5 col-md-6">
              <form class="search-header" @submit.prevent="search">
                <div class="input-group w-100">
                  <select
                    class="custom-select border-right"
                    name="category_name"
                  >
                    <option value="">Tất cả</option>
                    <option value="codex">Tên sản phẩm</option>
                    <option value="comments">Giá sản phẩm</option>
                    <option value="content">Loại sản phẩm</option>
                  </select>
                  <input
                    v-model="key"
                    type="text"
                    name="key"
                    class="form-control"
                    placeholder="Tìm kiếm sản phẩm mong muốn"
                  />

                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <search-icon size="3x"></search-icon>
                    </button>
                  </div>
                </div>
              </form>
              <!-- search-wrap .end// -->
            </div>
            <!-- col.// -->
            <div class="col-xl-4 col-lg-4 col-md-6">
              <user-menu />
              <!-- widgets-wrap.// -->
            </div>
            <!-- col.// -->
          </div>
          <!-- row.// -->
        </div>
        <!-- container.// -->
      </section>
      <!-- header-main .// -->

      <nav class="navbar navbar-main navbar-expand-lg border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="main_nav" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Danh mục</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Tải ứng dụng</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="http://example.com/"
                  data-toggle="dropdown"
                  >Tiếng Việt</a
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">English</a>
                  <a class="dropdown-item" href="#">Chinese</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- collapse .// -->
        </div>
        <!-- container .// -->
      </nav>
    </header>
    <!-- section-header.// -->
  </div>
</template>
<script>
import UserMenu from '@/components/User/UserMenu'
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    UserMenu,
    SearchIcon,
  },
  data() {
    return {
      key: '',
    }
  },
  methods: {
    search() {
      this.$router.push({ name: 'search', query: { key: this.key } })
    },
  },
}
</script>
