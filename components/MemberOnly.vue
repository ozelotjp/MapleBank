<template lang="pug">
  div
    slot(v-if="show")
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  mounted() {
    if (this.$store.getters['auth/status']) {
      this.show = true
    } else {
      this.$router.push('/')
    }
  }
}
</script>
