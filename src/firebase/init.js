import firebase from 'firebase'
import firestore from 'firebase/firestore'
import config from '../../.env'

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
