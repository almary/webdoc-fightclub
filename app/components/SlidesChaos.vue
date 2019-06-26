E<template>
  <div class="wrapper wrapper--themes">
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
    <transition name="fade">
      <div class="slide slide--intro" v-if="show == 2">
        <video
          class="intro__video"
          src="../assets/vids/giveup.mp4"
          autoplay
          ref="introVideo"
          @ended="increment"
        ></video>
        <button class="sound" v-on:click="muteIntro">
          sound
        </button>
        <button class="play-pause" v-if="show == 2" v-on:click="play">
          play / pause
        </button>
      </div>
    </transition>
    <transition name="fade">
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
    </transition>
    <transition name="fade">
      <div
        class="slide slide--vivre"
        v-if="show == 4"
        :class="{firstPlan: show == 4}"
      >
        <div class="vivre__title subtitle">Se sentir vivre</div>
        <img
          class="vivre__script"
          src="../assets/img/vivre-script.png"
          alt="script"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="slide slide--crash" v-if="show == 5">
        <video
          class="crash__video"
          src="../assets/vids/crash.mp4"
          autoplay
          @ended="increment"
          ref="crashVideo"
        ></video>
        <button class="sound" v-on:click="muteCrash">
          sound
        </button>
        <button class="play-pause" v-if="show == 5" v-on:click="play">
          play / pause
        </button>
      </div>
    </transition>
    <transition name="fade">
      <div class="slide slide--mort" v-if="show == 6">
        <div class="mort__title subtitle">
          Le rapport à la mort
        </div>
        <div class="mort__polaroid">
          <img
            class="mort__polaroid--1"
            src="../assets/img/mort-polaroid.png"
            alt="polaroid"
          />
          <img
            class="mort__polaroid--2"
            src="../assets/img/mort-polaroid-back.png"
            alt="dos polaroid"
          />
        </div>
        <div class="mort__content">
          <div class="mort__content--details">
            « Méditer la mort, c’est méditer la liberté ; celui qui sait mourir,
            ne sait plus être esclave »<span class="details">, Sénèque</span>
          </div>
          <img
            class="mort__content--book"
            src="../assets/img/mort-book.png"
            alt="passage du livre"
          />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="slide slide--recul" v-if="show == 7">
        <div class="recul__content ">
          <div class="recul__title subtitle">Prise de recul</div>
          <div class="recul__details details">
            <div>
              C’est à la mort de Bob, que Jack prend conscience qu’il doit
              empêcher Tyler d’aller plus loin. Bob a été utilisé pour le
              projet, comme un moyen.
            </div>
            <div class="recul__content--wrapper">
              <div>
                Se rebeller contre un système qui les abruti ne leur permet pas
                de se libérer; cela les déshumanise.
              </div>
              <div>
                Ce projet finit par déshumaniser les hommes, au lieu de les
                grandir, il nie les individus au profit d’une cause commune.
              </div>
            </div>
          </div>
        </div>
        <img
          class="recul__background"
          src="../assets/img/recul.jpg"
          alt="images du film"
        />
      </div>
    </transition>
    <transition name="fade">
      <div class="slide slide--end" v-if="show == 8">
        <div class="end__background">
          <div class="end__details details">
            À la fin, les buildings tombent, les matériaux n’existent plus, tout
            est calme.
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="slide slide--conclusion" v-if="show == 9">
        <video
          class="conclusion__video"
          src="../assets/vids/conclusion.mp4"
          autoplay
          ref="conclusionVideo"
          @ended="increment"
        ></video>
        <button class="sound" v-on:click="muteConclusion">
          sound
        </button>
        <button class="play-pause" v-if="show == 9" v-on:click="play">
          play / pause
        </button>
      </div>
    </transition>
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
      },

      play: function() {
        console.log(this.$refs.conclusionVideo.paused);
        if (this.$refs.conclusionVideo.paused) {
          this.$refs.conclusionVideo.play()
        } else {
          this.$refs.conclusionVideo.pause()
        }
      },

      muteIntro: function() {
        if (this.$refs.introVideo.muted) {
          this.$refs.introVideo.muted = false;
        } else {
          this.$refs.introVideo.muted = true;
        }
      },

      muteCrash: function() {
        if (this.$refs.crashVideo.muted) {
          this.$refs.crashVideo.muted = false;
        } else {
          this.$refs.crashVideo.muted = true;
        }
      },

      muteConclusion: function() {
        if (this.$refs.conclusionVideo.muted) {
          this.$refs.conclusionVideo.muted = false;
        } else {
          this.$refs.conclusionVideo.muted = true;
        }
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

  .intro__video {
    width: 100vw;
    height: 100vh;
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

  .slide--vivre {
    background-image: url("../assets/img/vivre-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vivre__script {
    position: absolute;
    bottom: -250px;
    transition: all 0.3s;
  }

  .vivre__script:hover {
    transform: translateY(-250px);
  }

  .crash__video {
    width: 100vw;
    height: 100vh;
  }

  .slide--mort {
    margin: 0 auto;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 80vw;
    justify-content: space-around;
    align-items: center;
  }

  .mort__title {
    position: absolute;
    top: 7vh;
  }

  .mort__polaroid {
    position: relative;
    width: 532px;
    height: 514px;
    transform-style: preserve-3d;
  }

  .mort__polaroid:hover .mort__polaroid--1 {
    transform: rotateY(180deg);
  }

  .mort__polaroid:hover .mort__polaroid--2 {
    transform: rotateY(360deg);
  }

  .mort__polaroid--1,
  .mort__polaroid--2 {
    position: absolute;
    transition: all 0.5s;
  }

  .mort__polaroid--1 {
    z-index: 2;
  }

  .mort__polaroid--2 {
    transform: rotateY(180deg);
    z-index: 3;
  }

  .mort__content {
    height: 480px;
    width: 592px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateY(40px);
  }

  .mort__content--details {
    font-size: 27px;
    font-weight: bold;
  }

  .slide--recul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .recul__content {
    width: 466px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .recul__details {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .recul__content--wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
  }

  .slide--end {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .end__background {
    width: 1052px;
    height: 420px;
    background-image: url("../assets/img/end-background.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .end__details {
    width: 303px;
    text-align: center;
  }

  .conclusion__video {
    width: 100vw;
    height: 100vh;
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
