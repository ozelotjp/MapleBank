<template lang="pug">
  v-content
    v-container(v-if="transactions && bank")
      v-alert(:type="bank.point >= 0 ? 'info' : 'error'") 現在の残高は {{ bank.point }}円 です
      v-data-table(:headers="headers" :items="getFormatedTransactions" hide-default-footer disable-sort)
        template(v-slot:no-data)
          div データを読込中です
        template(v-slot:footer v-if="showAllBtn")
          v-container
            v-btn(small @click="showAll()") 全件表示させる場合はここをクリック
    Loading(v-else)
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    headers: [
      { text: '日付', value: 'date' },
      { text: '支払い', value: 'price_m' },
      { text: '預かり', value: 'price_p' },
      { text: '取引内容', value: 'title' }
    ],
    showAllBtn: true,
    load: false
  }),
  computed: {
    ...mapGetters({
      transactions: 'transactions/transactions',
      bank: 'bank/bank'
    }),
    getFormatedTransactions() {
      const transactions = []
      this.transactions.forEach((element) => {
        const date = element.date.toDate()
        const y = date.getFullYear()
        const m = ('0' + date.getMonth()).slice(-2)
        const d = ('0' + date.getDate()).slice(-2)
        const h = ('0' + date.getHours()).slice(-2)
        const i = ('0' + date.getMinutes()).slice(-2)
        const s = ('0' + date.getSeconds()).slice(-2)
        transactions.push({
          date: `${y}-${m}-${d} ${h}:${i}:${s}`,
          price_m: element.price < 0 ? element.price : null,
          price_p: element.price >= 0 ? element.price : null,
          title: element.title
        })
      })
      return transactions
    }
  },
  fetch({ store, redirect }) {
    if (!store.getters['auth/status']) {
      return redirect('/')
    }
    store.dispatch('transactions/bindTransactions', 5)
    store.dispatch('bank/bindBank')
  },
  methods: {
    showAll() {
      this.$store.dispatch('transactions/bindTransactions', null)
      this.showAllBtn = false
    }
  }
}
</script>
