<template>
  <div class="home-container">
      <Notification :state='state' :message='errorMessage' />
    <div class="home-input-button">
      <Input placeholder="Search profiles by username"/>
      <Button title='Search'/>
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
import Notification from '@/components/Notification.vue';

export default {
  components: {
    Input,
    Button,
    ProfileCard,
    Notification,
  },
  data() {
    return {
      state: 'error',
      errorMessage: 'Sheddy balabala',
    };
  },
};
</script>
