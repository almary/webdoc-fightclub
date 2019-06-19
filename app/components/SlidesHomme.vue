<template>
  <div class="wrapper">
    <div id="demo">
      <div>show : {{ show }}</div>

      <div class="wrapper">
        <transition name="fade">
          <div v-if="show == 0">okay</div>
        </transition>
        <transition name="fade">
          <div v-if="show == 0">test</div>
        </transition>
      </div>
      <transition name="fade">
        <div v-if="show == 1">2</div>
      </transition>
      <transition name="fade">
        <div v-if="show == 2">3</div>
      </transition>
      <transition name="fade">
        <div v-if="show == 3">4</div>
      </transition>
      <transition name="fade">
        <div v-if="show == 4">5</div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["show"],
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
