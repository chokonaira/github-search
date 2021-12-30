<template>
  <div class="repositories-container">
      <Notification v-if="isNotification" :message='errors' />
      <div class="github-repo-list-container">
      <div class="github-repo-list-wrapper">
        <div class="github-repo-list" v-if="toggleRepositoriesDisplay" >
          <RepoCard />
          <Pagination />
        </div>
        <Spinner v-else/>
        <div class="display-message" v-if="noRepositoryFound">
          <img class='github-logo bounce' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
          <h1 class='home-text'>
            <span>We couldn’t find any repositories</span>
            <span> matching "{{searchTerm}}"</span>
          </h1>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
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
  setup() {
    const store = useStore();

    const isRepositoriesFetched = computed(() => store.state.isRepositoriesFetched);
    const searchTerm = computed(() => store.state.searchTerm);
    const isNotification = computed(() => store.state.isNotification);
    const errors = computed(() => store.state.errors);
    const repositories = computed(() => store.state.repositories);
    const perPage = computed(() => store.state.perPage);
    const currentPage = computed(() => store.state.currentPage);

    const toggleRepositoriesDisplay = computed(() => repositories.value?.total_count > 0);
    const noRepositoryFound = computed(() => isRepositoriesFetched.value
      && repositories.value?.total_count === 0);
    const togglePaginationDisplay = computed(() => (repositories.value?.total_count
      > perPage.value) && !noRepositoryFound.value);

    store.dispatch('fetchRepositories', {
      searchTerm: searchTerm.value,
      page: currentPage.value,
      perPage: perPage.value,
    });

    return {
      isRepositoriesFetched,
      searchTerm,
      isNotification,
      errors,
      repositories,
      currentPage,
      perPage,
      toggleRepositoriesDisplay,
      togglePaginationDisplay,
      noRepositoryFound,
    };
  },
};
</script>
