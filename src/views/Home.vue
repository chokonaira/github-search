<template>
  <div class="home-container">
      <Notification :state='state' :message='errorMessage' />
    <div class="github-repo-list-container">
      <RepoCard />
    </div>
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';
import Notification from '@/components/Notification.vue';

export default {
  components: {
    RepoCard,
    Notification,
  },
  data() {
    return {
      state: 'error',
      errorMessage: 'Sheddy balabala',
    };
  },
};
</script>
