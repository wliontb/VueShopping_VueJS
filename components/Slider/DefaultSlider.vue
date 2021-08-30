<template>
  <div class="col-md-9 col-xl-7 col-lg-7">
    <!-- ================== COMPONENT SLIDER  BOOTSTRAP  ==================  -->
    <div
      id="carousel1_indicator"
      class="slider-home-banner carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          v-for="(slider, key) in sliders"
          :key="key"
          data-target="#carousel1_indicator"
          :data-slide-to="key"
          :class="{ active: key === 0 }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(slider, key) in sliders"
          :key="key"
          class="carousel-item"
          :class="{ active: key === 0 }"
        >
          <img :src="slider.image_path | img" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel1_indicator"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel1_indicator"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliders: this.$store.getters.sliders,
    }
  },
}
</script>
