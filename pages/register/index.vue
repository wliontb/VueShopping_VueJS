<template>
  <form class="my-5" @submit.prevent="onSubmit">
    <h3>Đăng ký thành viên</h3>
    <div class="form-group">
      <label for="email">Tên:</label>
      <input v-model="name" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="email" type="email" class="form-control" />
    </div>
    <div class="form-group">
      <label for="password">Mật khẩu:</label>
      <input v-model="password" type="password" class="form-control" />
    </div>
    <div class="form-group">
      <label for="re_password">Nhập lại mật khẩu:</label>
      <input v-model="repassword" type="password" class="form-control" />
    </div>
    <button type="submit" class="btn btn-success">Đăng ký</button>
  </form>
</template>
<script>
export default {
  layout: 'home',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    checkPassword() {
      return this.password === this.repassword
    },
    onSubmit() {
      const validPassword = this.checkPassword()
      if (validPassword) {
        // call api
        this.$axios
          .post('http://127.0.0.1:8000/api/auth/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.repassword,
          })
          .then((result) => {
            // eslint-disable-next-line no-console
            console.log(result)
            this.$toast.success('Đăng ký thành công !')
            this.$router.push({ name: 'index' })
          })
          // eslint-disable-next-line no-console
          .catch((e) => console.log(e))
      } else {
        // eslint-disable-next-line no-console
        console.log('Mật khẩu không trùng khớp')
      }
    },
  },
}
</script>
