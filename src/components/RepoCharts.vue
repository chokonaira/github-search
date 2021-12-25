<template>
  <Chart
    :size="{ width: 700, height: 400 }"
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
import { Chart, Grid, Line } from 'vue3-charts';
import chartData from '@/helpers/chartDataBuilder';

export default defineComponent({
  name: 'LineChart',
  props: {
    repoDetails: {
      type: Object,
      required: true,
    },
  },
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
    if (this.repoDetails) {
      const {
        forks_count: forksCount, watchers_count: starsCount,
        open_issues_count: issueCount,
      } = this.repoDetails;
      this.data = chartData.builder(forksCount, starsCount, issueCount);
    }
  },
});
</script>
