import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "Your apiKey",
  authDomain: "netflix-43ad0.firebaseapp.com",
  projectId: "netflix-43ad0",
  storageBucket: "netflix-43ad0.firebasestorage.app",
  messagingSenderId: "188718253255",
  appId: "1:188718253255:web:a415af0260cfcc3959aae2",
  measurementId: "G-ZZQP9Y96FZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code)
  }
};

const login = async (email,password) =>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error);
    toast.error(error.code)
  }
}
const logout = async () =>{
  signOut(auth)
}

export {auth, db,login,logout,signUp}