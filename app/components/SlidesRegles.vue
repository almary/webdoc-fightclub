<template>
  <div class="wrapper wrapper--themes">
    <div style="position: absolute">{{ show }}</div>
    <div class="slide slide--title">
      <transition name="fade">
        <h1 v-if="show == 0 || show == 1">Les Règles</h1>
      </transition>
      <transition name="fade">
        <h2 v-if="show == 1">
          Le besoin de s’échapper par le chaos pour se sentir vivre
        </h2>
      </transition>
    </div>
    <div class="slide slide--intro" v-if="show == 2">
      <div class="intro__background"></div>
      <div class="intro__content">
        <div class="intro__title subtitle">
          La société de consommation
        </div>
        <div class="intro__details details">
          Our society is completely monopolized by a culture of consumerism and
          an obsession with commodities.
        </div>
      </div>
    </div>
    <div class="slide slide--bar" v-if="show == 3">
      <video
        class="bar__video"
        src="../assets/vids/bar.mp4"
        autoplay
        ref="barVideo"
      ></video>
      <button class="sound" v-on:click="mute">
        sound
      </button>
    </div>
    <div class="slide slide--consommations" v-if="show == 4">
      <div class="consommation__title subtitle">
        La société de consommation
      </div>
      <div class="consommation__content details">
        <div class="consommation__content--background"></div>
        <div class="consommation__content--wrapper">
          <div class="content__wrapper--text">
            <div>
              Le narrateur n’est personne, il n’a pas de passion autre que sa
              consommation.
            </div>
            <div class="wrapper__bold">Il vit sans but.</div>
            <div>
              Il est tellement absorbé par la possession d’objets qu’il se
              définit par ses possessions matériels:
            </div>
          </div>
          <img
            src="../assets/img/consommation-scriptFirst.png"
            alt="image du script"
          />
        </div>
      </div>
      <img
        src="../assets/img/consommation-book.png"
        alt="image du livre"
        class="consommation__book"
      />
    </div>
  </div>
</template>

<!-- <transition name="rectangle">
  <div class="rectangle" v-if="show == 1"></div>
</transition> -->

<script>
  export default {
    props: ["show"],

    data() {
      return {};
    },

    methods: {
      mute: function() {
        if (this.$refs.barVideo.muted) {
          this.$refs.barVideo.muted = false;
        } else {
          this.$refs.barVideo.muted = true;
        }
      },

      afterEnd: function() {
        this.$router.push({ path: "Chaos" });
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

  .intro__background {
    background-image: url("../assets/img/consommation-background.png");
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .intro__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro__details {
    margin-top: 15px;
  }

  .bar__video {
    height: 100vh;
    width: 100vw;
  }

  .consommation__title {
    position: absolute;
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 10vh;
  }

  .consommation__content {
    display: flex;
    flex-direction: row;
    width: 90vw;
    height: 100vh;
    align-items: flex-end;
  }

  .consommation__content--background {
    width: 45vw;
    height: 85vh;
    background-image: url("../assets/img/bar-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(11vh);
  }

  .consommation__content--wrapper {
    margin-left: 50px;
    height: 50vh;
    width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform: translateY(-7vh);
  }

  .content__wrapper--text {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .wrapper__bold {
    font-weight: bold;
  }

  .consommation__book {
    position: absolute;
    right: -300px;
    bottom: 0;
    transition: transform 0.3s;
  }

  .consommation__book:hover {
    transform: translateX(-300px);
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

  /* @keyframes bobine {
  0% {
  }

  30% {
    transform: translateY(50px);
  }

  50% {
    transform: translateY(40px);
  }

  60% {
    transform: translateY(300px);
  }

  70% {
    transform: translateY(100px);
  }

  80% {
    transform: translateY(400px);
  } */

  /* } */
</style>
