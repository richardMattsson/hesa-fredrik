<script>
  import './TutorialStyles.css';

  export default {
    data() {
      return {
        showAnswer: null,

        itemsGoodToHave: [
          'Radio som drivs med batteri, solceller, eller vev.',
          'Extra batterier',
          'Mobil och laddade extra batterier (powerbank)',
          'Mobilladdare att använda i bilen.',
          'Viktiga telefonnummer på papper.'
        ],
        items: [
          {
            title: 'Vatten',
            info: 'Du behöver minst tre liter vatten per dygn, i första hand för att dricka och laga mat. Om det blir brist på dricksvatten kan kommunen ställa vattentankar, men du behöver ändå ha vatten hemma.',
            question:
              'Hur många liter vatten behöver en person i genomsnitt per dag?',
            answer:
              'Du behöver minst tre liter varje dag, i första hand för att dricka och laga mat.'
          },
          {
            title: 'Värme',
            info: 'Din bostad blir snabbt kall om det är strömavbrott på vinter. Välj ett rum att vara i. Häng filtar för fönstren och täck golvet med mattor. Bra att ha hemma:',
            question:
              'När det blir ett elavbrott på vintern, hur lång tid tar det genomsnitt för ett hus att bli utkylt?',
            answer: 'Tre dagar.'
          },
          {
            title: 'Kommunikation',
            info: 'Du behöber kunna ta emot nyheter och viktig information frånmyndigheter. Du behöver också kunna ha kontakt med anhöriga och vänner. Bra att ha hemma:',
            question:
              'En större samhällskris inträffar som gör att det inte finns ström. Vad är viktigast att göra direkt?',
            answer: 'Att lyssna på radio.'
          }
        ]
      };
    }
  };
</script>
<template>
  <header class="container-white">
    <h1>Hemberedskap</h1>
    <nav class="container-flex nav">
      <router-link to="/tutorial"
        ><button>Tillbaka till Introduktion</button></router-link
      >
      <div class="progress-indicator">😳</div>
      <router-link to="/tutorial/utrymning"
        ><button>Starta övning Utrymning</button></router-link
      >
    </nav>
  </header>
  <article class="container-color article-tutorial">
    <h2>Hemberedskap</h2>
    <p>
      Du bidrar till hela samhällets beredskap om du har hemberedskap för minst
      en vecka. Anpassa råden efter dina behov och förutsättningar. Vissa saker
      kanske du kan dela med andra, exempelvis dina grannar. I kris och krig
      måste vi alla hjälpa varandra.
    </p>
    <p>
      Förbered dig så du inte måste skaffa allt på en gång om något allvarligt
      händer.
    </p>

    <div :key="item.title" v-for="item in items">
      <section class="container-white section-info">
        <h2>{{ item.title }}</h2>
        <p>
          {{ item.info }}
        </p>
        <ul v-if="item.title === 'Kommunikation'">
          <li :key="index" v-for="(itemGoodToHave, index) in itemsGoodToHave">
            {{ itemGoodToHave }}
          </li>
        </ul>
      </section>
      <section class="container-white container-example">
        <h3>Exempelfråga</h3>
        <div class="container-color container-div">
          <p>{{ item.question }}</p>
          <input
            type="button"
            value="Visa rätt svar"
            @click="showAnswer = item.title"
          />
          <p v-if="showAnswer === item.title">
            {{ item.answer }}
          </p>
        </div>
      </section>
    </div>
  </article>
</template>
<style scoped>
  .container-example {
    margin-top: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
    border: 1px dotted black;
  }
  .section-info {
    margin-top: 20px;
    border: 1px dotted black;
  }
  .checklist {
    list-style-type: circle;
  }
  .progress-indicator {
    background-color: rgb(255, 217, 0);
  }
</style>
