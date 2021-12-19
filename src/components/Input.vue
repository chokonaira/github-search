<template>
  <ui-textfield
  v-model="searchValue">
  Seach github user
</ui-textfield>
<p>{{searchValue}}</p>
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
