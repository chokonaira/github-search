<template>
  <ui-card outlined class="demo-card">
  <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">
    Repository matching: <span class="search-query">Swift Foods</span>
  </div>
  <ui-list-divider></ui-list-divider>
    <div v-for="(item, index) in list" :key="index">
      <div v-ripple  class="demo-card-article">
        <h3 class="demo-card-article__title">
          {{ item.title }}
        </h3>
        <p class="demo-card-article__snippet">{{ item.description }}</p>
        <div class="repo-numbers-container">
           <div class="repo-numbers"> <ui-icon dark>grade</ui-icon>
           Stars: <span>{{ item.stars }}</span></div>
           <div class="repo-numbers"> <ui-icon dark>alt_route</ui-icon>
           Forks: <span>{{ item.forks }} </span></div>
       </div>
      </div>
      <ui-list-divider></ui-list-divider>
    </div>
    </ui-card>
</template>
<script>

export default {
  data() {
    return {
      list: [
        {
          title: 'Copper on the rise',
          description:
            'Copper price soars amid global market optimism and increased demand. Copper price soars amid global market optimism and increased demand. Copper price soars amid global market optimism and increased demand.',
          stars: 5,
          forks: 1,
        },
        {
          title: 'U.S. tech startups rebound',
          description:
            'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.',
          stars: 7,
          forks: 2,
        },
        {
          title: 'Asia\'s clean energy ambitions',
          description:
            'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia.',
          stars: 2,
          forks: 0,
        },
      ],
    };
  },
};
</script>
