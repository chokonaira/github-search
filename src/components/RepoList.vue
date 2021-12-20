<template>
  <div class="repo-list-container">
    <div>
      <h2>Repository Name</h2>
      <p>description</p>
    </div>
  </div>
</template>
<script>
import ProfileImage from '@/assets/images/profile-img.jpeg';

export default {
  data() {
    return {
      image: ProfileImage,
    };
  },
};
</script>
