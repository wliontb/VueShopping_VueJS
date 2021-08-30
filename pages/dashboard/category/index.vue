<template>
  <div>
    <div
      class="
        d-flex
        justify-content-between
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      "
    >
      <h1 class="h3">Danh mục sản phẩm</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-category-add' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Thêm <plus-icon size="1.5x" class="custom-class"></plus-icon>
          </nuxt-link>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            <printer-icon size="1.5x" class="custom-class"></printer-icon>
          </button>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <calendar-icon size="1.5x" class="custom-class"></calendar-icon>
          This week
        </button>
      </div>
    </div>
    <!-- list table -->
    <list-category />
  </div>
</template>
<script>
import ListCategory from '@/components/Dashboard/ListCategory.vue'
import { PlusIcon, PrinterIcon, CalendarIcon } from 'vue-feather-icons'

export default {
  components: {
    ListCategory,
    PlusIcon,
    PrinterIcon,
    CalendarIcon,
  },
  layout: 'admin',
}
</script>
