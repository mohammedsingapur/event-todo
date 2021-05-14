import firebase  from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRlonooDLGN7Yi0XxbW3lh2PbLirOoAt4",
    authDomain: "to-do-be4db.firebaseapp.com",
    projectId: "to-do-be4db",
    storageBucket: "to-do-be4db.appspot.com",
    messagingSenderId: "656542540291",
    appId: "1:656542540291:web:580019b2210b52ddfee436",
    measurementId: "G-5PC69WW2PE"
})
export const db =  app.database()
export const auth = app.auth()
export default app


    // apiKey: "AIzaSyDa7oWa6cugTRRzPyNlRRPycQx_ikIzGXk",
    // authDomain: "todo-472dc.firebaseapp.com",
    // projectId: "todo-472dc",
    // storageBucket: "todo-472dc.appspot.com",
    // messagingSenderId: "188684347610",
    // appId: "1:188684347610:web:827827d50f7fe975a55de3",
    // measurementId: "G-FEVE4TWVX9"