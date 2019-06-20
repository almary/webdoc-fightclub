<template>
  <div class="wrapper" :class="{navClosed: show > 0}">
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
          width: "33.3vw",
          height: "50px",
        };
      },

      styleBar: function() {
        return {
          height: "5px",
          background: "#9F221D",
          width: Math.round(this.show) * 10 + "%",
          transition: "all 1.5s ease"
        };
      }
    }
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

  .selectedTab {
    background: #F0F0F0;
    color: #9F221D;
    font-family: 'Univers Next Pro Ext';
    font-weight: bold;
  }

  .otherTabs {
    background: #111111;
    color: #F3F3F3;
    font-family: 'Univers Next Pro Ext';
    font-weight: normal;
  }
</style>