// js/firebase-config.js

// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"; // Using version from previous steps
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// If you plan to use other Firebase services (like Database, Storage, Firestore), import them here:
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your web app's Firebase configuration for "WeConnect" / "ai-connect-2nbpnn"
const firebaseConfig = {
  apiKey: "AIzaSyBdZM_2Dgibm-S9pftZBUqOdGVup9oNhmU", // This key identifies your project to Firebase servers.
  authDomain: "ai-connect-2nbpnn.firebaseapp.com",
  databaseURL: "https://ai-connect-2nbpnn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-connect-2nbpnn",
  storageBucket: "ai-connect-2nbpnn.appspot.com",
  messagingSenderId: "704482029158",
  appId: "1:704482029158:web:ca0bf5088382e102e447a7"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize other Firebase services if you imported them:
// const database = getDatabase(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// Export the initialized services so they can be imported in other scripts (like index.html, signin.html, etc.)
export { app, auth };

// If using other services, export them as well:
// export { app, auth, database, firestore, storage };
