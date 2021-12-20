<template>
  <div class="home-container">
    <div class="home-input-button">
      <Input />
      <Button />
    </div>
    <div class="github-profile-cards-container">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  name: 'Home',
  components: { Input, Button, ProfileCard },
};
</script>
