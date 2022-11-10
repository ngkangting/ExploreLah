import { defineStore } from "pinia";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import db from "../firebaseConfig.js";


import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn(state) {
      return !(state.user === undefined || state.user === null);
    },
    getUid(state){
      return state.user.uid;
    },

  },
  actions: {
    async fetchUser() {
      const auth = getAuth();

      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        }
      });
    },
    async loginWithEmail(email, password) {
      const auth = getAuth();

      let isSuccess = false;

      await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          this.user = response.user;
          this.$router.push("/");
          isSuccess = true;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              throw new Error("User not found!");
            case "auth/wrong-password":
              throw new Error("Wrong Password!");
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });

      return isSuccess;
    },
    async loginWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      let isSuccess = false;

      await signInWithPopup(auth, provider)
        .then((response) => {
          this.user = response.user;
          this.$router.push("/");
          isSuccess = true;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              throw new Error("User not found!");
            case "auth/wrong-password":
              throw new Error("Wrong Password!");
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });

      return isSuccess;
    },
    async registerUser(email, password) {
      const auth = getAuth();

      let isSuccess = false;

      await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          isSuccess = true;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              throw new Error("Email address is already in use!");
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });

      return isSuccess;
    },
    async registerWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      let isSuccess = false;

      await signInWithPopup(auth, provider)
        .then((response) => {
          isSuccess = true;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              throw new Error("User not found!");
            case "auth/wrong-password":
              throw new Error("Wrong Password!");
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });

      return isSuccess;
    },
    async resetPassword(email) {
      const auth = getAuth();

      let isSuccess = false;

      await sendPasswordResetEmail(auth, email)
        .then((response) => {
          isSuccess = true;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              throw new Error("User not found!");
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });

      return isSuccess;
    },
    async logoutUser() {
      const auth = getAuth();

      let isSuccess = false;

      await signOut(auth)
        .then(() => {
          this.user = null;
          this.$router.go(0);
        })
        .catch((error) => {
          switch (error.code) {
            default:
              throw new Error("Oops! Something went wrong...");
          }
        });
      return isSuccess;
    },

  },
});
