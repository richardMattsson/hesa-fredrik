<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';

  export default {
    components: {
      HeaderTutorialComp
    },
    data() {
      return {
        audioArray: [
          {
            title: 'Viktigt meddelande:',
            src: '/01-viktigt-meddelande.mp3'
          },
          {
            title: 'Faran över:',
            src: '/02-faran-over-.mp3'
          },
          {
            title: 'Flyglarm:',
            src: '/03-flyglarm.mp3'
          },
          {
            title: 'Beredskapslarm:',
            src: '/04-beredskapslarm.mp3'
          }
        ]
      };
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Varningssystem"
    previous-page="Tillbaka till Skyddsrum"
    next-page="Du har genomfört alla övningarna!"
    navigate-back="/tutorial/skyddsrum"
    navigate-forward="/tutorial/introduktion"
  />

  <article class="container-color article-tutorial">
    <section class="section-intro">
      <h2>Lyssna på alarmen:</h2>
    </section>
    <figure :key="audio.src" v-for="audio in audioArray">
      <figcaption>{{ audio.title }}</figcaption>
      <audio controls>
        <source :src="audio.src" type="audio/mpeg" />
      </audio>
      <a :href="audio.src"> Ladda ned ljudfil. </a>
    </figure>
  </article>
  Working progress ... 😳😲🤗🤩
</template>
<style scoped>
  .progress-indicator {
    border: 1px solid black;
    border-radius: 50%;
    padding: 2px;
  }
  .progress-indicator {
    background-color: rgb(19, 201, 207);
  }
  a {
    color: black;
  }
  figure {
    margin-left: 10px;
  }
</style>
