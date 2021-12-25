<template>
  <div class="repo-details-container">
    <Notification v-if="isNotification" :state='state' :message='errors' />
      <div class="repo-details-wrapper-0">
        <Spinner v-if="isLoading"/>
        <div v-else class="repo-details-wrapper-1">
            <div class="repo-details-wrapper-2">
              <div class="repo-image-with-btn">
                <button class="repo-details-back-link"
                @click="$router.back()"><ui-icon>west</ui-icon></button>
                <img :src='repository.owner?.avatar_url' alt="repoDetails owner avatar"/>
              </div>
              <div>
                <h5><span>Owner:</span> {{repository.owner?.login}}</h5>
                <h5>Repo name: {{repository.name}}</h5>
                <h5><span>Created on:</span> {{date}}</h5>
                <a :href="repository.clone_url"
                target="_blank">Preview repo on github<ui-icon :size="24">open_in_new</ui-icon></a>
              </div>
            </div>
          <div class="repo-charts">
          <RepoCharts />
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
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
  data() {
    return {
      state: 'error',
    };
  },
  mounted() {
    this.fetchRepository({
      owner: this.owner,
      repo: this.repo,
    });
  },
  computed: {
    ...mapState(['isLoading', 'isFetched', 'isNotification', 'errors', 'repository']),
    date() {
      return dateFormatter(this.repository.created_at);
    },
  },
  methods: {
    ...mapActions(['fetchRepository']),
  },
};
</script>
