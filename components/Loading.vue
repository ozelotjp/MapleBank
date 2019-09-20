<template lang="pug">
  v-container.fill-height.text-center(v-else)
    v-row
      v-col(cols="12")
        v-progress-circular(indeterminate size="64")
      v-col(cols="12")
        | {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: 'しばらくお待ち下さい'
    }
  }
}
</script>
