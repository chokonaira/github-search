<template>
  <div class="repo-details-container">
    <Notification v-if="isNotification" :message='errors' />
      <div class="repo-details-wrapper-0">
        <Spinner v-if="isLoading"/>
        <div v-else-if="isRepositoryFound" class="repo-details-wrapper-1">
            <div class="repo-details-wrapper-2">
              <div class="repo-image-with-btn">
                <button class="repo-details-back-link"
                @click="$router.back()"><ui-icon>west</ui-icon></button>
                <img :src='repository?.owner.avatar_url' alt="repoDetails owner avatar"/>
              </div>
              <div>
                <h5><span>Owner:</span> {{repository?.owner.login}}</h5>
                <h5>Repo name: {{repository?.name}}</h5>
                <h5><span>Created on:</span> {{date}}</h5>
                <a :href="repository?.clone_url"
                target="_blank">Preview repo on github<ui-icon :size="24">open_in_new</ui-icon></a>
              </div>
            </div>
          <div class="repo-charts">
            <RepoCharts />
          </div>
        </div>
        <div v-else class="display-message">
          <img class='github-logo bounce' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
          <h1 class='home-text'>
            <span>We couldn’t find any repository</span>
            <router-link class="repo-error-back-link" to='/'>
            <ui-icon class="back-icon">west</ui-icon>
            Go back to repositories page
            </router-link>
          </h1>
        </div>
      </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import RepoCharts from '@/components/RepoCharts.vue';
import Notification from '@/components/Notification.vue';
import Spinner from '@/components/Spinner.vue';
import dateFormatter from '@/helpers/dateFormatter';

export default {
  props: ['owner', 'repo'],
  components: {
    RepoCharts,
    Notification,
    Spinner,
  },
  setup(props) {
    const store = useStore();
    const data = ref({});

    const isLoading = computed(() => store.state.isLoading);
    const isNotification = computed(() => store.state.isNotification);
    const errors = computed(() => store.state.errors);
    const repository = computed(() => store.state.repository);
    const isRepoFetched = computed(() => store.state.isRepoFetched);
    const date = computed(() => dateFormatter(repository.value?.created_at));
    const isRepositoryFound = computed(() => !isLoading.value && isRepoFetched.value);

    store.dispatch('fetchRepository', {
      owner: props.owner,
      repo: props.repo,
    });

    data.value = repository.value;

    return {
      isLoading,
      isNotification,
      errors,
      repository,
      date,
      isRepositoryFound,
    };
  },
};
</script>
