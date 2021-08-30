<template>
  <div class="sidebar-sticky pt-3">
    <ul class="nav flex-column">
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard' }" class="nav-link">
          <home-icon size="1.5x"></home-icon>
          Tổng quan <span class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link
          :to="{ name: 'dashboard-category' }"
          class="nav-link"
          tag="a"
        >
          <list-icon size="1.5x"></list-icon>
          Danh mục
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-product' }" class="nav-link" tag="a">
          <shopping-cart-icon size="1.5x"></shopping-cart-icon>
          Sản phẩm
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-order' }" class="nav-link" tag="a">
          <file-icon size="1.5x"></file-icon>
          Hóa đơn
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-user' }" class="nav-link">
          <users-icon size="1.5x"></users-icon>
          Thành viên
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-blog' }" class="nav-link">
          <book-icon size="1.5x"></book-icon>
          Tin tức
        </nuxt-link>
      </li>
    </ul>
    <h6
      class="
        sidebar-heading
        d-flex
        justify-content-between
        align-items-center
        px-3
        mt-4
        mb-1
        text-muted
      "
    >
      <span>Cài đặt khác</span>
      <a
        class="d-flex align-items-center text-muted"
        href="#"
        aria-label="Add a new report"
      >
        <plus-circle-icon size="1.5x"></plus-circle-icon>
      </a>
    </h6>
    <ul class="nav flex-column mb-2">
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-slider' }" class="nav-link">
          <file-text-icon size="1.5x"></file-text-icon>
          Slider
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="{ name: 'dashboard-config' }" class="nav-link">
          <file-text-icon size="1.5x"></file-text-icon>
          Config
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  FileIcon,
  ShoppingCartIcon,
  UsersIcon,
  HomeIcon,
  PlusCircleIcon,
  BookIcon,
  FileTextIcon,
  ListIcon,
} from 'vue-feather-icons'
export default {
  components: {
    FileIcon,
    ShoppingCartIcon,
    UsersIcon,
    HomeIcon,
    PlusCircleIcon,
    BookIcon,
    FileTextIcon,
    ListIcon,
  },
}
</script>
