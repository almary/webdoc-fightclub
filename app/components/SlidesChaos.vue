E<template>
  <div class="wrapper wrapper--themes">
    <div style="position: absolute">{{ show }}</div>
    <div class="slide slide--title">
      <transition name="fade">
        <h1 v-if="show == 0 || show == 1">Le Chaos</h1>
      </transition>
      <transition name="fade">
        <h2 v-if="show == 1">
          Le besoin de s’échapper par le chaos pour se sentir vivre
        </h2>
      </transition>
    </div>
    <div class="slide slide--intro" v-if="show == 2">
      <video src=""></video>
    </div>
    <div class="slide slide--rupture" v-if="show == 3">
      <div class="rupture__title subtitle">Rupture sociale</div>
      <div class="rupture__wrapper">
        <div class="rupture__content details">
          <div>
            Seule la désolation de la solitude et l'abscence totale de tout ce
            qui rendrait le narrateur vivant pourrait prédisposer un homme à
            désirer l'excitation et l'acceptation social non obstant des
            conséquences à long terme.
          </div>
          <div>
            Comme décrit dans le film, la solitude s'accompagne d'une
            réinvention incessante de soi-même, une transformation d'une
            existence morne à excitante, de moral à immoral, et de mauviette à
            "vrai homme".
          </div>
        </div>
        <div class="rupture__polaroid">
          <img
            class="rupture__polaroid--1"
            src="../assets/img/rupture-1.png"
            alt="polaroid"
          />
          <img
            class="rupture__polaroid--2"
            src="../assets/img/rupture-2.png"
            alt="polaroid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["show"],

    data() {
      return {};
    },

    methods: {
      increment: function() {
        this.$emit("increment");
      }
    }
  };
</script>

<style scoped>
  .noBackground {
    background: none;
  }

  h2 {
    position: absolute;
    transform: translateY(50px);
  }

  .firstPlan {
    z-index: 1;
  }

  .subtitle {
    font-family: "Univers Next Pro Ext", "sans-serif";
    font-weight: bold;
    font-size: 44px;
  }

  .details {
    font-size: 22px;
    font-weight: 100;
    line-height: 120%;
  }

  .slide--title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slide--rupture {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rupture__title {
    position: absolute;
    top: 7vh;
  }

  .rupture__wrapper {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .rupture__content {
    width: 530px;
    display: flex;
    flex-direction: column;
    height: 260px;
    justify-content: space-between;
  }

  .rupture__polaroid {
    width: 30vw;
  }

  .rupture__polaroid--1,
  .rupture__polaroid--2 {
    height: auto;
    width: 30vw;
  }

  .rupture__polaroid--1 {
    animation: polaroid 7s infinite alternate ease-in-out;
  }

  .rupture__polaroid--2 {
    animation: polaroid 7s infinite alternate-reverse ease-in-out;
  }

  /* ANIMS SCOPED */

  .text-enter-active,
  .text-leave-active {
    transition: all 0.5s;
  }
  .text-enter,
  .text-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .bobine-enter-active {
    transition: all 1s;
  }
  .bobine-leave-active {
    transition: all 1s;
  }
  .bobine-enter {
    transform: translateY(200vh);
  }
  .bobine-leave-to {
    transform: translateY(-200vh);
  }

  @keyframes bobine {
    0% {
      transform: none;
    }

    97% {
      transform: translate(-700px);
    }

    100% {
      transform: none;
    }
  }

  @keyframes polaroid {
    0% {
      transform: none;
    }

    100% {
      transform: translateY(-20px);
    }
  }
</style>
