<script>

export default {
data() {
  return {
    linkData: []
  }
},
created(){
  this.linkData = [
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/sa-fungerar-vart-forsvar/totalforsvaret---du-ar-en-del-av-sveriges-beredskap/",
      image: "pexels-mikhail-nilov-7988125.jpg",
      value: "Totalförsvaret"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/hemberedskap---preppa-for-minst-en-vecka/grunder-i-hemberedskap/",
      image: "pexels-julia-m-cameron-6994945.jpg",
      value: "Hemberedskap"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/viktigt-meddelande-till-allmanheten-vma/",
      image: "pexels-bigshowlamar-27577330.jpg",
      value: "Varningsystem"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/bra-att-veta-om-skyddsrum/",
      image: "pexels-olavi-anttila-264846761-13153493.jpg",
      value: "Skyddsrum"
    }
  ]
},
}

</script>
<template>
  <article id="information-page">
    <section id="information-page-heading">
      <h1>Här hittar du mer information</h1>
    </section>
    <section class="wrapper-information" v-for="(data, index) in linkData" :key="index">
      <a :href="data.link" :style="{ backgroundImage: data.image ? 'url(' + data.image + ')' : 'none'}"><span>{{data.value}}</span></a>
    </section>
  </article>
</template>

<style scoped>
#information-page {
  text-align: center;
  height:100vh;
}

#information-page-heading {
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 0;
  background-color: whitesmoke;;
}

h1 {
  margin: 0;
  color: black;
  font-size: large;
}

.wrapper-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.wrapper-information a {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: whitesmoke;
  width: 80%;
  max-width: 600px;
  height: 15vh;
  text-decoration: none;
  font-size: 24px;
  color: white;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  background-size: cover;
}

.wrapper-information a:last-child {
  margin-bottom: 0;
}

.wrapper-information a span {
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 4px;
}
/*
.wrapper-information a:hover {
  background-color: #ccc;
} */
</style>
