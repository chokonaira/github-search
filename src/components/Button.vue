<template>
  <ui-button v-bind="$attrs" class='search-btn' raised>{{ title }}</ui-button>
</template>

<script>

export default {
  inheritAttrs: false,
  emits: ['methodName'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
