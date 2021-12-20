<template>
  <input type="text"
    :placeholder="placeholder"
    v-model="searchValue"
    class='search-input'
  >
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
