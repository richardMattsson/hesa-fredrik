<script>
import './TutorialStyles.css';

export default {
  data() {
    return {
      showAnswerWater: false,
      showAnswerHeating: false,
      showAnswerCommunication: false,
    };
  },
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
  <article class="container-color">
    <h2>Hemberedskap</h2>
    <p>
      Du bidrar till hela samhällets beredsakp om du har hemberedskap för minst
      en vecka. Anpassa råden efter dina behov och förutsättningar. Vissa saker
      kanske du kan dela med andra, exempelvis dina grannar. I kris och krig
      ämåste vi alla hjälpa varandra.
    </p>
    <p>
      Förbered dig så du inte måste skaffa allt på en gång om något allvarligt
      händer.
    </p>

    <section class="container-white section-info">
      <h2>Vatten</h2>
      <p>
        Du behöver minst tre liter vatten per dygn, i första hand för att dricka
        och laga mat. Om det blir brist på dricksvatten kan kommunen ställa ut
        vattentankar, men du behöver ändå ha vatten hemma.
      </p>
      <!-- <ul class="checklist">
        <li>Skaffa dunkar eller hinkar med lock att hämta vatten i.</li>
        <li>Köp vatten på flaska eller fyll dunkar gjorda för livsmedel</li>
        <li>
          Förvara vattnet mörkt och svalt. Kontrollera om vattnet smakar och
          luktar bra en eller ett par gånger per år. Byt vid behov.
        </li>
        <li>
          Om du är osäker på om vattnet är rent, koka vattnet tills det bubblar
          kraftigt.
        </li>
      </ul> -->
    </section>
    <section class="container-white container-example">
      <h3>Exempelfråga</h3>
      <div class="container-color container-div">
        <p>Hur många liter vatten behöver en person i genomsnitt per dag?</p>
        <button @click="showAnswerWater = !showAnswerWater">
          Visa rätt svar
        </button>
        <p v-if="showAnswerWater">
          Du behöver minst tre liter varje dag, i första hand för att dricka och
          laga mat.
        </p>
      </div>
    </section>
    <section class="container-white section-info">
      <h2>Värme</h2>
      <p>
        Din bostad blir snabbt kall om det är strömavbrott på vinter. Välj ett
        rum att vara i. Häng filtar för fönstren och täck golvet med mattor. Bra
        att ha hemma:
      </p>
    </section>
    <section class="container-white container-example">
      <h3>Exempelfråga</h3>
      <div class="container-color container-div">
        <p>
          När det blir ett elavbrott på vintern, hur lång tid tar det i
          genomsnitt för ett hus att bli utkylt?
        </p>
        <button @click="showAnswerHeating = !showAnswerHeating">
          Visa rätt svar
        </button>
        <p v-if="showAnswerHeating">Tre dagar.</p>
      </div>
    </section>
    <section class="container-white section-info">
      <h2>Kommunikation</h2>
      <p>
        Du behöber kunna ta emot nyheter och viktig information från
        myndigheter. Du behöbver också kunna ha kontakt med anhöriga och vänner.
        Bra att ha hemma:
      </p>
      <ul>
        <li>Radio som drivs med batteri, solceller, eller vev.</li>
        <li>Extra batterier</li>
        <li>Mobil och laddade extra batterier (powerbank)</li>
        <li>Mobilladdare att använda i bilen.</li>
        <li>Viktiga telefonnummer på papper.</li>
      </ul>
    </section>
    <section class="container-white container-example">
      <h3>Exempelfråga</h3>
      <div class="container-color container-div">
        <p>
          En större samhällskris inträffar som gör att det inte finns ström. Vad
          är viktigast att göra direkt?
        </p>
        <button @click="showAnswerCommunication = !showAnswerCommunication">
          Visa rätt svar
        </button>
        <p v-if="showAnswerCommunication">Att lyssna på radio.</p>
      </div>
    </section>
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
