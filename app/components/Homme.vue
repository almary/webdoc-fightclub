<template>
  <div class="wrapper">
    <SlidesHomme :show="show"></SlidesHomme>
    <Nav :show="show" :percentage="percentage"></Nav>
  </div>
</template>

<script>
  import SlidesHomme from "./SlidesHomme.vue";
  import Nav from "./Nav.vue";

  export default {
    name: "Homme",
    data() {
      return {
        duration: 500,
        show: 0,
        totalSlides: 9,
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
        console.log("scrolling down homme");
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
        console.log("scrolling up homme");
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
          this.$router.push({ path: `/Homme/1` });
          return;
        }
        //update show with url
        this.$router.push({ path: `/Homme/${this.show}` });
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

      //update show variable at page launch
      if (this.$route.params.id) {
        this.show = parseInt(this.$route.params.id);
      }
    },

    destroyed() {
      window.removeEventListener("wheel", this.scroll, { passive: true });

      window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
        passive: true
      });

      //update show variable at page launch
      if (this.$route.params.id) {
        this.show = parseInt(this.$route.params.id);
      }
    },

    components: {
      SlidesHomme,
      Nav
    }
  };
</script>
