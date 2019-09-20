<template lang="pug">
  v-app.container
    v-app-bar(app)
      v-toolbar-title まるっち銀行
      v-spacer
      v-toolbar-items
        v-btn(icon to="/view")
          v-icon mdi-view-list
        v-btn(text to="/form")
          v-icon mdi-file-document-box-plus
    nuxt
</template>
