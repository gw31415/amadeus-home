<template>
  <div>
    <div class="contactscover">
      <v-icon size="min(200px,50vmin)" color="#0097A7" >mdi-account-circle</v-icon>
    </div>
    <div class="cssgrid">
      <contact
        name="Twitter"
        icon="mdi-twitter"
        color="#00aced"
        icocolor="white"
        shareTitle="Twitter"
        shareText="天輝主 (@Amadeus_vn)さんをチェックしよう"
        shareUrl="https://twitter.com/Amadeus_vn"
        description="所謂ヲタ垢です"
      />
      <contact
        name="Discord"
        icon="mdi-discord"
        color="#7289da"
        icocolor="white"
        shareTitle="Discord"
        shareText="Discord - 数学を愛する会"
        shareUrl="https://twitter.com/mathlava/status/1241689163205734405"
        description="いっくん氏の運営する数学を愛する会管理者の一人です. 最近の浮上率は期待しないでください."
      />
      <contact
        name="GitHub"
        icon="mdi-github"
        color="white"
        icocolor="black"
        shareTitle="GitHub"
        shareText="GitHub Amadeus_vn"
        shareUrl="https://github.com/gw31415"
        description="gw31415はAmadeus_vnです."
      />
      <contact
        name="YouTube"
        icon="mdi-youtube"
        color="red"
        icocolor="white"
        shareTitle="YouTube"
        shareText=""
        shareUrl="https://youtube.com/channel/UCOgNXfCpmc6fe5_P3BO4xRA"
        description="ときどきなんかあげてますね."
      />
      <contact
        name="ますらばWiki"
        icon="mdi-wikipedia"
        color="white"
        icocolor="black"
        shareTitle="ますらばWiki"
        shareText=""
        shareUrl="https://wiki.mathlava.com/wiki/%e5%88%a9%e7%94%a8%e8%80%85:%e5%a4%a9%e8%bc%9d%e4%b8%bb"
        description="管理をしています"
      />
    </div>
  </div>
</template>
<style>
.cssgrid {
  margin-bottom: 20vh;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1em;
}
.contactscover {
  display: flex;
  min-height: 65vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import contact from "~/components/contact.vue";

export default {
  components: {
    contact
  },
  fetch ({store,params}) {
    store.commit('header/setTitle', "Contacts")
    store.commit('header/setColor', "#424242")
    store.commit('header/setDark')
  }
};
</script>
