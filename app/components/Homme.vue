<template>
  <div class="wrapper">
    <h1>Homme</h1>
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
          window.removeEventListener("wheel", this.scroll);

          //reset show to trigger leaving animation
          this.show = this.show + 0.5;

          //timeout to delay animation
          setTimeout(() => {
            this.show = this.show + 0.5;
            window.addEventListener("wheel", this.scroll);
          }, this.duration);
        }
        // scroll up
        if (e.deltaY < -50) {
          // min
          if (this.show <= 0) {
            return;
          }
          //detect scroll (-50 : sensitivity)
          console.log("scrolling up");
          window.removeEventListener("wheel", this.scroll);

          //reset show to trigger leaving animation
          this.show = this.show - 0.5;

          //timeout to delay animation
          setTimeout(() => {
            this.show = this.show - 0.5;
            window.addEventListener("wheel", this.scroll);
          }, this.duration);
        }
      }
    },

    created() {
      window.addEventListener("wheel", this.scroll);
    },
    destroyed() {
      window.addEventListener("wheel", this.scroll);
    },

    components: {
      SlidesHomme,
      Nav
    }
  };
</script>
