<template>
  <div :class="{ dark: isDarkMode }">
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <span class="navbar-brand mb-0 h1">Preorder</span>
        <button class="btn btn-primary" @click="toggleTheme">
          Toggle Theme
        </button>
        <button
          class="btn btn-primary"
          @click="handleSignOut"
          v-if="$route.name !== 'login'"
        >
          sign out
        </button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";
import { useFirebaseAuth } from "vuefire";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const isDarkMode = ref(false);
    const auth = useFirebaseAuth();
    const router = useRouter();
    const route = useRoute();

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    const handleSignOut = async () => {
      try {
        await auth.signOut();
        router.push("/");
      } catch (error) {
        //TODO: handle sign out error
      }
    };

    return {
      isDarkMode,
      toggleTheme,
      handleSignOut,
      route,
    };
  },
};
</script>

<style>
/* Define dark mode styles here */
.dark {
  background-color: #222;
  color: #fff;
  min-block-size: 100vh;
}
</style>
