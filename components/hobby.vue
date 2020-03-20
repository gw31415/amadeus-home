<template>
  <div v-inview:class="['change']" class="hobby">{{ main }}</div>
</template>

<style>
.hobby {
  opacity: 0;
  padding: 1ex;
  padding-left: 15vw;
  transition: all 0.8s;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 30px;
  text-align: left;
  color: #35495e;
}
.change {
  opacity: 1;
  padding-left: 0;
}
</style>
<script>
export default {
  props: {
    main: String
  },
  data: () => {
    return {
      main: '',
      visibility: false
    }
  }
}
</script>
