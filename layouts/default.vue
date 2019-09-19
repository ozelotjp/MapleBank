<template lang="pug">
  v-app
    v-app-bar(app)
      v-toolbar-title まるっち銀行
      v-spacer
      v-toolbar-items
        v-btn(text to="/view") view
        v-btn(text to="/form") form
        v-btn(text to="/todo") todo
        //- v-btn(icon href="https://drive.google.com/open?id=1WetpwPGJIOTu3jmhBAzbglZALZO4Rcl1prqaYOtmzRc" target="_blank")
        //-   v-icon mdi-google-spreadsheet
        //- v-btn(icon href="https://drive.google.com/open?id=1gtzqRI5qe09g1KgjtyIqBmhrRS-CAUoELAzY24XnLQk" target="_blank")
        //-   v-icon mdi-view-list
    v-content
      nuxt
</template>
