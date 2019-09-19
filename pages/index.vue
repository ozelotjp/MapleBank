<template lang="pug">
  v-container
    v-btn(@click="submit()") submit
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      description: 'テスト'
    }
  },
  methods: {
    submit() {
      const price = this.price
      const description = this.description
      window.open(
        `https://docs.google.com/forms/d/e/1FAIpQLSd1upHJp_E_OnR22TGd_LSXmjUaaGxfyrEKW18uTi7h-g_GHw/formResponse?entry.741369983=${price}&entry.439718942=${description}`
      )
    }
  }
}
</script>
