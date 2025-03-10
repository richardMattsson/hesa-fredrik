<script>
export default {
data() {
  return {
    linkData: [
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/sa-fungerar-vart-forsvar/totalforsvaret---du-ar-en-del-av-sveriges-beredskap/",
      image: "/pexels-mikhail-nilov-7988125.jpg",
      alt: "A picture on a desk, where a person are sitting and writing code on a laptop and a tablet",
      value: "Totalförsvaret"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/hemberedskap---preppa-for-minst-en-vecka/grunder-i-hemberedskap/",
      image: "/pexels-julia-m-cameron-6994945.jpg",
      alt: "A picture of a table with water bottles, plasticbags with pasta and a preserve tin",
      value: "Hemberedskap"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/viktigt-meddelande-till-allmanheten-vma/",
      image: "/pexels-bigshowlamar-27577330.jpg",
      alt: "A picture of a warning horn",
      value: "Varningsystem"
    },
    {
      link: "https://www.msb.se/sv/rad-till-privatpersoner/skyddsrum-utrymning-och-varningssystem/bra-att-veta-om-skyddsrum/",
      image: "/pexels-olavi-anttila-264846761-13153493.jpg",
      alt: "A picture of a swedish fighter jet",
      value: "Skyddsrum"
    }
  ]
  }
},
}
</script>
<template>
  <article id="information-page">
    <div id="information-page-heading">
      <h1>Här hittar du länkar till mer information</h1>
    </div>
    <section
      class="wrapper-information"
      v-for="(data, index) in linkData"
      :key="index"
    >
      <a
        :href="data.link"
        :alt="data.alt"
        :style="{
          backgroundImage: data.image ? 'url(' + data.image + ')' : 'none'
        }"
        ><span>{{ data.value }}</span></a
      >
    </section>
  </article>
</template>

<style scoped>

#information-page {
  height:100vh;
}

h1 {
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 20px 0;
  text-align: center;
  font-size: large;
  background-color: whitesmoke;
  color: black;
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
    width: 80%;
    max-width: 600px;
    height: 15vh;
    text-decoration: none;
    font-size: 24px;
    color: white;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    background-size: cover;
  }

.wrapper-information a span {
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 4px;
}

</style>
