<template>
  <div class="home-container">
      <Notification :state='state' :message='errorMessage' />
    <div class="home-input-button">
      <Input placeholder="Search github Rrpositorie"/>
      <Button title='Search'/>
    </div>
    <div class="github-profile-cards-container">
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
      <RepoList />
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RepoList from '@/components/RepoList.vue';
import Notification from '@/components/Notification.vue';

export default {
  components: {
    Input,
    Button,
    RepoList,
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
