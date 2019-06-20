<template>
  <div class="wrapper wrapper--themes">
      <div style="position: absolute">{{ show }}</div>
    <div class="slide slide--title">
      <transition name="fade">
        <h1 v-if="show == 0">L'Homme</h1>
      </transition>
    </div>
    <div class="slide slide--title">
      <transition name="fade">
        <h1 v-if="show == 1">L'Homme</h1>
      </transition>
      <transition name="fade">
        <h2 v-if="show == 1">Un homme perdu dans une société monotone</h2>
      </transition>
    </div>
    <div class="slide slide--intro">
      <transition name="fade">
        <div class="intro" v-if="show == 2">Fight Club dresse le portrait de la fin d'un siècle qui agonise, par le biais d'un narrateur désabusé.</div>
      </transition>
    </div>
    <div class="slide slide--narrator">
      <transition name="fade">
        <img preload class="narrator--pic" v-if="show == 3" src="../assets/img/bobine.png" alt="image illustration edward norton">
      </transition>
        <div class="narrator--textwrapper">
          <transition name="fade">
            <div class="narrator--details" v-if="show == 3">Le narrateur : un cadre moyen, célibataire, sans aucune passion et qui souffre d'insomnie.</div>
          </transition>
          <transition name="fade">
            <div class="narrator--details" v-if="show == 3">Prédisposé à vouloir changer.</div>
          </transition>
       </div>
    </div>
    <div class="slide slide--monotone">
      <div class="monotone__background">
        <transition name="fade">
          <img src="../assets/img/mosaique.png" alt="mosaique ambiance monotone" v-if="show == 4">
        </transition>
      </div>
      <div class="monotone__content">
        <div class="content__title">
          <div class="content__title--first" v-if="show == 4">
            Un environnement
          </div>
          <div class="content__title--second" v-if="show == 4">
            monotone
          </div>
        </div>
        <div class="content__details">
          <div class="content__details--first" v-if="show == 4">
              Son cadre de vie est baigné dans des tons ternes qui font échos à la platitude de son quotidien.
          </div>
          <div class="content__details--second" v-if="show == 4">
              Un quotidien sans passion, voué à la lassitude.
          </div>
        </div>
        <div class="content__book">
          <img src="../assets/img/book.png" alt="image d'extrait du livre" v-if="show == 4">
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <transition name="rectangle">
  <div class="rectangle" v-if="show == 1"></div>
</transition> -->

<script>
  export default {
    props: ["show"]
  };
</script>

<style scoped>
  .slide--title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slide--intro {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .intro {
    width: 473px;
    font-size: 31px;
    text-align: center;
  }

  .slide--narrator {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    line-height: 200%;
  }

  .narrator--pic {
    width: 40vw;
  }

  .narrator--textwrapper {
    display: flex;
    flex-direction: column;
    height: 190px;
    justify-content: space-between;
    margin-right: 5vw;
  }

  .narrator--details {
    font-size: 26px;
    width: 338px;
    text-align: center;
  }

  .slide--monotone {
    display: flex;
    justify-content: center;
  }

  .monotone__background {
    /* position: absolute; */
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .monotone__content {
    position: absolute;
    bottom: -370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 390px;
  }

  .content__title, .content__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 230px;
  }

  .content__details {
    justify-content: space-evenly;
    font-size: 22px;
    font-weight: 100;
    line-height: 130%;
  }

  .content__title--first, .content__title--second {
    font-family: 'Univers Next Pro Ext', 'sans-serif';
    font-weight: bold;
    font-size: 24px;
  }

  .content__title--second {
    font-size: 44px;
  }

  .content__book {
    transform: translateY(30px);
    transition: transform 0.5s;
  }

  .content__book:hover {
    transform: translateY(-200px);
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
