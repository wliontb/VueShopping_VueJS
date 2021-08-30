<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <user-aside />
          <!-- col.// -->
          <list-order />
          <!-- col.// -->
        </div>
      </div>
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
  </div>
</template>
<script>
import UserAside from '@/components/User/UserAside'
import ListOrder from '@/components/User/ListOrder.vue'

export default {
  components: {
    UserAside,
    ListOrder,
  },
  layout: 'home',
  data() {
    return {
      user: this.$auth.user,
    }
  },
}
</script>
