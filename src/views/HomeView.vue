<template>
  <main id="container-main">
    <h1>HESA FREDRIK</h1>
    <img src="/Skärmbild 2025-02-21 142435.png" alt="" id="img-home" />

    <router-link to="/question" tag="button"
      ><button class="start-button">Starta spel</button></router-link
    >
  </main>
</template>

<script scoped>
export default {};
</script>
<style>
#container-main {
  background-color: #ffda00;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#img-home {
  width: 50%;
}
</style>
