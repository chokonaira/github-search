<template>
  <div class="navbar-search">
    <input type="text"
      placeholder="Repo name"
      v-model="searchValue"
      class='search-input'
      v-bind="$attrs"
    >
    <Button @click="fetchRepo(searchValue)" title='Search'/>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  placeholder: {
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchValue: '',
      emptySearchValueMessage: '',
    };
  },
  methods: {
    ...mapActions(['fetchRepositories']),
    ...mapMutations(['validatedInput']),
    fetchRepo(searchValue) {
      if (this.searchValue === '') {
        return this.validatedInput('Empty search input');
      }
      return this.fetchRepositories(searchValue);
    },
  },
};
</script>
