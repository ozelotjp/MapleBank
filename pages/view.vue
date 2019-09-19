<template lang="pug">
  MemberOnly
    v-container
      v-alert(type="info") 現在の残高は 0円 です
      v-alert(type="error") 現在の残高は 0円 です
      v-data-table(:headers="headers" :items="getFormatedTransaction" hide-default-footer)
        template(v-slot:no-data)
          div データを読込中です
        template(v-slot:footer v-if="showAllBtn")
          v-container
            v-btn.caption(text @click="showAll()") 全件表示させる場合はここをクリック
</template>

<script>
import { mapGetters } from 'vuex'

function getAgo(date) {
  const diff = new Date().getTime() - date.getTime()
  const d = new Date(diff)

  if (d.getUTCFullYear() - 1970) {
    return d.getUTCFullYear() - 1970 + '年前'
  } else if (d.getUTCMonth()) {
    return d.getUTCMonth() + 'ヶ月前'
  } else if (d.getUTCDate() - 1) {
    return d.getUTCDate() - 1 + '日前'
  } else if (d.getUTCHours()) {
    return d.getUTCHours() + '時間前'
  } else if (d.getUTCMinutes()) {
    return d.getUTCMinutes() + '分前'
  } else {
    return d.getUTCSeconds() + '秒前'
  }
}

export default {
  data: () => ({
    headers: [
      { text: '日付', value: 'date' },
      { text: '内容', value: 'title' },
      { text: '価格', value: 'price' }
    ],
    showAllBtn: true
  }),
  computed: {
    ...mapGetters({
      transaction: 'transaction/transaction'
    }),
    getFormatedTransaction() {
      const transaction = []
      this.transaction.forEach((element) => {
        const date = element.date.toDate()
        const y = date.getFullYear()
        const m = ('0' + date.getMonth()).slice(-2)
        const d = ('0' + date.getDate()).slice(-2)
        const h = ('0' + date.getHours()).slice(-2)
        const i = ('0' + date.getMinutes()).slice(-2)
        transaction.push({
          date: `${y}-${m}-${d} ${h}:${i} (${getAgo(date)})`,
          title: element.title,
          price: element.price
        })
      })
      return transaction
    }
  },
  fetch({ store, params }) {
    if (store.getters['auth/status']) {
      store.dispatch('transaction/bindTransaction', 5)
    }
  },
  methods: {
    showAll() {
      this.$store.dispatch('transaction/bindTransaction', null)
      this.showAllBtn = false
    }
  }
}
</script>
