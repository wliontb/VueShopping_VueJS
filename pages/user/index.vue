<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <user-aside />
          <!-- col.// -->
          <main class="col-md-9">
            <article class="card mb-3">
              <div class="card-body">
                <figure class="icontext">
                  <div class="icon">
                    <img
                      class="rounded-circle img-sm border"
                      src="http://127.0.0.1:8000/storage/1.png"
                    />
                  </div>
                  <div class="text">
                    <strong> {{ user.name }} </strong> <br />
                    <p class="mb-2">{{ user.email }}</p>
                    <nuxt-link
                      :to="{ name: 'user-setting' }"
                      class="btn btn-light btn-sm"
                      >Sửa</nuxt-link
                    >
                  </div>
                </figure>
                <hr />
                <p>
                  <i class="fa fa-map-marker text-muted"></i> &nbsp; Địa chỉ:
                  <br />
                  {{ user.address }}
                </p>

                <article class="card-group card-stat">
                  <figure class="card bg">
                    <div class="p-3">
                      <h4 class="title">{{ user.orders }}</h4>
                      <span>Đơn hàng</span>
                    </div>
                  </figure>
                  <figure class="card bg">
                    <div class="p-3">
                      <h4 class="title">{{ user.whishlists }}</h4>
                      <span>Sản phẩm yêu thích</span>
                    </div>
                  </figure>
                  <figure class="card bg">
                    <div class="p-3">
                      <h4 class="title">{{ user.awaitdelivery }}</h4>
                      <span>Chờ duyệt</span>
                    </div>
                  </figure>
                  <figure class="card bg">
                    <div class="p-3">
                      <h4 class="title">{{ user.delivered }}</h4>
                      <span>Đã duyệt</span>
                    </div>
                  </figure>
                </article>
              </div>
              <!-- card-body .// -->
            </article>
            <!-- card.// -->

            <article class="card mb-3">
              <div class="card-body">
                <h5 class="card-title mb-4">Đơn hàng gần đây</h5>

                <div class="row">
                  <div class="col-md-6">
                    <figure class="itemside mb-3">
                      <div class="aside">
                        <img
                          src="http://127.0.0.1:8000/storage/products/opm1.jpg"
                          class="border img-sm"
                        />
                      </div>
                      <figcaption class="info">
                        <time class="text-muted"
                          ><i class="fa fa-calendar-alt"></i> 15.06.2021</time
                        >
                        <p>One-Punch Man Tập 7: Quyết Đấu</p>
                        <span class="text-success">Ship COD </span>
                      </figcaption>
                    </figure>
                  </div>
                  <!-- col.// -->
                  <div class="col-md-6">
                    <figure class="itemside mb-3">
                      <div class="aside">
                        <img
                          src="http://127.0.0.1:8000/storage/products/opm1.jpg"
                          class="border img-sm"
                        />
                      </div>
                      <figcaption class="info">
                        <time class="text-muted"
                          ><i class="fa fa-calendar-alt"></i> 15.06.2021</time
                        >
                        <p>
                          Doraemon Tranh Truyện Màu - Tập 8 - Nobita Và Binh
                          Đoàn Người Sắt
                        </p>
                        <span class="text-success">Ship COD</span>
                      </figcaption>
                    </figure>
                  </div>
                  <!-- col.// -->
                </div>
                <!-- row.// -->

                <a href="#" class="btn btn-outline-primary btn-block">
                  See all orders <i class="fa fa-chevron-down"></i>
                </a>
              </div>
              <!-- card-body .// -->
            </article>
            <!-- card.// -->
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
  asyncData(context) {
    return {
      user: context.$auth.user,
    }
  },
}
</script>
