<template>
<div   v-if="repositories.total_count > pagaginationTrigger" class="pagination-wrapper">
  <ui-pagination
    class="pagination"
    v-model="page"
    :total="total"
    show-total mini>
    </ui-pagination>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      pagaginationTrigger: 20,
      page: 1,
      total: 100,
    };
  },
  computed: {
    ...mapState(['repositories']),
  },
};
</script>
