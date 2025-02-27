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
      image: "/pexels-olavi-anttila-264846761-13153493.jpg",
      value: "Totalförsvaret"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/hemberedskap---preppa-for-minst-en-vecka/grunder-i-hemberedskap/",
      image: "/hemberedskap.png",
      value: "Hemberedskap"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/viktigt-meddelande-till-allmanheten-vma/",
      image: "",
      value: "Varningsystem"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/bra-att-veta-om-skyddsrum/",
      image: "",
      value: "Skyddsrum"
    }
  ]
},
}

</script>
<template>
  <article id="information-page-heading">
    <section class="wrapper-information" v-for="(data, index) in linkData" :key="index">
      <a :href="data.link" :style="{ backgroundImage: data.image ? 'url(' + data.image + ')' : 'none'}">{{data.value}}</a>
    </section>
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
  max-width: 600px;
  height: 15vh;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  background-size: cover;
}

.wrapper-information a:last-child {
  margin-bottom: 0;
}

.wrapper-information a:hover {
  background-color: #ccc;
}
</style>
