<template lang="pug">
  v-content
    Loading
</template>

<script>
import 'firebase/auth'
import firebase from '~/plugins/firebase'

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user == null) {
        firebase
          .auth()
          .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      }
      this.$store.dispatch('auth/setAuth', {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      })
      this.$router.push('/view')
    })
  }
}
</script>
