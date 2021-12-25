<template>
  <div class="notification-container">
    <ui-alert class="alert" state='error' closable>{{message}}</ui-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String || undefined,
    },
  },
};
</script>
