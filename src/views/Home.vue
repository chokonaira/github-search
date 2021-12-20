<template>
   <div class="home-input-button">
     <Input />
     <Button />
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: { Input, Button },
};
</script>
