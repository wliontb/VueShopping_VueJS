<template>
  <line-chart :data="lineChartData" :options="lineChartOptions" />
</template>
<script>
import LineChart from '~/components/Chart/LineChart'

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      lineChartData: {
        labels: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
        ],
        datasets: [
          {
            label: 'Sản phẩm bán ra',
            data: [1, 3, 5, 7, 6, 0],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>
