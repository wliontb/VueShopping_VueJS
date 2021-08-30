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
      <h1 class="h3">Sửa thành viên</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <nuxt-link
            :to="{ name: 'dashboard-user' }"
            tag="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Danh sách thành viên
          </nuxt-link>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            In
          </button>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
    <!-- list table -->
    <form enctype="multipart/form-data" @submit.prevent="editUser">
      <div class="form-group">
        <label for="name">Họ tên:</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="nhập tên thành viên"
          class="form-control"
          maxlength="190"
        />
      </div>
      <div class="form-group">
        <label for="name">Số điện thoại:</label>
        <input
          v-model="form.phone"
          type="text"
          placeholder="nhập số điện thoại thành viên"
          class="form-control"
          maxlength="190"
        />
      </div>
      <div class="form-group">
        <label for="name">Địa chỉ:</label>
        <input
          v-model="form.address"
          type="text"
          placeholder="nhập địa chỉ thành viên"
          class="form-control"
          maxlength="190"
        />
      </div>
      <div class="form-group">
        <label for="name">Chức vụ:</label>
        <select v-model="form.role" class="form-control">
          <option value="1">Thành viên</option>
          <option value="2">Quản trị viên</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name">Mật khẩu mới:</label>
        <input
          v-model="form.new_password"
          type="password"
          placeholder="nhập mật khẩu mới"
          class="form-control"
          maxlength="190"
        />
      </div>
      <button type="submit" class="btn btn-warning">Sửa</button>
    </form>
    <toast />
  </div>
</template>
<script>
import Toast from '@/components/BootstrapComponent/Toast.vue'
export default {
  components: {
    Toast,
  },
  layout: 'admin',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        address: '',
        new_password: '',
        role: 1,
      },
    }
  },
  async created() {
    const curuser = await this.$axios.$get(
      `http://127.0.0.1:8000/api/users/${this.$route.params.id}`
    )
    delete curuser.password
    this.form = { ...curuser }
  },
  methods: {
    editUser() {
      this.$axios
        .$post(
          `http://127.0.0.1:8000/api/users/${this.$route.params.id}?_method=PUT`,
          { ...this.form }
        )
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
          this.$toast.success('Sửa thành viên thành công')
          this.$router.push({ name: 'dashboard-user' })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
          this.$toast.error('Sửa thành viên thất bại')
          this.$router.push({ name: 'dashboard-user' })
        })
    },
  },
}
</script>
