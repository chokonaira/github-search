<template>
  <ui-card outlined class="demo-card">
  <div
    v-if="repositories.length>0"
    :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">
    Github Repository matching: <span class="search-query">{{searchValue}}</span>
  </div>
  <ui-list-divider></ui-list-divider>
    <div v-for="(item, index) in repositories" :key="index">
      <div v-ripple  class="demo-card-article">
        <h3 class="demo-card-article__title">
          {{ item.name }}
        </h3>
        <p class="demo-card-article__snippet">{{ item.description || 'Empty description' }}</p>
        <div class="repo-numbers-container">
           <div class="repo-numbers"> <ui-icon dark>grade</ui-icon>
           Stars: <span>{{ item.watchers_count }}</span></div>
           <div class="repo-numbers"> <ui-icon dark>alt_route</ui-icon>
           Forks: <span>{{ item.forks_count }} </span></div>
       </div>
      </div>
      <ui-list-divider></ui-list-divider>
    </div>
    </ui-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isLoading', 'repositories', 'searchValue']),
    console() {
      console.log('console', this.repositories);
      return '';
    },
  },
};
</script>
