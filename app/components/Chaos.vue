<template>
  <div class="wrapper">
    <div class="mobile" v-if="mobile == 1">
      <div class="mobile__title">Fight Club</div>
      <div class="mobile__description">
        Ce site est optimisé pour une navigation sur ordinateur, pour le
        découvrir veuillez changer d'appareil.
      </div>
    </div>
    <audio src="../assets/music/chaos.mp3" autoplay loop ref="audio"></audio>
    <div class="audio__wrapper">
      musique
      <button
        class="audio audio--true"
        v-on:click="audioButton"
        v-if="audio == true"
      ></button>
      <button
        class="audio audio--false"
        v-on:click="audioButton"
        v-if="audio == false"
      ></button>
    </div>

    <SlidesChaos :show="show" @increment="incrementChild"></SlidesChaos>
    <Nav :show="show" :percentage="percentage"></Nav>
  </div>
</template>

<script>
  import SlidesChaos from "./SlidesChaos.vue";
  import Nav from "./Nav.vue";

  export default {
    name: "Homme",
    data() {
      return {
        audio: true,
        mobile: 0,
        duration: 500,
        show: 0,
        totalSlides: 10,
        percentage: 0
      };
    },

    methods: {
      audioButton: function() {
        if (this.audio) {
          this.$refs.audio.pause();
          this.audio = false;
        } else {
          this.$refs.audio.play();
          this.audio = true;
        }
      },

      pauseAudio: function() {
        // pause audio for specific slides
        if (this.show == 9) {
          this.$refs.audio.volume = 0;
        } else {
          this.$refs.audio.volume = 1;
        }
      },

      scroll: function(e) {
        // scroll down
        if (e.deltaY > 50) {
          this.down();
        }

        // scroll up
        if (e.deltaY < -50) {
          this.up();
        }

        setTimeout(() => {
          this.pauseAudio();
        }, this.duration);
      },

      scrollFirefox: function(e) {
        var y = e.detail;
        if (e.detail > 2) {
          this.down();
        }
        if (e.detail < -2) {
          this.up();
        }

        setTimeout(() => {
          this.pauseAudio();
        }, this.duration);
      },

      down: function() {
        //max : next theme
        if (this.show >= this.totalSlides) {
          return;
        }

        //detect scroll (-50 : sensitivity)
        console.log("scrolling down chaos");
        this.next();
        setTimeout(() => {
          parseInt(this.show);
          this.updateRoute();
        }, this.duration);
        this.percentage = (Math.ceil(this.show) / this.totalSlides) * 100;
      },

      up: function() {
        // min
        if (this.show <= 0) {
          this.$router.push({ path: "../Regles/10" });
          return;
        }
        //detect scroll (-50 : sensitivity)
        console.log("scrolling up chaos");
        this.prev();
        setTimeout(() => {
          parseInt(this.show);
          this.updateRoute();
        }, this.duration);
        this.percentage = (Math.floor(this.show) / this.totalSlides) * 100;
      },

      next: function() {
        this.removeScrollListener();
        //if this.show no animation
        if (this.show == 0) {
          this.show++;
          setTimeout(() => {
            this.addScrollListener();
          }, this.duration);

          return;
        }

        //reset show to trigger leaving animation
        this.show = this.show + 0.5;

        //timeout to delay animation
        setTimeout(() => {
          this.show = this.show + 0.5;
          setTimeout(() => {
            this.addScrollListener();
          }, this.duration);
        }, this.duration);
      },

      prev: function() {
        this.removeScrollListener();

        //reset show to trigger leaving animation
        this.show = this.show - 0.5;

        //timeout to delay animation
        setTimeout(() => {
          this.show = this.show - 0.5;
          setTimeout(() => {
            this.addScrollListener();
          }, this.duration);
        }, this.duration);
      },

      updateRoute: function() {
        if (this.$route.params.id == undefined) {
          this.$router.push({ path: `/Chaos/1` });
          return;
        }
        //update show with url
        this.$router.push({ path: `/Chaos/${this.show}` });
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
        window.removeEventListener("wheel", this.scroll);
        window.removeEventListener("DOMMouseScroll", this.scrollFirefox);
      },

      incrementChild: function() {
        this.next();
      },

      mobileFunction: function() {
        console.log("resize");
        if (window.innerWidth < 1100 || window.innerHeight < 650) {
          this.mobile = 1;
        } else {
          this.mobile = 0;
        }
      }
    },

    created() {
      this.mobileFunction();
      window.addEventListener("resize", this.mobileFunction);

      setTimeout(() => {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.addEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
      }, 500);

      if (this.$route.params.id) {
        this.show = parseInt(this.$route.params.id);
      }
    },
    destroyed() {
      window.removeEventListener("wheel", this.scroll);
      window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
        passive: true
      });

      if (this.$route.params.id) {
        this.show = parseInt(this.$route.params.id);
      }

      window.removeEventListener("resize", this.mobileFunction);
    },

    components: {
      SlidesChaos,
      Nav
    }
  };
</script>
