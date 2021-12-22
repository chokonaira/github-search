<template>
  <div class="notification-container">
    <ui-alert class="alert" :state='state' closable>{{message}}</ui-alert>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
