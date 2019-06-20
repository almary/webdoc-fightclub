<template>
  <div class="wrapper">
    <SlidesHomme :show="show"></SlidesHomme>
    <Nav :show="show"></Nav>
  </div>
</template>

<script>
  import SlidesHomme from "./SlidesHomme.vue";
  import Nav from "./Nav.vue";

  export default {
    name: "Homme",
    data() {
      return {
        duration: 1000,
        show: 0,
        totalSlides: 10
      };
    },

    methods: {
      scroll: function(e) {
        // scroll down
        if (e.deltaY > 50) {
          //max
          if (this.show >= this.totalSlides) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling down");
          this.next();
        }

        // scroll up
        if (e.deltaY < -50) {
          // min
          if (this.show <= 0) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling up");
          this.prev();
        }
      },

      scrollFirefox: function(e) {
        var y = e.detail;
        if (e.detail > 2) {
          this.next();
        }
        if (e.detail < -2) {
          this.prev();
        }
      },

      next: function() {
        this.removeScrollListener();

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
      window.addEventListener("wheel", this.scroll);
      window.addEventListener("DOMMouseScroll", this.scrollFirefox, {
        passive: true
      });
    },

    components: {
      SlidesHomme,
      Nav
    }
  };
</script>
