<template>
  <div class="wrapper">
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
        duration: 500,
        show: 0,
        totalSlides: 10,
        percentage: 0
      };
    },

    methods: {
      scroll: function(e) {
        // scroll down
        if (e.deltaY > 50) {
          this.down();
        }

        // scroll up
        if (e.deltaY < -50) {
          this.up();
        }
      },

      scrollFirefox: function(e) {
        var y = e.detail;
        if (e.detail > 2) {
          this.down();
        }
        if (e.detail < -2) {
          this.up();
        }
      },

      down: function() {
        //max : next theme
        if (this.show >= this.totalSlides) {
          this.$router.push({ path: "../Regles" });
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
      }
    },

    created() {
      setTimeout(() => {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.addEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
      }, 500);
    },
    destroyed() {
      window.removeEventListener("wheel", this.scroll);
      window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
        passive: true
      });
    },

    components: {
      SlidesChaos,
      Nav
    }
  };
</script>
