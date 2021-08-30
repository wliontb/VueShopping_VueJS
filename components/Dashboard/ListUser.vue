<template>
  <div class="card">
    <div class="card-header">Danh sách thành viên</div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead>
          <tr class="d-flex">
            <th class="col-1" scope="col">#</th>
            <th class="col-2" scope="col">Tên</th>
            <th class="col-2" scope="col">Email</th>
            <th class="col-2" scope="col">Số điện thoại</th>
            <th class="col-2" scope="col">Địa chỉ</th>
            <th class="col-1" scope="col">Chức vụ</th>
            <th class="col-2" scope="col">Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="d-flex">
            <th scope="row" class="col-1">{{ user.id }}</th>
            <td class="col-2">{{ user.name }}</td>
            <td class="col-2">{{ user.email }}</td>
            <td class="col-2">{{ user.phone }}</td>
            <td class="col-2">{{ user.address }}</td>
            <td class="col-1">
              {{ user.role === 1 ? 'Thành viên' : 'Quản trị viên' }}
            </td>
            <td class="col-2">
              <nuxt-link
                :to="{
                  name: 'dashboard-user-edit-id',
                  params: { id: user.id },
                }"
                class="btn btn-primary"
                ><edit-3-icon size="1.5x"></edit-3-icon
              ></nuxt-link>
              <a href="#" class="btn btn-danger"
                ><trash-2-icon size="1.5x"></trash-2-icon
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'
export default {
  components: {
    Edit3Icon,
    Trash2Icon,
  },
  data() {
    return {
      users: [],
    }
  },
  async fetch() {
    this.users = await this.$axios.$get('http://127.0.0.1:8000/api/users')
    this.$store.dispatch('fetchUsers')
  },
}
</script>
