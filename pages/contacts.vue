<template>
  <div>
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
      name="YouTube"
      icon="mdi-youtube"
      color="red"
      icocolor="white"
      shareTitle="YouTube"
      shareText=""
      shareUrl="https://youtube.com/channel/UCOgNXfCpmc6fe5_P3BO4xRA"
      description="特に更新はしていない"
    />
    <contact
      name="LINE"
      icon="fab fa-line"
      color="#00b900"
      icocolor="white"
      shareTitle="LINE"
      shareText=""
      shareUrl="https://lin.ee/oVlhHh7"
      description="返信遅れることがよくありそうです"
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
    <contact
      name="メール"
      icon="mdi-email"
      color="slateblue"
      icocolor="white"
      shareTitle="メール"
      shareText="お問い合わせ"
      shareUrl="mailto:q1@amas.dev"
      description="お問い合わせ用メールアドレス"
    />
  </div>
</template>

<script>
import contact from "~/components/contact.vue";

export default {
  components: {
    contact
  }
};
</script>
