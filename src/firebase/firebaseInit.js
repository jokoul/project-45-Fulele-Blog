import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8xDqyoMeULA4b4oH2PU6Z4EmFqDbRao",
  authDomain: "fulele-blog-2e7ba.firebaseapp.com",
  projectId: "fulele-blog-2e7ba",
  storageBucket: "fulele-blog-2e7ba.appspot.com",
  messagingSenderId: "1090399045446",
  appId: "1:1090399045446:web:096e5a40d5cc764bedc747",
};

//Initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig)

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore()