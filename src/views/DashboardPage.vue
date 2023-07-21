<template>
  <div class="container mt-5">
    <h1 v-if="user">Hello, {{ user.displayName }}!</h1>
  </div>
</template>

<script setup>
import { useCurrentUser } from "vuefire";

const user = useCurrentUser();
</script>
