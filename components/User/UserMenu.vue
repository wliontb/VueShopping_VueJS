<template>
  <div>
    <div v-if="$auth.loggedIn" class="widgets-wrap float-md-right">
      <div class="widget-header mr-3">
        <nuxt-link to="/user" class="widget-view custom-class">
          <div class="icon-area">
            <user-icon size="3x"></user-icon>
          </div>
          <span class="text"> {{ user.name }} </span>
        </nuxt-link>
      </div>
      <div class="widget-header mr-3">
        <a class="widget-view custom-class" @click="logOut">
          <div class="icon-area">
            <log-out-icon size="3x"></log-out-icon>
          </div>
          <span class="text"> Đăng xuất </span>
        </a>
      </div>
      <div class="widget-header mr-3">
        <a href="/dashboard" class="widget-view custom-class">
          <div class="icon-area">
            <settings-icon size="3x"></settings-icon>
          </div>
          <span class="text"> Quản lý </span>
        </a>
      </div>
      <mini-cart />
    </div>
    <div v-if="!$auth.loggedIn" class="widgets-wrap float-md-right">
      <div class="widget-header mr-3">
        <nuxt-link to="/login" tag="a" class="widget-view custom-class">
          <div class="icon-area">
            <user-icon size="3x"></user-icon>
          </div>
          <span class="text"> Đăng nhập </span>
        </nuxt-link>
      </div>
      <div class="widget-header mr-3">
        <nuxt-link to="/register" tag="a" class="widget-view custom-class">
          <div class="icon-area">
            <user-icon size="3x"></user-icon>
          </div>
          <span class="text"> Đăng ký </span>
        </nuxt-link>
      </div>
      <mini-cart />
    </div>
  </div>
</template>
<script>
import MiniCart from '@/components/Cart/MiniCart'
import { UserIcon, LogOutIcon, SettingsIcon } from 'vue-feather-icons'

export default {
  components: {
    MiniCart,
    UserIcon,
    LogOutIcon,
    SettingsIcon,
  },
  data() {
    return {
      user: this.$auth.user,
    }
  },
  methods: {
    logOut() {
      this.$toast.success('Đã đăng xuất')
      this.$auth.logout()
    },
  },
}
</script>
<style lang="css">
.custom-class,
.custom-class * {
  color: #f7941e;
}
</style>
