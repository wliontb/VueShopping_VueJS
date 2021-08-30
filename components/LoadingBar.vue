<template>
  <div v-if="loading">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loader {
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  overflow-x: hidden;
  overflow-y: hidden;
  opacity: 0.9;
}
.loader::before,
.loader::after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border-style: solid;
  border-top-color: #ecd078;
  border-right-color: #c02942;
  border-bottom-color: #542437;
  border-left-color: #53777a;
  content: '';
  transform: translate(-50%, -50%);
  animation: rotate 1.5s infinite ease-in-out;
  z-index: 999;
}
.loader::before {
  border-width: 5vh;
}
.loader::after {
  width: 20vh;
  height: 20vh;
  border-width: 2.5vh;
  animation-direction: reverse;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
