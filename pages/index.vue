<template>
  <div>
    <div class="cover">
      <picture>
        <source :srcSet="require('@/assets/icon.jpg?webp')" type="image/webp" />
        <source :srcSet="require('@/assets/icon.jpg')" type="image/jpeg" />
        <img :src="require('@/assets/icon.jpg')" class="icon"/>
      </picture>
      <h1 class="myname">Amadeus_vn</h1>
      <h2 class="subtitle">天輝主</h2>
      <div class="scrollico"></div>
    </div>
    <h3 class="quote zayu">
      The JACK of all trades.
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
      中高一貫校卒, ２年の浪人ののち貧しい医大生となりました.
      <br /> 人生は楽しい.
    </div>
    <h3 class="quote pages">
      <v-icon size="150px" @click="$router.push('/contacts')" color="white" >mdi-account-circle</v-icon>
    </h3>
  </div>
</template>

<script>
import hobby from "~/components/hobby.vue";

export default {
  layout: 'toppage',
  components: {
    hobby
  }
};
</script>

<style>
.scrollico {
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #35495e;
  border-bottom: 1px solid #35495e;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 1.5s infinite;
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
.icon {
  width: min(300px,80vmin);
  height: auto;
  border-radius: min(300px,80vmin);
}
.quote {
  padding-top: 2ex;
  padding-bottom: 2ex;
  padding-left: 1em;
  padding-right: 1em;
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
  font-size: min(15vw, 54px);
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: min(10vw, 36px);
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
  padding-top: 2ex;
  padding-left: max(1em,calc(50vw-240px));
  padding-bottom: 2ex;
  min-height: 60vh;
}
.student {
  font-family: "Life Savers";
  background-color: #ff9800;
  color: white;
}
.pages {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #424242;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
