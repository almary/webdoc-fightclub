<template>
  <div class="big-header">
    <h1>Fight Club</h1>
    <router-link to="/Homme">Homme</router-link>
    <router-link to="/Regles">Regles</router-link>
    <router-link to="/Chaos">Chaos</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Hetic'
    };
  }
};
</script>
