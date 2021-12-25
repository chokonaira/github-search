<template>
  <div class="navbar-container">
    <router-link class="navbar-link" to="/">
      <h2 class="navbar-title">GitSearch</h2>
      <img class='nav-logo' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
    </router-link>
      <SearchInput v-if="isRootPath" :placeholder="'search repo..'" />
      <div v-else class="navbar-search">
        <h1 class="navbar-title">Repository Overview</h1>
        </div>
  </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
    SearchInput,
  },
  computed: {
    isRootPath() {
      return this.$route.path === '/';
    },
  },
};
</script>
