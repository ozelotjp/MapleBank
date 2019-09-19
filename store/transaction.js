import 'firebase/firestore'
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const transactionRef = firebase.firestore().collection('transaction')

export const state = () => ({
  transaction: []
})

export const actions = {
  bindTransaction: firestoreAction(async ({ bindFirestoreRef }, limit) => {
    await bindFirestoreRef(
      'transaction',
      limit
        ? transactionRef.orderBy('date', 'desc').limit(limit)
        : transactionRef.orderBy('date', 'desc')
    )
  })
}

export const getters = {
  transaction: (state) => state.transaction,
  transactionRef: () => transactionRef
}
