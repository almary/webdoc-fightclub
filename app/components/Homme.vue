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
        duration: 500,
        show: 0
      };
    },

    methods: {
      scroll: function(e) {
        if (e.deltaY > 50) {
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
        if (e.deltaY < -50) {
          //detect scroll (-50 : sensitivity)
          console.log("scrolling up");
          window.removeEventListener("wheel", this.scroll);

          //reset show to trigger leaving animation
          this.memo = this.show;
          this.show = 0;

          //timeout to delay animation
          setTimeout(() => {
            this.show = this.memo;
            this.show--;
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
