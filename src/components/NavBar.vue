<template>
  <div class="navbar-container">
    <router-link to="/">
      <h2 class="navbar-title">GitHub Repo</h2>
    </router-link>
    <div class="navbar-search">
      <Input placeholder="Repo name"/>
      <Button title='Search'/>
    </div>
  </div>
</template>
<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  components: {
    Input,
    Button,
  },
  props: {
    msg: String,
  },
};
</script>
