<template>
  <div class="container mt-5">
    <h1>Welcome to the Vue Firebase Facebook Auth App</h1>
    <button
      @click="loginWithFacebook"
      type="button"
      class="btn btn-primary mt-3"
    >
      Login with Facebook
    </button>
  </div>
</template>

<script>
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useFirebaseAuth } from 'vuefire'
import router from "../router";

export default {
  setup() {
    const auth = useFirebaseAuth();

    const loginWithFacebook = async () => {
      try {
        const provider = new FacebookAuthProvider();
        await signInWithPopup(auth, provider);
        router.push("/dashboard");
      } catch (error) {
        console.error("Facebook login error:", error);
      }
    };

    return {
      loginWithFacebook,
    };
  },
};
</script>
