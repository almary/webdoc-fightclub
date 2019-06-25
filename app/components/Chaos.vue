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
          //max : next theme
          if (this.show >= this.totalSlides) {
            this.$router.push({ path: "Chaos" });
            return;
          }

          //detect scroll (-50 : sensitivity)
          console.log("scrolling down regles");
          this.next();
          this.percentage = (Math.ceil(this.show) / 10) * 100;
        }

        // scroll up
        if (e.deltaY < -50) {
          // min
          if (this.show <= 0) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling up regles");
          this.prev();
          this.percentage = (Math.floor(this.show) / 10) * 100;
        }
      },

      scrollFirefox: function(e) {
        var y = e.detail;
        if (e.detail > 2) {
          //max : next theme
          if (this.show >= this.totalSlides) {
            this.$router.push({ path: "Chaos" });
            return;
          }

          //detect scroll (-50 : sensitivity)
          console.log("scrolling down regles");
          this.next();
          this.percentage = (Math.ceil(this.show) / 10) * 100;
        }
        if (e.detail < -2) {
          // min
          if (this.show <= 0) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling up regles");
          this.prev();
          this.percentage = (Math.floor(this.show) / 10) * 100;
        }
      },

      next: function() {
        this.removeScrollListener();

        //if this.show no animation
        if (this.show == 0 || this.show == 2) {
          this.show++;
          setTimeout(() => {
            this.addScrollListener();
          }, this.duration * 2);
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
