<template>
  <div>
    <section class="py-3 bg-light">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/">Trang chủ</nuxt-link>
          </li>
          <li class="breadcrumb-item"><a href="#">Truyện Tranh</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.name }}
          </li>
        </ol>
      </div>
    </section>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content bg-white padding-y">
      <div class="container">
        <!-- ============================ ITEM DETAIL ======================== -->
        <div class="row">
          <aside class="col-md-6">
            <div class="card">
              <article class="gallery-wrap">
                <div class="img-big-wrap">
                  <div>
                    <a href="#"
                      ><img :src="'http://127.0.0.1:8000' + product.thumbnail"
                    /></a>
                  </div>
                </div>
                <!-- slider-product.// -->
                <div class="thumbs-wrap">
                  <a
                    v-for="image in images"
                    :key="image.id"
                    :href="'http://127.0.0.1:8000' + image.image_path"
                    class="item-thumb"
                  >
                    <img :src="'http://127.0.0.1:8000' + image.image_path"
                  /></a>
                </div>
                <!-- slider-nav.// -->
              </article>
              <!-- gallery-wrap .end// -->
            </div>
            <!-- card.// -->
          </aside>
          <main class="col-md-6">
            <article class="product-info-aside">
              <h2 class="title mt-3">{{ product.name }}</h2>

              <div class="rating-wrap my-3">
                <ul class="rating-stars">
                  <li style="width: 80%" class="stars-active">
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </li>
                </ul>
                <small class="label-rating text-muted">132 reviews</small>
                <small class="label-rating text-success">
                  <i class="fa fa-clipboard-check"></i> {{ product.sold }} đã
                  bán
                </small>
              </div>
              <!-- rating-wrap.// -->

              <div class="mb-3">
                <var class="price h4">{{ product.current_price | vnd }}</var>
                <span class="text-muted">{{ product.old_price | vnd }}</span>
              </div>
              <!-- price-detail-wrap .// -->

              <p>
                {{ product.product_desc }}
              </p>

              <dl class="row">
                <dt class="col-sm-3">Tác giả</dt>
                <dd class="col-sm-9">{{ product.author }}</dd>

                <dt class="col-sm-3">Nhà xuất bản</dt>
                <dd class="col-sm-9">{{ product.publisher }}</dd>

                <dt class="col-sm-3">Hình thức bìa</dt>
                <dd class="col-sm-9">
                  {{ product.cover_form === 1 ? 'bìa cứng' : 'bìa mềm' }}
                </dd>

                <dt class="col-sm-3">Ngôn ngữ</dt>
                <dd class="col-sm-9">{{ product.language }}</dd>
              </dl>

              <div class="form-row mt-4">
                <div class="form-group col-md flex-grow-0">
                  <div class="input-group mb-3 input-spinner">
                    <div class="input-group-prepend">
                      <button
                        id="button-plus"
                        class="btn btn-light"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <input type="text" class="form-control" value="1" />
                    <div class="input-group-append">
                      <button
                        id="button-minus"
                        class="btn btn-light"
                        type="button"
                      >
                        &minus;
                      </button>
                    </div>
                  </div>
                </div>
                <!-- col.// -->
                <div class="form-group col-md">
                  <a class="btn btn-primary" @click="addProductToCart(product)">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="text">Thêm vào giỏ</span>
                  </a>
                  <a href="#" class="btn btn-light">
                    <i class="fas fa-heart"></i>
                    <span class="text">Yêu thích</span>
                  </a>
                </div>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- product-info-aside .// -->
          </main>
          <!-- col.// -->
        </div>
        <!-- row.// -->

        <!-- ================ ITEM DETAIL END .// ================= -->
      </div>
      <!-- container .//  -->
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->

    <!-- ========================= SECTION  ========================= -->
    <section class="section-name p-5 bg mb-5">
      <ul id="pills-tab" class="nav nav-pills mb-3" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            id="pills-home-tab"
            class="nav-link active"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >Mô Tả</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            id="pills-profile-tab"
            class="nav-link"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >Thông Số</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            id="pills-contact-tab"
            class="nav-link"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            >Nhận Xét</a
          >
        </li>
      </ul>
      <div id="pills-tabContent" class="tab-content">
        <div
          id="pills-home"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h5 class="title-description">Mô tả</h5>
          <p>{{ product.detail_desc }}</p>
        </div>
        <div
          id="pills-profile"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th colspan="2">Thông số sản phẩm</th>
              </tr>
              <tr>
                <td>Tác giả</td>
                <td>{{ product.author }}</td>
              </tr>
              <tr>
                <td>Nhà xuất bản</td>
                <td>{{ product.publisher }}</td>
              </tr>
              <tr>
                <td>Series</td>
                <td>{{ product.serires }}</td>
              </tr>
              <tr>
                <td>Tập</td>
                <td>{{ product.chap }}</td>
              </tr>
              <tr>
                <td>Số trang</td>
                <td>{{ product.page_number }}</td>
              </tr>
              <tr>
                <td>Loại bìa</td>
                <td>{{ product.cover_form === 1 ? 'bìa cứng' : 'bìa mềm' }}</td>
              </tr>
              <tr>
                <td>Ngôn ngữ</td>
                <td>{{ product.language }}</td>
              </tr>
              <tr>
                <td>Tình trạng</td>
                <td><i class="fa fa-check text-success"></i> Còn hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="pills-contact"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>
      </div>
    </section>
    <!-- ========================= SECTION CONTENT END// ========================= -->
  </div>
</template>
<script>
export default {
  layout: 'home',
  async asyncData(context) {
    const product = await context.$axios.$get(
      `http://127.0.0.1:8000/api/products/${context.params.id}`
    )

    const images = await context.$axios.$get(
      `http://127.0.0.1:8000/api/images/${context.params.id}`
    )

    return {
      product,
      images,
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    },
  },
}
</script>
<style lang="css">
.input-spinner {
  width: 120px !important;
}

.bg-white {
  border: 1px solid #ebecf0;
}
</style>
