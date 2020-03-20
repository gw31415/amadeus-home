<template>
  <v-avatar :size="size">
    <img src="../assets/icon.jpg" alt="Amadeus_vn" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    size: Number
  },
  data: () => {
    return {
      size: 48
    }
  }
}
</script>
