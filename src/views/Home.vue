<template>
  <div class="home-container">
      <Notification :state='state' :message='errorMessage' />
    <div class="github-repo-list-container">
      <RepoCard />
    </div>
    <Pagination />
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';
import Notification from '@/components/Notification.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    RepoCard,
    Notification,
    Pagination,
  },
  data() {
    return {
      state: 'error',
      errorMessage: 'Sheddy balabala',
      page: 1,
    };
  },
};
</script>
