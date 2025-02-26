<template>
  <header class="container-white">
    <h1>Utrymning</h1>
    <nav class="container-flex nav">
      <router-link to="/tutorial/1"
        ><button>Tillbaka till Hemberedskap</button></router-link
      >
      <router-link to="/tutorial/3"
        ><button>Starta övning 3</button></router-link
      >
    </nav>
  </header>
  <article class="container-color">
    <h2>Utrymning</h2>
    <p>
      Du kan snabbt behöva lämna ett område vid exempelvis ett hotande militärt
      angrepp, naturolyckor eller farliga utsläpp.
    </p>
    <p>
      Du får veta att du ska utrymma genom bland annar VMA. Lyssna på Sveriges
      Radio P4 och följ myndigheternas instruktioner.
    </p>
    <p>
      Du som inte klarar dig på egen hand kan få hjälp att utrymma, samt akut
      boeden och mat på platsen du kommer till.
    </p>

    <section class="container-white section-info">
      <h2>Bra att ha med</h2>
      <p>
        Planera vad just du behöver ta med om du snabbt måste lämna din bostad
        en kortare eller längre tid. Här är några tips:
      </p>
      <ul class="checklist">
        <li>Mat och vatten för några dagar</li>
        <li>Id-handlingar, bankkort och kontanter</li>
        <li>Mediciner och hjälpmedel, exempelvis hörapparat.</li>
        <li>Radio som drivs med batteri, solceller eller vev.</li>
        <li>Varma kläder, regnkläder och ombyte</li>
        <li>Hygienartiklar.</li>
        <li>Mobiltelefon och laddare.</li>
        <li>Karta, kompass.</li>
        <li>
          Viktiga uppgifter på papper, exempelvis telefonnummer och
          försäkringsbevis.
        </li>
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
  border: 1px dotted black;
}
.checklist {
  list-style-type: square;
}
</style>
