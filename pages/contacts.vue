<template>
  <div>
    <div class="headtitle">
      <img src="@/assets/bar.jpg" class="headback" />
      <div class="titlback">
        <div class="titl">Contacts</div>
      </div>
    </div>
    <div class="headbase"></div>
    <contact
      name="Twitter"
      icon="mdi-twitter"
      color="#00aced"
      icocolor="white"
      shareTitle="Twitter"
      shareText="天輝主 (@Amadeus_vn)さんをチェックしよう"
      shareUrl="https://twitter.com/Amadeus_vn"
      description="VTuberファン/漫画読み/Arcaea/RT注意"
    />
    <contact
      name="Discord"
      icon="mdi-discord"
      color="#7289da"
      icocolor="white"
      shareTitle="Discord"
      shareText="Discord - 数学を愛する会"
      shareUrl="https://twitter.com/mathlava/status/1241689163205734405"
      description="いっくん氏の運営する数学を愛する会管理者の一人です."
    />
    <contact
      name="Mastodon"
      icon="mdi-mastodon"
      color="white"
      icocolor="#00aced"
      shareTitle="Mastodon"
      shareText=""
      shareUrl="https://mstdn.maud.io/web/accounts/155098"
      description=":don:に時々います. 下ネタ注意."
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
      name="メール"
      icon="mdi-email"
      color="white"
      icocolor="gray"
      shareTitle="メール"
      shareText="お問い合わせ"
      shareUrl="mailto:q1@amas.dev"
      description="お問い合わせ用メールアドレス"
    />
  </div>
</template>

<style>
.headtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  width: 100vw;
  position: fixed;
}
.headbase {
  height: 30vh;
  width: 100vw;
}
.headback {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.titl {
  color:white;
  font-size: min(12vw, 10vh);
  font-family: "Julius Sans One"
}
.titlback {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  backdrop-filter: blur(10px);
  height: 20vh;
  width: 80vw;
}
</style>

<script>
import contact from "~/components/contact.vue";

export default {
  components: {
    contact
  }
};
</script>
