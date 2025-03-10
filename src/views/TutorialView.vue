<template>
  <div id="tutorials">
    <router-view />
  </div>
</template>
<style>
  .article-tutorial {
    margin-left: 2rem;
    margin-right: 2rem;
    height: 100%;
    margin-top: auto;
  }
  #tutorials {
    height: 100vh;
    margin-top: auto;
    overflow: auto;
    background-color: whitesmoke;
  }
  .tutorial-h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  .tutorial-h2 {
    font-size: 1.2rem;
  }

  .container-color {
    background-color: #ffda00;

    padding: 10px;
  }
  .exampleAnswer {
    /* background-color: #ffda00; */
    color: darkgreen;
    font-weight: 600;
  }
  .buttonColor {
    background-color: #ffda00;
    /* border-style: none; */
    border: 1px solid #333;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
  }
  .buttonDark {
    border-style: none;
    border-radius: 4px;
    background-color: #333;
    margin: 1rem 0;
    color: whitesmoke;
    cursor: pointer;
  }
  .container-white {
    background-color: whitesmoke;

    padding: 10px;
  }
  .container-flex {
    display: flex;
  }
  .tutorial-nav {
    justify-content: space-evenly;
  }
  .progress-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress-bar > p {
    margin: 0;
    margin-top: 5px;
    width: 80%;
  }
  .section-intro {
    padding: 0.5rem;
    margin-top: 10px;
  }
  @media screen and (max-width: 420px) {
    .tutorial-h1 {
      font-size: 1rem;
      text-align: center;
    }
    .buttonDark {
      font-size: 0.7rem;
    }
    .progress-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .progress-bar > p {
      margin: 0;
      margin-top: 5px;
      width: 80%;
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 900px) {
    .article-tutorial {
      margin-left: 7rem;
      margin-right: 7rem;
      height: 100%;
      margin-top: auto;
    }
  }
  @media screen and (min-width: 1200px) {
    .article-tutorial {
      margin-left: 10rem;
      margin-right: 10rem;
      height: 100%;
      margin-top: auto;
    }
  }
  @media screen and (min-width: 1500px) {
    .article-tutorial {
      margin-left: 20rem;
      margin-right: 20rem;
      height: 100%;
      margin-top: auto;
    }
  }
</style>
