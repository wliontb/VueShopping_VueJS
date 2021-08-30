<template>
  <div>
    <!-- ========================= SECTION CONTENT ========================= -->
    <section class="section-content padding-y">
      <div class="container">
        <!-- ============================  FILTER TOP  ================================= -->
        <div class="card mb-3">
          <div class="card-body">
            <ol class="breadcrumb float-left">
              <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
              <li class="breadcrumb-item">Danh mục</li>
              <li class="breadcrumb-item active">{{ category.name }}</li>
            </ol>
          </div>
          <!-- card-body .// -->
        </div>
        <!-- card.// -->
        <!-- ============================ FILTER TOP END.// ================================= -->

        <div class="row">
          <aside class="col-md-2">
            <article class="filter-group">
              <h6 class="title">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_1"
                >
                  Loại sản phẩm
                </a>
              </h6>
              <div id="collapse_1" class="filter-content collapse show">
                <div class="inner">
                  <ul class="list-menu">
                    <li><a href="#">Bìa cứng </a></li>
                    <li><a href="#">Bìa mềm </a></li>
                  </ul>
                </div>
                <!-- inner.// -->
              </div>
            </article>
            <!-- filter-group  .// -->
            <article class="filter-group">
              <h6 class="title">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_2"
                >
                  Nhà xuất bản
                </a>
              </h6>
              <div id="collapse_2" class="filter-content collapse show">
                <div class="inner">
                  <label class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      checked=""
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">
                      Kim Đồng
                      <b class="badge badge-pill badge-light float-right">1</b>
                    </div>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      checked=""
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">
                      NXB Trẻ
                      <b class="badge badge-pill badge-light float-right">1</b>
                    </div>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      checked=""
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">
                      NXB Hội Nhà Văn
                      <b class="badge badge-pill badge-light float-right">0</b>
                    </div>
                  </label>
                  <label class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      checked=""
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">
                      NXB Đại học Quốc Gia
                      <b class="badge badge-pill badge-light float-right">0</b>
                    </div>
                  </label>
                </div>
                <!-- inner.// -->
              </div>
            </article>
            <!-- filter-group .// -->
            <article class="filter-group">
              <h6 class="title">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_3"
                >
                  Khoảng giá
                </a>
              </h6>
              <div id="collapse_3" class="filter-content collapse show">
                <div class="inner">
                  <input
                    type="range"
                    class="custom-range"
                    min="0"
                    max="100"
                    name=""
                  />
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Tối thiểu</label>
                      <input
                        class="form-control"
                        placeholder="$0"
                        type="number"
                      />
                    </div>
                    <div class="form-group text-right col-md-6">
                      <label>Tối đa</label>
                      <input
                        class="form-control"
                        placeholder="$1,0000"
                        type="number"
                      />
                    </div>
                  </div>
                  <!-- form-row.// -->
                  <button class="btn btn-block btn-primary">Áp dụng</button>
                </div>
                <!-- inner.// -->
              </div>
            </article>
            <!-- filter-group .// -->
            <article class="filter-group">
              <h6 class="title">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_5"
                >
                  Điều kiện
                </a>
              </h6>
              <div id="collapse_5" class="filter-content collapse show">
                <div class="inner">
                  <label class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      checked=""
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">Tất cả</div>
                  </label>

                  <label class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">Giảm giá</div>
                  </label>
                  <label class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="myfilter_radio"
                      class="custom-control-input"
                    />
                    <div class="custom-control-label">Mua nhiều</div>
                  </label>
                </div>
                <!-- inner.// -->
              </div>
            </article>
            <!-- filter-group .// -->
          </aside>
          <!-- col.// -->
          <main class="col-md-10">
            <header class="mb-3">
              <div class="form-inline">
                <strong class="mr-md-auto"
                  >Tìm thấy {{ products.length }} sản phẩm
                </strong>
                <select
                  v-model="filter_by"
                  class="mr-2 form-control"
                  @change="changeFilter"
                >
                  <option value="1">Mới nhất</option>
                  <option value="2">Cũ nhất</option>
                  <option value="3">Rẻ nhất</option>
                  <option value="4">Đắt nhất</option>
                </select>
                <div class="btn-group">
                  <a
                    href="page-listing-grid.html"
                    class="btn btn-light"
                    data-toggle="tooltip"
                    title="List view"
                  >
                    <i class="fa fa-bars"></i
                  ></a>
                  <a
                    href="page-listing-large.html"
                    class="btn btn-light active"
                    data-toggle="tooltip"
                    title="Grid view"
                  >
                    <i class="fa fa-th"></i
                  ></a>
                </div>
              </div>
            </header>
            <!-- sect-heading -->

            <article
              v-for="product in products.slice().reverse()"
              :key="product.id"
              class="card card-product-list"
            >
              <div class="row no-gutters">
                <aside class="col-md-3">
                  <a href="#" class="img-wrap">
                    <span class="badge badge-danger"> Hot </span>
                    <img :src="`http://127.0.0.1:8000${product.thumbnail}`" />
                  </a>
                </aside>
                <!-- col.// -->
                <div class="col-md-6">
                  <div class="info-main">
                    <nuxt-link
                      :to="{ name: 'product-id', params: { id: product.id } }"
                      class="h5 title"
                    >
                      {{ product.name }}</nuxt-link
                    >
                    <div class="rating-wrap mb-2">
                      <ul class="rating-stars">
                        <li style="width: 100%" class="stars-active">
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
                    </div>
                    <!-- rating-wrap.// -->

                    <p class="mb-3">
                      <span class="tag">
                        <i class="fa fa-check"></i> Còn hàng</span
                      >
                      <span class="tag">
                        {{ product.cover_form === 1 ? 'bìa cứng' : 'bìa mềm' }}
                      </span>
                      <span v-if="product.recommend_display == 1" class="tag">
                        Nổi bật
                      </span>
                      <span v-if="product.deal_display == 1" class="tag">
                        Giảm giá
                      </span>
                    </p>

                    <p>{{ product.product_desc }}</p>
                  </div>
                  <!-- info-main.// -->
                </div>
                <!-- col.// -->
                <aside class="col-sm-3">
                  <div class="info-aside">
                    <div class="price-wrap">
                      <span class="h5 price">{{
                        product.current_price | vnd
                      }}</span>
                      <del class="text-muted">{{
                        product.old_price | vnd
                      }}</del>
                    </div>
                    <!-- price-wrap.// -->
                    <small class="text-warning text-">Free ship</small>
                    <p class="mt-3">
                      <a href="#" class="btn btn-outline-primary">
                        <i class="fa fa-envelope"></i> Thêm vào giỏ
                      </a>
                      <a href="#" class="btn btn-light"
                        ><i class="fa fa-heart"></i> Yêu thích
                      </a>
                    </p>
                  </div>
                  <!-- info-aside.// -->
                </aside>
                <!-- col.// -->
              </div>
              <!-- row.// -->
            </article>
            <!-- card-product .// -->

            <nav class="mb-4" aria-label="Page navigation sample">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
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
export default {
  layout: 'home',
  async asyncData(context) {
    const category = await context.$axios.$get(
      `http://127.0.0.1:8000/api/categories/${context.params.id}`
    )

    const products = await context.$axios.$get(
      `http://127.0.0.1:8000/api/productsbycategory/${context.params.id}`
    )
    return {
      category,
      products,
    }
  },
  data() {
    return {
      filter_by: 1,
    }
  },

  methods: {
    reverseProduct() {
      this.products.slice().reverse()
    },
    changeFilter() {
      if (this.filter_by === 2) this.reverseProduct()
    },
  },
}
</script>
