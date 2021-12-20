<template>
  <ui-textfield
  outlined
  placeholder="Search profiles"
  v-model="searchValue"
  class='search-input'>
</ui-textfield>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    };
  },
  method: {
    clearInput() {
      // const restoreEmptyInput =
      this.searchValue = '';
      return this.searchValue;
    },
  },
};
</script>
