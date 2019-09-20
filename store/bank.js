import { firestoreAction } from 'vuexfire'
import firestore from '~/plugins/firestore'

const bankRef = firestore.collection('bank').doc('maple')

export const state = () => ({
  bank: null
})

export const actions = {
  bindBank: firestoreAction(async ({ bindFirestoreRef }) => {
    await bindFirestoreRef('bank', bankRef)
  })
}

export const getters = {
  bank: (state) => state.bank,
  bankRef: () => bankRef
}
