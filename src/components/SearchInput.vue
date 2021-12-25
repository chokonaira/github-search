<template>
  <div class="navbar-search">
    <input type="text"
      :placeholder='placeholder'
      v-model.trim="searchTerm"
      class='search-input'
      v-bind="$attrs"
    >
    <Button
        @click="fetchRepos()"
        :disabled="!searchTerm ? true : false"
        title='Search'/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  placeholder: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapState(['currentPage']),
  },
  methods: {
    ...mapActions(['fetchRepositories']),
    fetchRepos() {
      this.fetchRepositories({
        searchTerm: this.searchTerm,
        page: this.currentPage,
      });
      this.searchTerm = '';
    },
  },
};
</script>
