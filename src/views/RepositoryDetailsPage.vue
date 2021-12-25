<template>
  <div class="repo-details-container">
      <div v-if="repoDetails" class="repo-details-wrapper-1">
          <div class="repo-details-wrapper-2">
            <div class="repo-image-with-btn">
              <button class="repo-details-back-link"
              @click="$router.back()"><ui-icon>west</ui-icon></button>
              <img :src='repoDetails.owner.avatar_url' alt="repoDetails owner avatar"/>
            </div>
            <div>
              <h5><span>Owner:</span> {{repoDetails.owner.login}}</h5>
              <h5>Title: {{repoDetails.name}}</h5>
              <h5><span>Created on:</span> {{date}}</h5>
              <a :href="repoDetails.clone_url"
              target="_blank">Preview repo on github<ui-icon :size="24">open_in_new</ui-icon></a>
            </div>
          </div>
        <div class="repo-charts">
          <RepoCharts :repoDetails='repoDetails' />
        </div>
      </div>
  </div>
</template>
<script>
import RepoCharts from '@/components/RepoCharts.vue';
import dateFormatter from '@/helpers/dateFormatter';

export default {
  props: ['repository'],
  components: { RepoCharts },
  data() {
    return {
      repoDetails: null,
    };
  },
  mounted() {
    this.repoDetails = JSON.parse(this.repository);
  },
  computed: {
    date() {
      return dateFormatter(this.repoDetails.created_at);
    },
  },
};
</script>
