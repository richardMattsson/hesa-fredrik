<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';

  import IntroParagraphComp from './IntroParagraphComp.vue';
  import InfoQuestionComp from './InfoQuestionComp.vue';

  import { mapStores } from 'pinia';
  import { useAuthStore } from '../../stores/useAuthStore';

  export default {
    computed: {
      ...mapStores(useAuthStore)
    },
    components: {
      HeaderTutorialComp,
      InfoQuestionComp,
      IntroParagraphComp
    },
    data() {
      return {
        showAnswer: null,
        sumOfAnswers:
          JSON.parse(localStorage.getItem('savedSumOfAnswers')) || 0,
        introText: {
          title: 'Hemberedskap',
          text: 'Du bidrar till hela samhällets beredskap om du har hemberedskap för minst en vecka. Anpassa råden efter dina behov och förutsättningar. Vissa saker kanske du kan dela med andra, exempelvis dina grannar. I kris och krig måste vi alla hjälpa varandra.',
          text2:
            'Förbered dig så du inte måste skaffa allt på en gång om något allvarligt händer.'
        },

        items: [
          {
            amountOfClicks: JSON.parse(localStorage.getItem('Vatten')) || 0,
            title: 'Vatten',
            info: 'Du behöver minst tre liter vatten per dygn, i första hand för att dricka och laga mat. Om det blir brist på dricksvatten kan kommunen ställa vattentankar, men du behöver ändå ha vatten hemma.',
            question:
              'Hur många liter vatten behöver en person i genomsnitt per dag?',
            answer:
              'Fråga 1/3. Du behöver minst tre liter varje dag, i första hand för att dricka och laga mat.'
          },
          {
            amountOfClicks: JSON.parse(localStorage.getItem('Värme')) || 0,
            title: 'Värme',
            info: 'Din bostad blir snabbt kall om det är strömavbrott på vinter. Välj ett rum att vara i. Häng filtar för fönstren och täck golvet med mattor.',
            question:
              'När det blir ett elavbrott på vintern, hur lång tid tar det genomsnitt för ett hus att bli utkylt?',
            answer: 'Fråga 2/3. Tre dagar.'
          },
          {
            amountOfClicks:
              JSON.parse(localStorage.getItem('Kommunikation')) || 0,
            title: 'Kommunikation',
            info: 'Du behöver kunna ta emot nyheter och viktig information från myndigheter. Du behöver också kunna ha kontakt med anhöriga och vänner. Bra att ha hemma:',
            question:
              'En större samhällskris inträffar som gör att det inte finns ström. Vad är viktigast att göra direkt?',
            answer: 'Fråga 3/3. Att lyssna på radio.',
            itemsGoodToHave: [
              'Radio som drivs med batteri, solceller, eller vev.',
              'Extra batterier',
              'Mobil och laddade extra batterier (powerbank)',
              'Mobilladdare att använda i bilen.',
              'Viktiga telefonnummer på papper.'
            ]
          }
        ]
      };
    },
    methods: {
      addToSum(item) {
        this.showAnswer = item.title;

        if (item.amountOfClicks === 0) {
          item.amountOfClicks++;
          this.sumOfAnswers++;
          localStorage.setItem(
            [item.title],
            JSON.stringify(item.amountOfClicks)
          );
          localStorage.setItem(
            'savedSumOfAnswers',
            JSON.stringify(this.sumOfAnswers)
          );
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
    <IntroParagraphComp :input-text="introText" />

    <div :key="index" v-for="(item, index) in items">
      <InfoQuestionComp :item="items[index]" />

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
          <p class="exampleAnswer" v-if="showAnswer === item.title">
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
