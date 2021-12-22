<template>
  <div class="navbar-search">
    <input type="text"
      :placeholder='placeholder'
      v-model="searchValue"
      class='search-input'
      v-bind="$attrs"
    >
    <Button
        @click="fetchRepo(searchValue.trim())"
        :disabled="toggleDiableButton"
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
      searchValue: '',
      disable: true,
    };
  },
  computed: {
    toggleDiableButton() {
      if (!this.searchValue) {
        return this.disable;
      }
      return !this.disable;
    },
  },
  methods: {
    ...mapActions(['fetchRepositories']),
    fetchRepo(searchValue) {
      return this.fetchRepositories(searchValue);
    },
  },
};
</script>
