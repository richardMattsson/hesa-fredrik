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
        showAnswer: { title: '', points: 0 },
        sumOfAnswers: 0,
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
              'Fråga 1/3. Du behöver minst tre liter varje dag, i första hand för att dricka och laga mat.'
          },
          {
            title: 'Värme',
            info: 'Din bostad blir snabbt kall om det är strömavbrott på vinter. Välj ett rum att vara i. Häng filtar för fönstren och täck golvet med mattor. Bra att ha hemma:',
            question:
              'När det blir ett elavbrott på vintern, hur lång tid tar det genomsnitt för ett hus att bli utkylt?',
            answer: 'Fråga 2/3. Tre dagar.'
          },
          {
            title: 'Kommunikation',
            info: 'Du behöver kunna ta emot nyheter och viktig information frånmyndigheter. Du behöver också kunna ha kontakt med anhöriga och vänner. Bra att ha hemma:',
            question:
              'En större samhällskris inträffar som gör att det inte finns ström. Vad är viktigast att göra direkt?',
            answer: 'Fråga 3/3. Att lyssna på radio.'
          }
        ]
      };
    },
    methods: {
      addToSum(item) {
        this.showAnswer.title = item.title;
        this.showAnswer.points = 1;
        if (this.showAnswer.points === 1) {
          this.sumOfAnswers++;
        }

        if (this.sumOfAnswers === 3) {
          this.authStore.users.forEach((user) => {
            if (user.username === this.authStore.currentUser.username) {
              if (!user.level) {
                user.level = 1;
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
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Övning 1 - Hemberedskap"
    previous-page="Tillbaka till Introduktion"
    next-page="Starta övning Utrymning"
    navigate-back="/tutorial/introduktion"
    navigate-forward="/tutorial/utrymning"
  />

  <article class="container-white article-tutorial">
    <section class="section-intro">
      <h2 class="tutorial-h2">Hemberedskap</h2>
      <p>
        Du bidrar till hela samhällets beredskap om du har hemberedskap för
        minst en vecka. Anpassa råden efter dina behov och förutsättningar.
        Vissa saker kanske du kan dela med andra, exempelvis dina grannar. I
        kris och krig måste vi alla hjälpa varandra.
      </p>
      <p>
        Förbered dig så du inte måste skaffa allt på en gång om något allvarligt
        händer.
      </p>
    </section>
    <div :key="item.title" v-for="item in items">
      <section class="container-white section-info">
        <h2 class="tutorial-h2">{{ item.title }}</h2>
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
        <div class="container-white container-div">
          <p>{{ item.question }}</p>
          <input
            class="buttonColor"
            type="button"
            value="Visa rätt svar"
            @click="addToSum(item)"
          />
          <p class="exampleAnswer" v-if="showAnswer.title === item.title">
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
    border: 1px solid #333;
    border-radius: 4px;
  }
  .section-info {
    margin-top: 20px;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .checklist {
    list-style-type: circle;
  }
</style>
