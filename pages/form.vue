<template lang="pug">
  v-content
    v-container
      v-row
        v-col(cols="12")
          v-alert(dark dense) 支払ボタン
          v-btn.mr-2.mb-2(@click="select('クロワッサン', -183), dialog = true") クロワッサン
        v-col(cols="12")
          v-alert(dark dense) 入金ボタン
          v-btn.mr-2.mb-2(v-for="item in payment" :key="item.id" @click="select(item.text, item.price), dialog = true") {{ item.text }}
          br
          v-btn.mr-2.mb-2(v-for="item in receipt" :key="item.id" @click="select('入金', item), dialog = true") {{ item }}円
        v-col(cols="12")
          v-alert(dark dense) その他
          v-btn(@click="select('', 0), dialog = true") 手動で入力

    v-dialog(v-model="dialog")
      v-card
        v-card-title 登録フォーム
        v-card-text.pb-0
          v-container
            v-row(grid)
              v-col(cols="12" sm="6")
                v-text-field(label="内容" v-model="title")
              v-col(cols="12" sm="6")
                v-text-field(label="価格" v-model="price" type="number")
                  div(slot="append") 円
        v-card-actions
          v-container
            v-row(grid)
              v-col
                v-btn(block @click="dialog = false") キャンセル
              v-col
                v-btn(block color="primary" @click="dialog = false, submit()") 登録
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
import firestore from '~/plugins/firestore'

export default {
  data: () => ({
    title: '',
    price: 0,
    dialog: false,
    payment: [
      { text: '三ツ矢サイダー', price: 51 },
      { text: 'コーラ', price: 64 },
      { text: 'ライフガード', price: 49 }
    ],
    receipt: [1000, 2000, 3000, 4000, 5000]
  }),
  computed: {
    ...mapGetters({
      transactionsRef: 'transactions/transactionsRef',
      bankRef: 'bank/bankRef'
    })
  },
  fetch({ store, redirect }) {
    if (!store.getters['auth/status']) {
      return redirect('/')
    }
  },
  methods: {
    select(title, price) {
      this.title = title
      this.price = price
    },
    submit() {
      const title = this.title
      const price = parseInt(this.price)
      firestore
        .runTransaction((transaction) => {
          return transaction.get(this.bankRef).then((bank) => {
            const newPoint = bank.data().point + price
            transaction.update(this.bankRef, { point: newPoint })
          })
        })
        .then(() => {
          this.transactionsRef.add({
            title,
            price,
            date: firebase.firestore.FieldValue.serverTimestamp()
          })
          this.$swal({
            type: 'success',
            title: 'Success',
            timer: 1500,
            showConfirmButton: false
          })
        })
        .catch((error) => {
          this.$swal({
            type: 'error',
            title: 'Error',
            text: error
          })
        })
    }
  }
}
</script>
