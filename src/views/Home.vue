<template>
   <div class="home">
     <Input />
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';

export default {
  name: 'Home',
  components: { Input },
};
</script>

// <style lang='scss' scoped>
// .home {
//     color: $orchid;
//     font-size: $font-size-8;
//   @include sm {
//     color: $teal;
//     font-size: $font-size-16;
//   }
//   @include md {
//     color: $crimson;
//     font-size: $font-size-32;
//   }
//   @include lg {
//     color: $black;
//     font-size: $font-size-60;
//   }
// }
// </style>
