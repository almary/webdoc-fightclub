<template>
  <div class="wrapper">
    <h1>Homme</h1>
    <SlidesHomme :show="show"></SlidesHomme>
</template>

<script>
  import SlidesHomme from "./SlidesHomme.vue";

  export default {
    name: "Homme",
    data() {
      return {
        memo: 0,
        show: 1
      };
    },

    methods: {
      scroll: function(e) {
        if (e.deltaY > 50) {
        //detect scroll (-50 : sensitivity)
        console.log("scrolling down");
        window.removeEventListener("wheel", this.scroll);

        //reset show to trigger leaving animation
          this.memo = this.show;
          this.show = 0;

        //timeout to delay animation
        setTimeout(() => {
           this.show = this.memo;
            this.show++;
            window.addEventListener("wheel", this.scroll);
        }, 1000);
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
        }, 1000);
        }
      },
    },

    created () {
      window.addEventListener("wheel", this.scroll);
    },
    destroyed () {
      window.addEventListener("wheel", this.scroll);
    },

    components: {
      SlidesHomme
    }
  };
</script>
