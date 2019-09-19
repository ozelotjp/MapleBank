import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD9wj5FBVFy0gDqg8sfbZYiYPiyPP5FQno',
  authDomain: 'maplebank-773b8.firebaseapp.com',
  databaseURL: 'https://maplebank-773b8.firebaseio.com',
  projectId: 'maplebank-773b8',
  storageBucket: 'maplebank-773b8.appspot.com',
  messagingSenderId: '720900572803',
  appId: '1:720900572803:web:7998fe14e68d12bcd2bdb6'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
