<template>
  <div class="wrapper wrapper--themes" :class="{noBackground: show == 5}">
    <div style="position: absolute">{{ show }}</div>
    <div class="slide slide--title">
      <transition name="fade">
        <h1 v-if="show == 0 || show == 1">L'Homme</h1>
      </transition>
      <transition name="fade">
        <h2 v-if="show == 1">Un homme perdu dans une société monotone</h2>
      </transition>
    </div>
    <div class="slide slide--intro">
      <transition name="text">
        <div class="intro" v-if="show == 2">
          Fight Club dresse le portrait de la fin d'un siècle qui agonise, par
          le biais d'un narrateur désabusé.
        </div>
      </transition>
    </div>
    <div class="slide slide--narrator">
      <transition name="bobine">
        <img
          preload
          class="narrator--pic"
          v-if="show == 3"
          src="../assets/img/bobine.png"
          alt="image illustration edward norton"
        />
      </transition>
      <div class="narrator--textwrapper">
        <transition name="text">
          <div class="narrator--details" v-if="show == 3">
            Le narrateur : un cadre moyen, célibataire, sans aucune passion et
            qui souffre d'insomnie.
          </div>
        </transition>
        <transition name="text">
          <div class="narrator--details" v-if="show == 3">
            Prédisposé à vouloir changer.
          </div>
        </transition>
      </div>
    </div>
    <div class="slide slide--monotone">
      <div class="monotone__background">
        <transition name="fade">
          <img
            preload
            src="../assets/img/mosaique.png"
            alt="mosaique ambiance monotone"
            v-if="show == 4"
          />
        </transition>
      </div>
      <div class="monotone__content">
        <div class="content__title">
          <transition name="fade">
            <div class="content__title--first" v-if="show == 4">
              Un environnement
            </div>
          </transition>
          <transition name="fade">
            <div class="content__title--second" v-if="show == 4">
              monotone
            </div>
          </transition>
        </div>
        <div class="content__details details">
          <transition name="fade">
            <div class="content__details--first" v-if="show == 4">
              Son cadre de vie est baigné dans des tons ternes qui font échos à
              la platitude de son quotidien.
            </div>
          </transition>
          <transition name="fade">
            <div class="content__details--second" v-if="show == 4">
              Un quotidien sans passion, voué à la lassitude.
            </div>
          </transition>
        </div>
        <!-- add la class pour pouvoir hover au premier plan -->
        <div class="content__book" :class="{firstPlan: show == 4}">
          <transition name="fade">
            <img
              src="../assets/img/book.png"
              alt="image d'extrait du livre"
              v-if="show == 4"
            />
          </transition>
        </div>
      </div>
    </div>
    <div class="slide slide--therapie">
      <video
        v-if="show == 5"
        class="therapie__background"
        src="../assets/vids/intro.mp4"
        autoplay
        muted
        loop
      ></video>
      <div class="therapie__content">
        <transition name="fade">
          <div class="therapie__content--title subtitle" v-if="show == 5">
            Les thérapies de groupe
          </div>
        </transition>
        <transition name="text">
          <div class="therapie__content--details details" v-if="show == 5">
            Le narrateur cherche d’une certaine façon un contact pour le sortir
            de sa vie morose. Il relativise sur sa vie et sa condition.
          </div>
        </transition>
      </div>
      <div class="therapie__image" :class="{firstPlan: show == 5}">
        <transition name="fade">
          <img
            class="therapie__image--image"
            src="../assets/img/therapie-extrait.png"
            alt="extrait du livre"
            v-if="show == 5"
          />
        </transition>
        <img
          v-if="show == 5"
          class="therapie__image--marker"
          src="../assets/img/marker.png"
          alt="fluo sur le texte"
        />
      </div>
    </div>
    <div class="slide slide--masculinite">
      <div class="masculinite__wrapper">
        <transition name="fade">
          <div class="masculinite__title subtitle" v-if="show == 6">
            La masculinité
          </div>
        </transition>
        <transition name="fade">
          <div
            class="masculinite__polaroids"
            :class="{firstPlan: show == 6}"
            v-if="show == 6"
          >
            <img
              src="../assets/img/tyler-polaroid.png"
              alt="polaroid tyler"
              class="masculinite__polaroids--tyler"
            />
            <img
              src="../assets/img/narrator-polaroid.png"
              alt="polaroid narrator"
              class="masculinite__polaroids--narrator"
            />
            <img
              src="../assets/img/bob-polaroid.png"
              alt="polaroid bob"
              class="masculinite__polaroids--bob"
            />
            <img
              src="../assets/img/background-polaroid.png"
              alt="polaroid background"
              class="masculinite__polaroids--background"
            />
          </div>
        </transition>
      </div>
      <div class="masculinite__content details">
        <transition name="text">
          <div v-if="show == 6">
            Selon Tyler c’est en combattant que l’homme retrouve l’accès à sa
            virilité, sa fierté. Il reprend confiance en lui et se sent
            véritablement vivre.
          </div>
        </transition>
        <transition name="text">
          <div v-if="show == 6">
            Bob, en contrepartie, représente la peur des hommes de cette
            génération de la féminisation.
          </div>
        </transition>
      </div>
    </div>
    <div class="slide slide--feminisation">
      <div class="feminisation__title--wrapper">
        <!-- <transition name="fade"> -->
          <div
            class="feminisation__title feminisation__title--first subtitle"
            v-if="show == 7 && tv == 1"
          >
            La peur de la féminisation...
          </div>
        <!-- </transition> -->
        <!-- <transition name="fade"> -->
          <div
            class="feminisation__title feminisation__title--second subtitle"
            v-if="show == 7 && tv == 2"
          >
            ...compensée par la violence
          </div>
        <!-- </transition> -->
      </div>
      <div class="feminisation__tv">
        <div
          class="tv__first--wrapper"
          :class="{unselectedTv: tv == 2}"
          v-on:click="tv = 1"
          v-if="show == 7"
        >
          <div class="tv__first">
            <img class="tv tv__first--tv" src="../assets/img/tv.png" alt="tv" />
          </div>
          <div class="tv__first--detailsWrapper">
            <div class="tv__first--details details">
              Il a peur que la sociéte (et le capitalisme) le transforme en
              femme. Ils se sentent rabaissé par le travail.
            </div>
          </div>
        </div>

        <div
          class="tv__second--wrapper"
          :class="{unselectedTv: tv == 1}"
          v-on:click="tv = 2"
          v-if="show == 7"
        >
          <div class="tv__second">
            <img
              class="tv tv__second--tv"
              src="../assets/img/tv.png"
              alt="tv"
            />
          </div>
          <div class="tv__second--detailsWrapper">
            <div class="tv__second--details details">
              Etre violent est quelque chose qu'ils associent au fait d'etre un
              homme, un vrai. La masculinité, à travers les aggressions, leur
              donne une manière de contre-balancer avec leurs métiers non virils
              et leur consumérisme.
            </div>
          </div>
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
    props: ["show"],

    data() {
      return {
        tv: 1
      };
    }
  };
