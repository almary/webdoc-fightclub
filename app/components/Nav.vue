<template>
  <div class="wrapper" :class="{navClosed: show > 0, navDetection: show == 4}">
    <div class="bar" v-bind:style="styleBar"></div>
    <div class="wrapper--theme">
      <router-link to="/Homme"
        ><div
          class="homme"
          v-bind:style="styleTabs"
          :class="{selectedTab: routeNameMemo === 'homme' , otherTabs: routeNameMemo !== 'homme'}"
        >
          L'Homme
        </div></router-link
      >
      <router-link to="/Regles">
        <div
          class="regles"
          v-bind:style="styleTabs"
          :class="{selectedTab: routeNameMemo === 'regles' , otherTabs: routeNameMemo !== 'regles'}"
        >
          Les règles
        </div></router-link
      >
      <router-link to="/Chaos"
        ><div
          class="chaos"
          v-bind:style="styleTabs"
          :class="{selectedTab: routeNameMemo === 'chaos' , otherTabs: routeNameMemo !== 'chaos'}"
        >
          Le chaos
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    props: ["show", "percentage"],

    data() {
      return {
        routeNameMemo: "ok"
      };
    },

    methods: {
      removeOldListener: function() {
        if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
          window.removeEventListener("wheel", this.scroll, { passive: true });
        } else {
          window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
            passive: true
          });
        }
      },

      routeName: function() {
        this.routeNameMemo = this.$route.name;
      }
    },

    computed: {
      styleTabs: function() {
        return {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "33.3vw",
          height: "50px"
        };
      },

      styleBar: function() {
        return {
          height: "5px",
          background: "#9F221D",
          width: this.percentage + "%",
          transition: "all 1.5s ease"
        };
      }
    },

    created() {
      this.routeName();
    },
    // destroyed() {
    //   window.removeEventListener("wheel", this.scroll);
    //   window.removeEventListener("DOMMouseScroll", this.scrollFirefox, {
    //     passive: true
    //   });
    // }
  };
</script>

<style scoped>
  .wrapper {
    z-index: 2;
    position: absolute;
    bottom: 0;
    transition: transform 0.5s;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .wrapper--theme {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .navClosed {
    transform: translateY(50px);
  }

  .navClosed:hover {
    transform: none;
  }

  .navDetection {
    height: 70px;
  }

  .selectedTab {
    background: #f0f0f0;
    color: #9f221d;
    font-family: "Univers Next Pro";
    font-weight: bold;
  }

  .otherTabs {
    background: #111111;
    color: #f3f3f3;
    font-family: "Univers Next Pro";
    font-weight: normal;
  }
</style>
