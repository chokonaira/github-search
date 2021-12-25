<template>
  <div class="navbar-search">
    <input type="text"
      :placeholder='placeholder'
      v-model="searchTerm"
      class='search-input'
      v-bind="$attrs"
    >
    <Button
        @click="fetchRepo(searchTerm.trim())"
        :disabled="!searchTerm ? true : false"
        title='Search'/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions(['fetchRepositories']),
    fetchRepo(searchTerm) {
      this.fetchRepositories(searchTerm);
      this.searchTerm = '';
    },
  },
};
</script>
