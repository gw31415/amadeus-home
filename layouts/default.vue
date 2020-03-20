<template>
  <v-app>
    <v-app-bar flat fixed class="appbar" color="transparent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item link>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <!--v-list-item link>
          <v-list-item-title>Products</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Contacts</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Donate</v-list-item-title>
        </v-list-item-->
      </v-list>
    </v-navigation-drawer>
  <div class="main">
    <nuxt />

    <v-footer class="vfooter" padless>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Amadeus_vn</strong>
      </v-col>
    </v-footer>
    </div>
  </v-app>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.vfooter {
  position: relative;
  bottom: 0;
  width:100vw;
}
.appbar {
  background: linear-gradient(white, transparent);
}
</style>
<script>
export default {
  data: () => {
    return {
      drawer: false
    }
  }
}
</script>
