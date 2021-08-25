// import firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyBRk6UkAyOMSvRpOn_XAi7cL7jsgdOk_60',
  authDomain: 'letmeask-ff.firebaseapp.com',
  databaseURL: 'https://letmeask-ff-default-rtdb.firebaseio.com',
  projectId: 'letmeask-ff',
  storageBucket: 'letmeask-ff.appspot.com',
  messagingSenderId: '566389956231',
  appId: '1:566389956231:web:b812fd5be5a3690c10e222'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
