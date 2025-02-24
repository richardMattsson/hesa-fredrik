<template>
  <main id="container-main">
    <h1>HESA FREDRIK</h1>
    <img
      src="/hesa-fredrik-logo.png"
      alt="hesa fredrik logga, radiomast alarm"
      id="img-home"
    />

  <p>Testa din krisberedskap – innan det är skarpt läge!</p>

    <router-link to="/question" tag="button"
      ><button class="start-button">Starta spel</button></router-link
    >
  </main>
</template>

<script>
export default {};
</script>
<style scoped>
#img-home {
  width: 50%;
}

.start-button{
  width: 100px;
  height: 40px;
  border-radius: 4px;
}
</style>
