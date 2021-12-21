<template>
  <div class="navbar-container">
    <router-link to="/">
      <h2 class="navbar-title">GitHub Repo</h2>
    </router-link>
      <SearchInput />
  </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
    SearchInput,
  },
  props: {
    msg: String,
  },
};
</script>
