<template>
  <div class="home-container">
      <Navbar />
      <Notification v-if="isError" :message='error' />
    <div class="github-repo-list-container">
      <Spinner v-if="state === STATE.VALIDATING"/>
      <div class="github-repo-list" v-else>
        <button
        :disabled="state === STATE.VALIDATING"
        class="search-btn"
        :class="state === STATE.VALIDATING && `opacity-25`"
        @click="reload"
      >
        {{ state === STATE.VALIDATING ? `Searching ...` : `Search` }}
      </button>
        <RepoCard :repositories="repositories"
          v-if="repositories?.total_count>0"
          :repoMatch='"searchTerm"'
          />
        <div class="display-message" v-else>
          <img class='github-logo bounce' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
          <h1 v-if="error" class='home-text'>
            <span>We couldn’t find any repositories</span>
            <!-- <span> matching "{{searchTerm}}"</span> -->
          </h1>
          <h1 v-else class='home-text'>Search for any Github Repository</h1>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import { useSwrCache, STATE } from '@/store/swrvCache';
import fetcher from '@/helpers/fetcher';
import Navbar from '@/components/NavBar.vue';
import RepoCard from '@/components/RepoCard.vue';
import Notification from '@/components/Notification.vue';
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Navbar,
    RepoCard,
    Notification,
    Spinner,
    Pagination,
  },
  setup() {
    const {
      data: repositories,
      error,
      isError,
      state,
      reload,
    } = useSwrCache(`https://api.github.com/search/repositories?q=${'random'}`, fetcher);

    return {
      STATE,
      error,
      isError,
      state,
      reload,
      repositories,
    };
  },
};
</script>
