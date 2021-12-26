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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Chart, Grid, Line } from 'vue3-charts';
import chartData from '@/helpers/chartDataBuilder';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const store = useStore();

    let data = ref([]);
    const direction = ref('horizontal');
    const margin = ref(chartData.margin);
    const axis = ref(chartData.axis);

    const repository = computed(() => store.state.repository);

    const {
      forks_count: forksCount, watchers_count: starsCount,
      open_issues_count: issueCount,
    } = repository.value;

    data = chartData.builder(forksCount, starsCount, issueCount);

    return {
      data,
      direction,
      margin,
      axis,
    };
  },
});
</script>
