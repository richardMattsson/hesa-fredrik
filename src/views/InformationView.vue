<template>
  <article id="information-page-heading">
    <section id="information-page-section-heading"></section>
    <div class="wrapper-information">
      <a href="https://www.msb.se/sv/rad-till-privatpersoner/sa-fungerar-vart-forsvar/totalforsvaret---du-ar-en-del-av-sveriges-beredskap/">Totalförsvaret</a>
      <a href="https://www.msb.se/sv/rad-till-privatpersoner/hemberedskap---preppa-for-minst-en-vecka/grunder-i-hemberedskap/">Hemberedskap</a>
      <a href="https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/viktigt-meddelande-till-allmanheten-vma/">Varningsystem</a>
      <a href="https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/bra-att-veta-om-skyddsrum/">Skyddsrum</a>
    </div>
  </article>
</template>

<style scoped>
#information-page-heading {
  text-align: center;
}

.wrapper-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
}

.wrapper-information a {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: whitesmoke;
  width: 80%;
  height: 15vh;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
}

.wrapper-information a:last-child {
  margin-bottom: 0;
}

.wrapper-information a:hover {
  background-color: #ccc;
}
</style>
