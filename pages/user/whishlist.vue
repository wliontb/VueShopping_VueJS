<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <div class="row">
          <user-aside />
          <!-- col.// -->
          <main class="col-md-9">
            <article class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <figure class="itemside mb-4">
                      <div class="aside">
                        <img
                          src="http://127.0.0.1:8000/storage/products/opm1.jpg"
                          class="border img-md"
                        />
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title">Onepunch Man tập 7</a>
                        <p class="price mb-2">18000</p>
                        <a href="#" class="btn btn-secondary btn-sm">
                          Thêm vào giỏ
                        </a>
                        <a
                          href="#"
                          class="btn btn-danger btn-sm"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Remove from wishlist"
                        >
                          <i class="fa fa-times"></i>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <!-- col.// -->

                  <div class="col-md-6">
                    <figure class="itemside mb-4">
                      <div class="aside">
                        <img
                          src="http://127.0.0.1:8000/storage/products/overlord4.jpg"
                          class="border img-md"
                        />
                      </div>
                      <figcaption class="info">
                        <a href="#" class="title">Overlord Man tập 7</a>
                        <p class="price mb-2">18000</p>
                        <a href="#" class="btn btn-secondary btn-sm">
                          Thêm vào giỏ
                        </a>
                        <a
                          href="#"
                          class="btn btn-danger btn-sm"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Remove from wishlist"
                        >
                          <i class="fa fa-times"></i>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <!-- col.// -->
                </div>
                <!-- row .//  -->
              </div>
              <!-- card-body.// -->
            </article>
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
      user: this.$auth.user,
    }
  },
}
</script>
