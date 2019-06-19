<template>
  <div class="wrapper">
    <div id="demo">
      <div>show : {{ show }}</div>

      <div class="wrapper">
        <transition name="fade">
          <div v-if="show == 0">1</div>
        </transition>
        <transition name="fade">
          <div v-if="show == 0">test</div>
        </transition>
      </div>
      <transition name="rectangle">
        <div class="rectangle" v-if="show == 1"></div>
      </transition>
      <transition name="rectangle2">
        <div class="rectangle rectangle--2" v-if="show == 1"></div>
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
    props: ["show"]
  };
</script>

<style scoped>
  .rectangle {
    background: grey;
    width: 300px;
    height: 600px;
  }

  .rectangle-enter-active,
  .rectangle-leave-active {
    transition: all 1s;
  }
  .rectangle-enter, .rectangle-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(-300px) translateY(1000px);
    opacity: 0;
  }

  .rectangle2-enter-active {
    animation: rectangle2 1s;
  }

  .rectangle2-leave-active {
    animation: rectangle2 1s reverse;
  }

  @keyframes rectangle2 {
    0% {
      transform: translateX(100px);
    }

    10% {
      transform: translateX(100px) translateY(-300px);
    }

    50% {
      transform: translateX(500px) translateY(-100px);
    }

    100% {
      transform: translateX(800px) translateY(-300px);
      /* le 100% c'est de toute façon la remise à son emplacement initial donc il faut rajouter à la fin les animations et placer les éléments en premier */
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
