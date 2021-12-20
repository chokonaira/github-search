<template>
  <ui-card class="demo-card demo-card--music">
  <ui-card-content class="demo-card__primary-action">
    <div class="demo-card__music-row">
      <img :src='image'>
      <div class="demo-card__music-info">
        <div :class="[$tt('headline5'), 'demo-card__music-title']">username jjjbbsjjjbs</div>
        <div class="demo-card__music-artist">Stars: 4</div>
        <div class="demo-card__music-year">Forks: 7</div>
      </div>
    </div>
  </ui-card-content>
  <ui-list-divider></ui-list-divider>
  <ui-card-actions>
    <ui-card-buttons class="demo-card__action-buttons--text-only">
      Descrption: Descrption Descrption
    </ui-card-buttons>
  </ui-card-actions>
</ui-card>
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
