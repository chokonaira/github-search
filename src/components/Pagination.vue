<template>
<div  v-if="toggleHomePaginationDisplay" class="pagination-wrapper">
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
    ...mapState(['repositories', 'isLoading']),
    toggleHomePaginationDisplay() {
      return this.repositories.total_count > this.pagaginationTrigger && !this.isLoading;
    },
  },
};
</script>
