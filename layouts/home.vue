<template>
  <div>
    <default-header />
    <div class="container">
      <nuxt />
    </div>
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'

export default {
  name: 'Home',
  components: {
    DefaultHeader,
    DefaultFooter,
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/ui3661.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/responsive3661.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/fonts/fontawesome/css/all.min3661.css',
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '/css/bootstrap3661.css',
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: '/js/jquery-2.0.0.min.js',
        },
        {
          type: 'text/javascript',
          src: '/js/bootstrap.bundle.min.js',
        },
        {
          type: 'text/javascript',
          src: '/js/script3661.js',
        },
      ],
    }
  },
}
</script>
<style lang="css">
body {
  background: #f0f0f0;
}
</style>
