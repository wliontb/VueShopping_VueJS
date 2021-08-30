<template>
  <div class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-3 bg-danger text-light">Danh mục</div>
        <div class="col-9">
          <div class="row header_menu">
            <div class="col">
              <a href="#">Danh mục 1</a>
            </div>
            <div class="col">
              <a href="#">Danh mục 2</a>
            </div>
            <div class="col">
              <a href="#">Danh mục 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="css">
.header_menu col a.active {
  background: #f7941e;
}

.header_menu col:hover {
  background: #f7941e;
}
</style>
