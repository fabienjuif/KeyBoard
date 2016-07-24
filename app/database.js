import firebase from 'firebase'

const config = {
  apiKey: '<API_KEY>',
  authDomain: 'keyboard-16ecd.firebaseapp.com',
  databaseURL: 'https://keyboard-16ecd.firebaseio.com',
  storageBucket: 'keyboard-16ecd.appspot.com',
}

const app = firebase.initializeApp(config)
export default app
