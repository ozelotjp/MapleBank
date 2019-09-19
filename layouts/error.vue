<template lang="pug">
  v-container
    v-alert(type="error") エラーが発生しました
    v-alert(dark)
      pre {{ error }}
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