</script>

<style scoped>
  .noBackground {
    background: none;
  }

  h2 {
    position: absolute;
    transform: translateY(50px);
  }

  .firstPlan {
    z-index: 1;
  }

  .subtitle {
    font-family: "Univers Next Pro Ext", "sans-serif";
    font-weight: bold;
    font-size: 44px;
  }

  .details {
    font-size: 22px;
    font-weight: 100;
    line-height: 120%;
  }

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
    animation: bobine 5s;
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

  .content__title,
  .content__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 230px;
  }

  .content__details {
    justify-content: space-evenly;
  }

  .content__title--first,
  .content__title--second {
    font-family: "Univers Next Pro Ext", "sans-serif";
    font-weight: bold;
    font-size: 24px;
  }

  .content__title--second {
    font-size: 44px;
  }

  .content__book {
    transition: transform 0.5s;
  }

  .content__book:hover {
    transform: translateY(-200px);
  }

  .slide--therapie {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .therapie__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 140px;
  }

  .therapie__content--details {
    width: 408px;
  }

  .therapie__background {
    height: 100vh;
    width: 100vw;
    z-index: -1;
    position: absolute;
    background: black;
  }

  .therapie__image {
    position: absolute;
    transform: translateY(160px);
    height: 100px;
    width: 500px;
  }

  .therapie__image--marker {
    position: absolute;
    left: 33px;
    top: 45px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .therapie__image--marker:hover {
    opacity: 1;
  }

  .slide--masculinite {
    margin: 0 auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
  }

  .masculinite__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .masculinite__title {
    transform: rotate(-5deg) translateX(-30px);
  }

  .masculinite__polaroids {
    position: relative;
    height: 450px;
    width: 700px;
  }

  .masculinite__polaroids:hover .masculinite__polaroids--bob {
    transform: rotate(5deg) scale(0.95) translateX(50px) translateY(5px);
  }

  .masculinite__polaroids:hover .masculinite__polaroids--narrator {
    transform: rotate(-5deg) scale(0.95) translateX(-50px) translateY(5px);
  }

  .masculinite__polaroids--tyler,
  .masculinite__polaroids--narrator,
  .masculinite__polaroids--bob,
  .masculinite__polaroids--background {
    position: absolute;
    transition: all 0.3s;
  }

  .masculinite__polaroids--tyler {
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 3;
  }

  .masculinite__polaroids--bob {
    right: 35px;
    top: 20px;
    transform: rotate(2deg) scale(0.95);
    z-index: 2;
  }

  .masculinite__polaroids--narrator {
    left: 0;
    top: 20px;
    transform: rotate(-2deg) scale(0.95);
    z-index: 2;
  }

  .masculinite__polaroids--background {
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1;
    transform: scale(1);
    top: 25px;
  }

  .masculinite__content {
    width: 340px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    align-items: center;
  }

  .slide--feminisation {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .feminisation__title--wrapper {
    height: 44px;
    width: 760px;
  }

  .feminisation__title {
    position: absolute;
  }

  .feminisation__tv {
    display: flex;
    flex-direction: row;
    width: 85vw;
    height: 500px;
    justify-content: space-around;
  }

  .tv__first--wrapper,
  .tv__second--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 530px;
    cursor: pointer;
  }

  .tv__first--detailsWrapper,
  .tv__second--detailsWrapper {
    height: 300px;
    display: flex;
    align-items: center;
  }

  .tv__first--details,
  .tv__second--details {
    width: 389px;
  }

  .unselectedTv {
    opacity: 0.5;
  }

  /* ANIMS SCOPED */

  .text-enter-active,
  .text-leave-active {
    transition: all 0.5s;
  }
  .text-enter,
  .text-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  .bobine-enter-active {
    transition: all 1s;
  }
  .bobine-leave-active {
    transition: all 1s;
  }
  .bobine-enter {
    transform: translateY(200vh);
  }
  .bobine-leave-to {
    transform: translateY(-200vh);
  }

  /* @keyframes bobine {
  0% {
  }

  30% {
    transform: translateY(50px);
  }

  50% {
    transform: translateY(40px);
  }

  60% {
    transform: translateY(300px);
  }

  70% {
    transform: translateY(100px);
  }

  80% {
    transform: translateY(400px);
  } */

  /* } */
</style>
