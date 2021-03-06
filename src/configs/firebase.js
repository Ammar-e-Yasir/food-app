import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore,orderBy, doc, setDoc, getDoc,deleteDoc, addDoc, collection, getDocs, query,updateDoc,onSnapshot,where } from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

// import { doc, onSnapshot } from "firebase/firestore";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBeFJSVMpL4O0EHVf4rwfGoXxSQHZlDB5Q",
    authDomain: "hackathon-batch-7.firebaseapp.com",
    projectId: "hackathon-batch-7",
    storageBucket: "hackathon-batch-7.appspot.com",
    messagingSenderId: "667660954889",
    appId: "1:667660954889:web:34a50ecca2a0be47fd77d8",
    measurementId: "G-G80G2CH3GM"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    signOut,
    updateDoc,
    onSnapshot,
getFirestore,
orderBy,
storage,
ref,
uploadBytes,
getDownloadURL,
deleteDoc,


};
