<template>
  <div class="home-container">
      <Notification v-if="popupNotification" :state='state' :message='errors' />
    <div class="github-repo-list-container">
      <Spinner v-if="isLoading"/>
      <RepoCard v-else />
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RepoCard from '@/components/RepoCard.vue';
import Notification from '@/components/Notification.vue';
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    RepoCard,
    Notification,
    Spinner,
    Pagination,
  },
  data() {
    return {
      state: 'error',
      page: 1,
    };
  },
  computed: {
    ...mapState(['isLoading', 'popupNotification', 'errors']),
    console() {
      return console.log('console', this.repositories);
    },
  },
};
</script>
