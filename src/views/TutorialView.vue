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
    overflow: auto;
  }
  #tutorials {
    height: 100vh;
    margin-top: auto;
    overflow: auto;
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
  .progress-indicator {
    border: 1px solid black;
    border-radius: 50%;
    padding: 2px;
  }
  .section-intro {
    padding: 0.5rem;
    margin-top: 10px;
  }
</style>
