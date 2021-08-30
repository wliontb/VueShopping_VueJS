<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <user-aside />
          <!-- col.// -->
          <main class="col-md-9">
            <div class="card">
              <div class="card-body">
                <form class="row">
                  <div class="col-md-9">
                    <div class="form-row">
                      <!-- form-group end.// -->
                      <div class="form-group col-md-12">
                        <label>Tên</label>
                        <input
                          type="text"
                          class="form-control"
                          :value="user.name"
                        />
                      </div>
                      <!-- form-group end.// -->
                    </div>
                    <!-- form-row.// -->
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Số điện thoại</label>
                        <input
                          type="text"
                          class="form-control"
                          :value="user.phone"
                        />
                      </div>
                      <!-- form-group end.// -->
                      <div class="col form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          class="form-control"
                          :value="user.email"
                        />
                      </div>
                      <!-- form-group end.// -->
                    </div>
                    <!-- form-row.// -->

                    <div class="form-row">
                      <!-- form-group end.// -->
                      <div class="form-group col-md-12">
                        <label>Địa chỉ</label>
                        <input
                          type="text"
                          class="form-control"
                          :value="user.address"
                        />
                      </div>
                      <!-- form-group end.// -->
                    </div>
                    <!-- form-row.// -->

                    <button class="btn btn-primary">Lưu</button>
                    <button class="btn btn-light">Đổi mật khẩu</button>

                    <br /><br /><br /><br /><br /><br />
                  </div>
                  <!-- col.// -->
                  <div class="col-md">
                    <img
                      src="http://127.0.0.1:8000/storage/1.png"
                      class="img-md rounded-circle border"
                    />
                  </div>
                  <!-- col.// -->
                </form>
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card .// -->
          </main>
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

export default {
  components: {
    UserAside,
  },
  layout: 'home',
  data() {
    return {
      user: { ...this.$auth.user },
    }
  },
}
</script>
