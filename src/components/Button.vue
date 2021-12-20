<template>
  <ui-button class='search-btn' raised>{{ title }}</ui-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
