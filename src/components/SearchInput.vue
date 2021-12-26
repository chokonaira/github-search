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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
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
  setup() {
    const store = useStore();
    let searchTerm = ref('');

    const currentPage = computed(() => store.state.currentPage);

    function fetchRepos() {
      store.dispatch('fetchRepositories', {
        searchTerm,
        page: currentPage.value,
      });
      searchTerm = '';
    }

    return {
      searchTerm,
      fetchRepos,
    };
  },
};
</script>
