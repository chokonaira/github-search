<template>
  <div class="repositories-container">
      <Notification v-if="isNotification" :message='errors' />
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
        <Pagination v-if="togglePaginationDisplay" />
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

    const isLoading = computed(() => store.state.isLoading);
    const isRepositoriesFetched = computed(() => store.state.isRepositoriesFetched);
    const searchTerm = computed(() => store.state.searchTerm);
    const isNotification = computed(() => store.state.isNotification);
    const errors = computed(() => store.state.errors);
    const repositories = computed(() => store.state.repositories);
    const perPage = computed(() => store.state.perPage);
    const currentPage = computed(() => store.state.currentPage);

    const toggleRepositoriesDisplay = computed(() => repositories.value?.total_count > 0);
    const noRepositoryFound = computed(() => (isRepositoriesFetched.value
      && repositories.value?.total_count === 0) && !isLoading.value);
    const togglePaginationDisplay = computed(() => (repositories.value?.total_count > perPage.value)
      && (!isLoading.value && !noRepositoryFound.value));

    store.dispatch('fetchRepositories', {
      searchTerm: searchTerm.value,
      page: currentPage.value,
    });

    return {
      isLoading,
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
