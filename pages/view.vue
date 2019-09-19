<template lang="pug">
  MemberOnly
    v-container
      v-alert(type="info") 現在の残高は 0円です
      v-simple-table
        template(v-slot:default)
          thead
            tr
              th 日付
              th 内容
              th 値
          tbody
            tr(v-for="(item, index) in transaction" :key="index")
              td {{ getFormatedDate(item.date) }}
              td {{ item.title }}
              td {{ item.price }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      transaction: 'transaction/transaction'
    })
  },
  fetch({ store, params }) {
    if (store.getters['auth/status']) {
      store.dispatch('transaction/bindTransaction')
    }
  },
  methods: {
    getFormatedDate(date) {
      return date.toDate()
    }
  }
}
</script>
