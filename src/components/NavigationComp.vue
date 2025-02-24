<template>
  <header id="container-header">
    <nav id="container-nav">
      <ul id="container-ul">
        <li class="container-links" id="nav-home">
          <RouterLink to="/">Hem</RouterLink>
        </li>
        <li class="container-links" id="nav-result">
          <RouterLink to="/information">Informationslänkar</RouterLink>
        </li>
        <li class="container-links" id="nav-leaderboard">
          <RouterLink to="/scoretable">Leaderboard</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style>
#container-header {
  background-color: #333;
  color: whitesmoke;
}
#container-nav {
  /* background-color: pink; */
  display: flex;
  flex-direction: row;
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
  justify-content: center;
  align-items: center;
  /* border: 1px solid whitesmoke; */
}
.container-links:hover {
  cursor: pointer;
  background-color: #242222;
}
#nav-home {
  flex-grow: 1.2;
}
#nav-result {
  flex-grow: 1.2;
}
#nav-leaderboard {
  flex-grow: 1;
}
</style>
