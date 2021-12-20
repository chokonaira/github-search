<template>
  <ui-textfield
  outlined
  :placeholder="placeholder"
  v-model="searchValue"
  class='search-input'>
</ui-textfield>
</template>

<script>
export default {
  placeholder: {
    placeholder: {
      type: String,
      required: true,
    },
  },
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
