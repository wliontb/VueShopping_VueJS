<template>
  <form class="my-5" @submit.prevent="onSubmit">
    <h3>Đăng nhập</h3>
    <div v-if="valid.isError" class="alert alert-danger">
      {{ valid.message }}
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="email" type="email" class="form-control" />
    </div>
    <div class="form-group">
      <label for="password">Mật khẩu:</label>
      <input v-model="password" type="password" class="form-control" />
    </div>
    <button type="submit" class="btn btn-success">Đăng nhập</button>
  </form>
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
      email: '',
      password: '',
      valid: {},
    }
  },
  methods: {
    onSubmit() {
      this.$auth
        .loginWith('laravel', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((result) => {
          this.valid = { isError: false, message: 'Đăng nhập thành công' }
          this.$toast.success('Đăng nhập thành công')
        })
        .catch((e) => {
          this.valid = {
            isError: true,
            message: 'Tài khoản hoặc mật khẩu không chính xác',
          }
          this.$toast.danger('Đăng nhập thất bại')
        })
    },
  },
}
</script>
