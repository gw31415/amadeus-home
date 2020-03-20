<template>
  <div>
    <div class="cover">
      <logo size="300" />
      <h1 class="myname">Amadeus_vn</h1>
      <h2 class="subtitle">天輝主</h2>
    </div>
    <h3 class="quote zayu">
      The JACK
      <br />of all trades.
    </h3>
    <div class="hblist">
      <hobby main="Violin," />
      <hobby main="Mathematics," />
      <hobby main="Programming," />
      <hobby main="Physics," />
      <hobby main="Minecraft," />
      <hobby main="....?" />
    </div>
    <h3 class="quote student">
      Are they a student?
      <br />⇒ Umm.....
    </h3>
    <div class="tx">
      中高一貫男子校卒, 大学落第ループ中.
      <br />素材の味を活かした自然派浪人生です.
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import hobby from "~/components/hobby.vue";

export default {
  components: {
    Logo,
    hobby
  }
};
</script>

<style>
.quote {
  padding-top: 2ex;
  padding-bottom: 2ex;
  font-size: 42px;
  width: 100vw;
}
.tx {
  padding-top: 20vh;
  padding-bottom: 20vh;
  font-style: italic;
  color: gray;
  font-size: 14px;
}

.cover {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.myname {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 54px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.zayu {
  font-family: Griffy;
  background-color: #673ab7;
  color: white;
}
.hblist {
  width: 100vw;
  padding-top: 2ex;
  padding-left: 1em;
  padding-bottom: 2ex;
  min-height: 60vh;
}
.student {
  font-family: "Life Savers";
  background-color: #ff9800;
  color: white;
}
</style>
