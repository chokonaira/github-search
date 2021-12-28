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
import useSWRVCache from '@/helpers/swrvCache';
import { allRepositoriesUrl } from '@/helpers/urlBuilder';

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
    const hasClicked = ref(false);

    const currentPage = computed(() => store.state.currentPage);
    const perPage = computed(() => store.state.perPage);

    const { data, error } = useSWRVCache(() => hasClicked.value
    && allRepositoriesUrl(searchTerm.value, currentPage.value, perPage.value));

    function fetchRepos() {
      hasClicked.value = true;

      store.commit('SET_SEARCH_TERM', searchTerm.value);
      store.commit('SET_CURRENT_PAGE', currentPage.value);
      store.commit('ADD_REPOSITORIES', data);

      if (error.value) {
        store.commit('SET_ERRORS', error.value);
      }

      if (hasClicked.value) {
        searchTerm = '';
      }
    }

    return {
      searchTerm,
      fetchRepos,
    };
  },
};
</script>
