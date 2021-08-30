<template>
  <pie-chart :data="pieChartData" :options="pieChartOptions" :height="200" />
</template>
<script>
import PieChart from '~/components/Chart/PieChart'

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      pieChartData: {
        labels: ['Hoàn thành', 'Đã duyệt', 'Chờ duyệt'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [33, 33, 33],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      pieChartOptions: {},
    }
  },
}
</script>
