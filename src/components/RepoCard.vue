<template>
  <ui-card outlined class="demo-card">
  <div
    v-if="repositories.total_count>0"
    :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">
    Github Repository matching: <span class="search-query">{{searchTerm}}</span>
  </div>
  <ui-list-divider></ui-list-divider>
    <div v-for="(item, index) in repositories.items" :key="index">
      <router-link class="navbar-link"
      :to="{ name: 'RepositoryDetailsPage', params: { repository: JSON.stringify(item)} }">
        <div v-ripple  class="demo-card-article">
          <div>
            <h3 class="demo-card-article__title">
              {{ item.name }}
            </h3>
            <p class="demo-card-article__snippet">{{ item.description || 'Empty description' }}</p>
          </div>
          <div class="repo-numbers-container">
            <div class="repo-numbers"> <ui-icon dark>grade</ui-icon>
            Stars: <span>{{ item.watchers_count }}</span></div>
            <div class="repo-numbers"> <ui-icon dark>alt_route</ui-icon>
            Forks: <span>{{ item.forks_count }} </span></div>
        </div>
        </div>
      </router-link>
        <ui-list-divider></ui-list-divider>
    </div>
    </ui-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isLoading', 'repositories', 'searchTerm']),
  },
};
</script>
