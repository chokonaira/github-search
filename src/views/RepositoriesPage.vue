<template>
  <div class="home-container">
      <Notification v-if="isNotification" :state='state' :message='errors' />
    <div class="github-repo-list-container">
      <Spinner v-if="isLoading"/>
      <div class="github-repo-list" v-else>
        <RepoCard v-if="toggleRepositoriesDisplay" />
        <div class="display-message" v-else>
          <img class='github-logo bounce' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
          <h1 v-if="noRepositoryFound" class='home-text'>
            <span>We couldn’t find any repositories</span>
            <span> matching "{{searchTerm}}"</span>
          </h1>
          <h1 v-else class='home-text'>Search for any Github Repository</h1>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  computed: {
    ...mapState(['isLoading', 'isFetched', 'searchTerm', 'isNotification', 'errors', 'repositories']),
    toggleRepositoriesDisplay() {
      return this.repositories.total_count > 0;
    },
    noRepositoryFound() {
      return this.isFetched && this.repositories.total_count === 0;
    },
  },
  methods: {
    ...mapActions(['fetchRepositories']),
  },
};
</script>
