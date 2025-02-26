<template>
  <header id="container-header">
    <nav id="container-nav">
      <ul id="container-ul">
        <li class="container-links" id="nav-home">
          <RouterLink to="/">Hem</RouterLink>
        </li>
        <li class="container-links" id="nav-information">
          <RouterLink to="/information">Information</RouterLink>
        </li>
        <li class="container-links" id="nav-leaderboard">
          <RouterLink to="/scoretable">Ledartavla</RouterLink>
        </li>
        <li class="container-links" id="nav-tutorial">
          <RouterLink to="/tutorial">Övningar</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <footer id="container-footer">
    <p class="info-text">Quiz om förberedelser inför en eventuell kris.</p>
    <p class="info-text">
      Av: Richard Mattsson, Kåre Lindqvist, Louise Nensén Lagnefors
    </p>
  </footer>
</template>
<style scoped>
#container-header {
  background-color: #333;
  color: whitesmoke;
}
#container-nav {
  /* background-color: pink; */
  display: flex;
  flex-direction: row;
  /* flex-grow: 1; */
}
#container-ul {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: space-around;
  list-style-type: none;
}
.container-links {
  height: 4rem;
  display: flex;
  /* justify-content: center; */
  padding: 0.4rem;
  align-items: center;
}
.container-links:hover {
  cursor: pointer;
  background-color: #242222;
}
#container-footer {
  background-color: #333;
  color: whitesmoke;
  height: 2rem;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: auto; /* Pushes footer to the bottom */
}
.info-text {
  margin: 0;
}
</style>
