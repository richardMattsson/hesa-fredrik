<template>
  <article id="information-page-heading">
    <section id="information-page-section-heading">
      <h1>Informationslänkar</h1>
    </section>
    <div class="wrapper-information">
      <a href="#">Totalförsvaret</a>
      <a href="#">Hemberedskap</a>
      <a href="#">Varningsystem</a>
      <a href="#">Skyddsrum</a>
    </div>
  </article>
</template>

<style>
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
  background-color:whitesmoke;
  width: 200%;
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
