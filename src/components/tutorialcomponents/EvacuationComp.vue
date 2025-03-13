<script>
  import HeaderTutorialComp from './HeaderTutorialComp.vue';
  import { mapStores } from 'pinia';
  import { useAuthStore } from '../../stores/useAuthStore';
  import IntroParagraphComp from './IntroParagraphComp.vue';

  export default {
    computed: {
      ...mapStores(useAuthStore)
    },
    components: {
      HeaderTutorialComp,
      IntroParagraphComp
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
        introText: {
          title: 'Utrymning',
          text: 'Du kan snabbt behöva lämna ett område vid exempelvis ett hotande militärt angrepp, naturolyckor eller farliga utsläpp.',
          text2:
            'Du får veta att du ska utrymma genom bland annar VMA. Lyssna på Sveriges Radio P4 och följ myndigheternas instruktioner.',
          text3:
            'Du som inte klarar dig på egen hand kan få hjälp att utrymma, samt akut boeden och mat på platsen du kommer till.'
        },
        showChecklist: false,
        showHideChecklist: { show: 'Visa checklista', hide: 'Dölj checklista' }
      };
    },
    methods: {
      increaseLevel() {
        this.showChecklist = !this.showChecklist;
        this.authStore.users.forEach((user) => {
          if (user.username === this.authStore.currentUser.username) {
            if (user.level > 0 && user.level < 2) {
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
    title="Övning 2 - Utrymning"
    previous-page="Tillbaka till Hemberedskap"
    next-page="Starta övning Skyddsrum"
    navigate-back="/tutorial/hemberedskap"
    navigate-forward="/tutorial/skyddsrum"
  />

  <article class="container-white article-tutorial">
    <IntroParagraphComp :input-text="introText" />

    <section class="container-white section-info">
      <h2 class="tutorial-h2">Bra att ha med</h2>
      <p>
        Planera vad just du behöver ta med om du snabbt måste lämna din bostad
        en kortare eller längre tid. Här är några tips:
      </p>
      <input
        class="buttonColor"
        type="button"
        :value="showChecklist ? showHideChecklist.hide : showHideChecklist.show"
        @click="increaseLevel()"
      />

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
    border: 1px solid #333;
    border-radius: 4px;
  }

  .section-info {
    margin-top: 20px;
    padding-left: 2rem;
    padding-right: 2rem;
    border: 1px solid #333;
    border-radius: 4px;
  }
  .checklist {
    list-style-type: square;
  }
</style>
