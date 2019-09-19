<template lang="pug">
  v-container
    v-card.mb-2(v-for="(item, index) in todo" :key="index")
      v-card-text {{ item }}
</template>

<script>
export default {
  data: () => ({
    todo: ['現在の残高を表示させる', 'formで登録したときに残高を変更する']
  })
}
</script>
