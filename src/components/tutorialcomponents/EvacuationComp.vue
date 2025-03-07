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
        checklistEvacuation: [
          'Mat och vatten för några dagar',
          'Id-handlingar, bankkort och kontanter',
          'Mediciner och hjälpmedel, exempelvis hörapparat.',
          'Radio som drivs med batteri, solceller eller vev.',
          'Varma kläder, regnkläder och ombyte',
          'Hygienartiklar.',
          'Mobiltelefon och laddare.',
          'Karta, kompass.',
          'Viktiga uppgifter på papper, exempelvis telefonnummer och försäkringsbevis.'
        ],
        showChecklist: false
      };
    },
    methods: {
      addToSum() {
        this.showChecklist = true;
        this.authStore.users.forEach((user) => {
          if (user.username === this.authStore.currentUser.username) {
            console.log(user);
            if (user.level > 0 && user.level < 2) {
              user.level = 2;
              localStorage.setItem(
                'users',
                JSON.stringify(this.authStore.users)
              );
              this.authStore.currentUser = user;
            }
          }
        });
      }
    }
  };
</script>
<template>
  <HeaderTutorialComp
    title="Utrymning"
    previous-page="Tillbaka till Hemberedskap"
    next-page="Starta övning Skyddsrum"
    navigate-back="/tutorial/hemberedskap"
    navigate-forward="/tutorial/skyddsrum"
  />

  <article class="container-color article-tutorial">
    <section class="container-color section-intro">
      <h2 class="tutorial-h2">Utrymning</h2>
      <p>
        Du kan snabbt behöva lämna ett område vid exempelvis ett hotande
        militärt angrepp, naturolyckor eller farliga utsläpp.
      </p>
      <p>
        Du får veta att du ska utrymma genom bland annar VMA. Lyssna på Sveriges
        Radio P4 och följ myndigheternas instruktioner.
      </p>
      <p>
        Du som inte klarar dig på egen hand kan få hjälp att utrymma, samt akut
        boeden och mat på platsen du kommer till.
      </p>
    </section>
    <section class="container-white section-info">
      <h2 class="tutorial-h2">Bra att ha med</h2>
      <p>
        Planera vad just du behöver ta med om du snabbt måste lämna din bostad
        en kortare eller längre tid. Här är några tips:
      </p>
      <p>
        Idé: Låt användaren skapa/få en egen checklista där vi samlar allt som
        kan vara bra att förbereda sig med.
      </p>
      <input type="button" value="Visa checklista" @click.once="addToSum()" />

      <ul v-if="showChecklist" class="checklist">
        <li :key="task" v-for="task in checklistEvacuation">{{ task }}</li>
      </ul>
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
    padding-left: 2rem;
    padding-right: 2rem;
    border: 1px dotted black;
  }
  .checklist {
    list-style-type: square;
  }
</style>
