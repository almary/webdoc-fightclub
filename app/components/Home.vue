<template>
  <div class="wrapper">
    <div class="video">
      <transition name="fade">
        <video
          v-if="show == 1"
          src="../assets/vids/intro.mp4"
          autoplay
          muted
          ref="introVid"
          @ended="afterEnd"
        ></video>
      </transition>
      <transition name="fade">
        <button class="skip" v-if="show == 1" v-on:click="afterEnd">
          skip
        </button>
      </transition>
      <transition name="fade">
        <button class="sound" v-if="show == 1" v-on:click="unmute">
          sound
        </button>
      </transition>
    </div>
    <transition name="fade">
      <div class="content" v-if="show == 0">
        <div>
          <transition name="fade">
            <h1 v-if="show == 0" class="title">Fight Club</h1>
          </transition>
          <transition name="fade">
            <h2 v-if="show == 0">
              Comment un environnement monotone modèle une pensée poussant au
              chaos ?
            </h2>
          </transition>
        </div>
        <transition name="fade">
          <div class="instruction" v-if="show == 0">scroll down</div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: 0
      };
    },

    methods: {
      afterEnd: function() {
        this.$router.push({ path: "Homme" });
      },

      unmute: function() {
        if (this.$refs.introVid.muted) {
          this.$refs.introVid.muted = false;
        } else {
          this.$refs.introVid.muted = true;
        }
      },

      scroll: function(e) {
        // scroll down
        if (e.deltaY > 50) {
          this.removeScrollListener();
          //max
          if (this.show >= 1) {
            this.afterEnd();
            return;
          }
          //detect scroll (-50 : sensitivity)
          this.show++;
          setTimeout(() => {
            this.addScrollListener();
          }, 1000);
        }
      },

      scrollFirefox: function(e) {
        var y = e.detail;
        if (e.detail > 2) {
          // scroll down

          this.removeScrollListener();
          //max
          if (this.show >= 1) {
            console.log("hey");
            this.afterEnd();
            return;
          }
          //detect scroll (-50 : sensitivity)
          this.show++;
          setTimeout(() => {
            this.addScrollListener();
          }, 1000);
        }
      },

      addScrollListener: function() {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.addEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
      },

      removeScrollListener: function() {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.removeEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
      },

      start: function() {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.removeEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
        this.$router.push({ path: "Homme" });
      }
    },

    created() {
      if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
        window.addEventListener("wheel", this.scroll, { passive: true });
      } else {
        window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
          passive: true
        });
      }
    },

    destroyed() {
      if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
        window.addEventListener("wheel", this.scroll, { passive: true });
      } else {
        window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
          passive: true
        });
      }
    }
  };
</script>

<style scoped>
  video {
    height: 100vh;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    background-color: black;
    background-image: url("../assets/img/scratch.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    background-color: black;
    background-image: url("../assets/img/home-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .h2 {
    position: relative;
  }

  .title {
    font-size: 200px;
    height: 200px;
  }

  .instruction {
    position: absolute;
    bottom: 50px;
  }
</style>
