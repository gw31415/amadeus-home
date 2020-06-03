<template>
<div class="space">
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <div class="sns" :style="{'background-color': color}" @click.stop="jump(shareUrl)" ontouchstart="">
      <v-icon size="min(200px)" :color="icocolor">{{icon}}</v-icon>
    </div>

     <v-list-item-title class="headline mb-1">{{name}}</v-list-item-title>

    <v-card-text class="text--primary">
      <div>{{description}}</div>
    </v-card-text>

    <v-card-actions class="center">
      <v-btn
        color="orange"
        text
        @click.stop="jump(shareUrl)"
      >
        Jump
      </v-btn>

      <v-btn
        color="orange"
        text
        @click.stop="share(shareTitle,shareText,shareUrl)"
      >
        Share
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>
<style>
.space {
  margin: 3ex;
}
.sns {
  height: 250px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  box-shadow: 0 0 20px 5px rgba(0,0,0,0.3) inset;
  transition: all 0.2s;
}
.sns:active {
  box-shadow: 0 0 30px 20px rgba(0,0,0,0.5) inset;
  }
</style>

<script>
export default {
  props: [
    "name",
    "icon",
    "color",
    "icocolor",
    "shareTitle",
    "shareText",
    "shareUrl",
    "description"
  ],
  methods: {
    share: (shareTitle,shareText,shareUrl) => {
      if (navigator.share) {
        navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        });
      } else {
      }
    },
    jump: data => {
        window.location.href = data
    }
  }
}
</script>
