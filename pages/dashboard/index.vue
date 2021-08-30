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
      <h1 class="h3">Tổng Quan</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Share
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Export
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
    <stat />
    <div class="row">
      <div class="col-8">
        <div class="card shadow">
          <div class="card-header">Thống kê bán hàng</div>
          <div class="card-body">
            <line-chart />
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card shadow">
          <div class="card-header">Tỷ lệ đơn hàng</div>
          <div class="card-body">
            <pie-chart />
          </div>
        </div>
      </div>
    </div>
    <list-order class="shadow" />
  </div>
</template>
<script>
import Stat from '@/components/Dashboard/Stat.vue'
import ListOrder from '@/components/Dashboard/ListOrder.vue'
import PieChart from '@/components/Dashboard/PieChart.vue'
import LineChart from '@/components/Dashboard/LineChart.vue'

export default {
  components: {
    Stat,
    ListOrder,
    PieChart,
    LineChart,
  },
  layout: 'admin',
  head() {
    return {
      title: 'Tổng Quan | Quản lý Fahasa',
    }
  },
}
</script>
