import 'firebase/firestore'
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const transactionRef = firebase.firestore().collection('transaction')

export const state = () => ({
  transaction: []
})

export const actions = {
  bindTransaction: firestoreAction(async ({ bindFirestoreRef }) => {
    await bindFirestoreRef(
      'transaction',
      transactionRef.orderBy('date', 'desc').limit(5)
    )
  })
}

export const getters = {
  transaction: (state) => state.transaction,
  transactionRef: () => transactionRef
}
