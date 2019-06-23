<template>
  <div class="wrapper">
    <video
      v-if="show == 0"
      src="../assets/vids/intro.mp4"
      autoplay
      muted
      ref="introVid"
      @ended="skip"
    ></video>
    <button class="skip" v-if="show == 0" v-on:click="skip">skip</button>
    <button class="sound" v-if="show == 0" v-on:click="unmute">sound</button>
    <transition name="fade">
      <div class="content" v-if="show == 1">
        <div>
          <transition name="fade">
            <h1 v-if="show == 1" class="title">Fight Club</h1>
          </transition>
          <transition name="fade">
            <h2 v-if="show == 1">
              Comment un environnement monotone modèle une pensée poussant au
              chaos ?
            </h2>
          </transition>
        </div>
        <transition name="fade">
          <div class="instruction" v-if="show == 1">scroll down</div>
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
      skip: function() {
        this.show++;
        console.log(this.show);
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.addEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
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
          //max
          if (this.show >= this.totalSlides) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling down first");
          this.start();
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

  .skip,
  .sound {
    position: absolute;
    bottom: 50px;
  }

  .skip {
    right: 10vw;
  }

  .sound {
    left: 10vw;
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
