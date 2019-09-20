import { firestoreAction } from 'vuexfire'
import firestore from '~/plugins/firestore'

const transactionsRef = firestore.collection('transactions')

export const state = () => ({
  transactions: null
})

export const actions = {
  bindTransactions: firestoreAction(async ({ bindFirestoreRef }, limit) => {
    await bindFirestoreRef(
      'transactions',
      limit
        ? transactionsRef.orderBy('date', 'desc').limit(limit)
        : transactionsRef.orderBy('date', 'desc')
    )
  })
}

export const getters = {
  transactions: (state) => state.transactions,
  transactionsRef: () => transactionsRef
}
