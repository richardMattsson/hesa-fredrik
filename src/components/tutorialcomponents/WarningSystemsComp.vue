<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';
  import { mapStores } from 'pinia';
  import { useAuthStore } from '../../stores/useAuthStore';

  export default {
    computed: {
      ...mapStores(useAuthStore)
    },
    components: {
      HeaderTutorialComp
    },
    data() {
      return {
        audioArray: [
          {
            img: 'viktigt-meddelande-till-allmanheten-vma.png',
            title: 'Viktigt meddelande:',
            src: '01-viktigt-meddelande.mp3'
          },
          {
            img: 'faran-over.png',
            title: 'Faran över:',
            src: '02-faran-over-.mp3'
          },
          {
            img: 'flyglarm.png',
            title: 'Flyglarm:',
            src: '03-flyglarm.mp3'
          },
          {
            img: 'beredskapslarm.png',
            title: 'Beredskapslarm:',
            src: '04-beredskapslarm.mp3'
          }
        ],
        showMessage: false
      };
    },
    methods: {
      onClick(audio) {
        this.showMessage = audio.title;
        this.authStore.users.forEach((user) => {
          if (user.username === this.authStore.currentUser.username) {
            if (user.level > 2 && user.level < 4) {
              user.level += 1;
              localStorage.setItem(
                'users',
                JSON.stringify(this.authStore.users)
              );
              this.authStore.currentUser = user;
              localStorage.setItem(
                'currentUser',
                JSON.stringify(this.authStore.currentUser)
              );
            }
          }
        });
      }
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Övning 4 - Varningssystem"
    previous-page="Tillbaka till Skyddsrum"
    next-page="Tillbaka till introduktionen"
    navigate-back="/tutorial/skyddsrum"
    navigate-forward="/tutorial/introduktion"
  />

  <article class="container-white article-tutorial">
    <section class="section-intro">
      <h2>Klicka för mer information</h2>
    </section>
    <figure
      :key="audio.src"
      v-for="audio in audioArray"
      :class="{ showFigure: showMessage === audio.title }"
    >
      <figcaption @click="onClick(audio)">{{ audio.title }}</figcaption>
      <img v-if="showMessage === audio.title" :src="audio.img" alt="" />
      <audio v-if="showMessage === audio.title" controls>
        <source :src="audio.src" type="audio/mpeg" />
      </audio>
      <a v-if="showMessage === audio.title" :href="audio.src">
        Ladda ned ljudfil.
      </a>
    </figure>
  </article>
</template>
<style scoped>
  .section-intro {
    text-align: center;
  }

  figcaption {
    width: 60%;
    border-style: none;
    border-radius: 4px;
    font-weight: 750;
    background-color: #333;
    margin: 1rem 0;
    font-size: medium;
    color: whitesmoke;
    padding: 5px;
    cursor: pointer;
    text-align: center;
  }

  a {
    color: black;
  }
  figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .showFigure {
    height: 40%;
  }
  img {
    width: 100%;
  }
</style>
