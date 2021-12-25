<template>
  <div class="repositories-container">
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
        <Pagination
          v-if="togglePaginationDisplay"
          :targetPage="page"
          :per="perPage"
          :totalRows="repositories.total_count"
          @nextPage="nextPage"
          @previousPage="previousPage"
          @firstPage="firstPage"
          @lastPage="lastPage"
          @paginationInput="paginationInput"
          />
      </div>
    </div>
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
      page: undefined,
    };
  },
  mounted() {
    this.page = this.currentPage;
    this.fetchRepositories({
      searchTerm: 'random',
      page: this.currentPage,
    });
  },
  computed: {
    ...mapState(['isLoading', 'isRepositoriesFetched', 'searchTerm', 'isNotification', 'errors', 'repositories', 'currentPage', 'perPage']),
    toggleRepositoriesDisplay() {
      return this.repositories.total_count > 0;
    },
    togglePaginationDisplay() {
      return (this.repositories.total_count > this.perPage) && !this.isLoading;
    },
    noRepositoryFound() {
      return this.isRepositoriesFetched && this.repositories.total_count === 0;
    },
  },
  methods: {
    ...mapActions(['fetchRepositories']),
    nextPage(computedPageNumber) {
      this.page = parseInt(computedPageNumber, 10);
      this.fetchRepo();
    },
    previousPage(computedPageNumber) {
      this.page = parseInt(computedPageNumber, 10);
      this.fetchRepo();
    },
    firstPage(computedPageNumber) {
      this.page = parseInt(computedPageNumber, 10);
      this.fetchRepo();
    },
    lastPage(computedPageNumber) {
      this.page = parseInt(computedPageNumber, 10);
      this.fetchRepo();
    },
    paginationInput(computedPageNumber) {
      this.page = parseInt(computedPageNumber, 10);
      this.fetchRepo();
    },
    fetchRepo() {
      this.fetchRepositories({
        searchTerm: this.searchTerm,
        page: this.page,
      });
    },
  },
};
</script>
