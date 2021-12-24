<template>
  <div class="repo-details-container">
    <div v-if="repoDetails" class="repo-details-wrapper">
    <button class="repo-details-back-link" @click="$router.back()">go back</button>
      <h1>{{repoDetails.name}}</h1>
      <img :src='repoDetails.owner.avatar_url' alt="repoDetails owner avatar"/>
      <h1 :href="repoDetails.clone_url" target="_blank">Clone repoDetails on Github</h1>
      <h1>{{repoDetails.created_at}}</h1>
      <h1>{{repoDetails.forks_count}}</h1>
      <h1>{{repoDetails.open_issues_count}}</h1>
      <h1>{{repoDetails.watchers_count}}</h1>
    </div>
    <router-link v-else class="navbar-link" :to="{ name: 'RepositoriesPage' }">
      <h1>Go back to the Repository page</h1>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['repository'],
  data() {
    return {
      repoDetails: null,
    };
  },
  mounted() {
    this.repoDetails = JSON.parse(this.repository);
  },
};
</script>
