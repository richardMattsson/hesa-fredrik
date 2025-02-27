<script>
  export default {
    data() {
      return {
        audioArray: [
          {
            title: 'Lyssna på viktigt meddelande:',
            src: '/01-viktigt-meddelande.mp3'
          },
          {
            title: 'Lyssna på faran över:',
            src: '/02-faran-over-.mp3'
          },
          {
            title: 'Lyssna på flyglarm:',
            src: '/03-flyglarm.mp3'
          },
          {
            title: 'Lyssna på beredskapslarm:',
            src: '/04-beredskapslarm.mp3'
          }
        ]
      };
    }
  };
</script>
<template>
  <header class="container-white">
    <h1>Varningssystem</h1>
    <nav class="container-flex nav">
      <router-link to="/tutorial/skyddsrum"
        ><button>Tillbaka till Skyddsrum</button></router-link
      >
      <div class="progress-indicator">🤩</div>
      <router-link to="/tutorial"
        ><button>Du har genomfört alla övningarna!</button></router-link
      >
    </nav>
  </header>
  <article class="article-tutorial">
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
</style>
