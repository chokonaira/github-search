<template>
  <div class="navbar-search">
    <input type="text"
      :placeholder='placeholder'
      v-model="searchValue"
      class='search-input'
      v-bind="$attrs"
    >
    <Button
        @click="searchRepo"
        :disabled="toggleDiableButton"
        title='Search'/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  emits: ['search'],
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
    searchRepo() {
      this.$emit('search', this.searchValue.trim());
    },
  },
};
</script>
