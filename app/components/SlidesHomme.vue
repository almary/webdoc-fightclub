<template>
  <div class="wrapper">
    <div id="demo">

      <div class="wrapper">
        <transition name="bounce">
          <div v-if="show == 1">okay</div>
        </transition>
        <transition name="bounce">
          <div v-if="show == 1">test</div>
        </transition>
      </div>
      <transition name="fade">
        <div v-if="show == 2">2</div>
      </transition>
      <div v-if="show == 3">3</div>
      <div v-if="show == 4">4</div>
      <div v-if="show == 5">5</div>
    </div>
  </div>
</template>

<script>
  export default {
		props: ['show']
	}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
