<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        v-alert(dark dense) 支払ボタン
        v-btn.mr-2(v-for="(item, id) in payment" :key="id" @click="select(item.text, item.price), dialog = true") {{ item.text }}
      v-col(cols="12")
        v-alert(dark dense) 入金ボタン
        v-btn.mr-2(@click="select('クロワッサン', -183), dialog = true") クロワッサン
        v-btn.mr-2(v-for="(item, id) in receipt" :key="id" @click="select('入金', item), dialog = true") {{ item }}円

    // dialog
    v-dialog(v-model="dialog")
      v-card
        v-card-title 登録フォーム
        v-card-text.pb-0
            v-row
              v-col(cols="12")
                v-text-field(label="内容" v-model="title")
              v-col(cols="12")
                v-text-field(label="価格" v-model="price")
                  div(slot="append") 円
        v-card-actions
          v-container
            v-row
              v-col
                v-btn(block @click="dialog = false") キャンセル
              v-col
                v-btn(block color="primary" @click="dialog = false, submit()") 確定
</template>

<script>
export default {
  data() {
    return {
      title: '',
      price: 0,
      dialog: false,
      payment: [
        { text: '三ツ矢サイダー', price: 51 },
        { text: 'コーラ', price: 64 },
        { text: 'ライフガード', price: 49 }
      ],
      receipt: [1000, 2000, 3000, 4000, 5000]
    }
  },
  methods: {
    select(title, price) {
      this.title = title
      this.price = price
    },
    submit() {
      const price = this.price
      const title = this.title
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSd1upHJp_E_OnR22TGd_LSXmjUaaGxfyrEKW18uTi7h-g_GHw/formResponse?' +
          // 'about:blank?' +
          `entry.439718942=${title}&entry.741369983=${price}`
      )
    }
  }
}
</script>
