<template>
  <Chart
    :size="{ width: 700, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
    :axis="axis">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['githubTitle', 'counts']"
      :lineStyle="{ stroke: 'purple' }"
      type='monotone' />
    </template>
  </Chart>
</template>

<script >
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import { Chart, Grid, Line } from 'vue3-charts';
import chartData from '@/helpers/chartDataBuilder';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  data() {
    return {
      data: [],
      direction: 'horizontal',
      margin: chartData.margin,
      axis: chartData.axis,
    };
  },
  mounted() {
    if (this.repository) {
      const {
        forks_count: forksCount, watchers_count: starsCount,
        open_issues_count: issueCount,
      } = this.repository;
      this.data = chartData.builder(forksCount, starsCount, issueCount);
    }
  },
  computed: {
    ...mapState(['repository']),
  },
});
</script>
