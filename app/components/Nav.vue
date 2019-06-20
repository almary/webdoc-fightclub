<template>
  <div class="wrapper">
    <div class="bar" v-bind:style="styleBar"></div>
    <div class="wrapper--theme">
      <router-link to="/Homme"><div class="homme" v-bind:style="styleTabs" :class="{selectedTab: this.$route.path === '/Homme', otherTabs: this.$route.path !== '/Homme'}">L'Homme</div></router-link>
      <router-link to="/Regles"> <div class="regles" v-bind:style="styleTabs" :class="{selectedTab: this.$route.path === '/Regles', otherTabs: this.$route.path !== '/Regles'}">Les règles</div></router-link>
      <router-link to="/Chaos"><div class="chaos" v-bind:style="styleTabs" :class="{selectedTab: this.$route.path === '/Chaos', otherTabs: this.$route.path !== '/Chaos'}">Le chaos</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["show"],

    computed: {
      styleTabs: function() {
        return {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "33vw",
          height: "50px",
          border: "0 1px 0 1px",
          bordeStyle: "solid",
        };
      },

      styleBar: function() {
        return {
          height: "10px",
          background: "orange",
          width: Math.ceil(this.show) * 10 + "%",
          transition: "all 1.5s ease"
        };
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    position: absolute;
    bottom: 0;
  }

  .wrapper--theme {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .selectedTab {
    background: orange;
  }

  .otherTabs {
    background: darkgrey;
  }
</style>