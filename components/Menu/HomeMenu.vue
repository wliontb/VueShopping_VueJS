<template>
  <section class="section-main pb-3">
    <main class="card">
      <div class="card-body">
        <div class="row">
          <category-menu />
          <!-- col.// -->
          <default-slider />
          <!-- col.// -->
          <popular-menu />
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- card-body.// -->
    </main>
    <!-- card.// -->
  </section>
</template>
<script>
import DefaultSlider from '@/components/Slider/DefaultSlider'
import CategoryMenu from '@/components/Menu/CategoryMenu'
import PopularMenu from '@/components/Menu/PopularMenu'

export default {
  components: {
    DefaultSlider,
    CategoryMenu,
    PopularMenu,
  },
}
</script>
