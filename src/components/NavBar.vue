<template>
  <div class="navbar-container">
    <router-link class="navbar-link" to="/">
      <h2 class="navbar-title">ArtSearch</h2>
      <img class='nav-logo' src="@/assets/images/github-logo-dark.png"
            alt="github logo">
    </router-link>
      <SearchInput @search='onSearch' :placeholder="'search or jump to...'" />
  </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue';

export default {
  components: {
    SearchInput,
  },
  emits: ['search'],
  props: {
    msg: String,
  },
  methods: {
    onSearch(value) {
      this.$emit('search', value);
    },
  },
};
</script>
